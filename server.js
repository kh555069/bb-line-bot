const linebot = require('linebot');
const request = require("request");
const cheerio = require("cheerio");


var bot = linebot({
  channelId: 'channelId',
  channelSecret: 'channelSecret',
  channelAccessToken: 'channelAccessToken'
});


bot.on('message', function (event) {
    try {
        // event.message.text 是機器人接收到的訊息
        receiveText = event.message.text;
        GID = event.source.groupId;
        UID = event.source.userId;
        if (event.source.type=='group'){
            replyID = GID;
        } else {
            replyID = UID;
        };
        if (event.message.type=='text') {
            request({
              url: `http://opendata.epa.gov.tw/ws/Data/AQI/?$format=json`,
              method: "GET"
            }, function(error, response, body) {
                if(error || !body) { return; }
                var doc = JSON.parse(body);
                var replyMsg = `更新時間: ${doc[0]['PublishTime']}\n`
                for (let obj of doc){
                    if (obj['County'].includes(receiveText)){
                        msg = `${obj['SiteName']}目前的 PM2.5 濃度: ${obj['PM2.5']}`;
                        replyMsg = replyMsg.concat( msg+'\n' );
                    };
                };
                // event.reply 可以將訊息傳給對方
                event.reply(replyMsg).then(function (data) {
                }).catch(function (error) {});
            });
        } else if (event.message.type=="sticker") {
            replySticker = {
                "type": "sticker",
                "packageId": "11537",
                "stickerId": "52002752"
            };
            event.reply(replySticker).then(function (data) {
            }).catch(function (error) {});
        } else {
        };
    } catch(e) {
        console.log(e)
        event.reply("請輸入正確的縣市名稱").then(function (data) {
        }).catch(function (error) {});
    };
});

bot.listen('/linewebhook', process.env.PORT || 3000, function () {
    console.log(`Server is running on port ${process.env.PORT}`);
});
