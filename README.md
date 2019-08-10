# Line 聊天機器人
查詢各縣市 PM 2.5 濃度der聊天機器人

![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/line-demo.png)


## 申請Line Messaging API (aka Line Bot)
https://developers.line.biz/en/

Login 之後點選 Create new provider， 輸入 Provider Name 然後送出，
Provider 建完之後，點選 Messaging API 下面的 Create API，
輸入Bot 的資料，這裡輸入的名字就是Line聊天時顯示的名字，
Privacy Policy URL 跟 Terms of use URL 可以先空著，
然後送出、確認、送出就完成申請啦
完成之後點進你的Bot，將 Auto-reply messages 以及 Greeting messages 關掉

這裡比較重要的東西有 "Channel ID", "Channel secret", "Channel access token"

# 安裝 node
sudo apt-get install nodejs -y

npm init

npm install cheerio request linebot


# heroku
`git init`

`heroku create bb-line-bot`

create 完之後記得加上 `heroku git:remote -a bb-line-bot`

`git add .`

`git commit -m 'init'`

`git push heroku master`

到這裡就算完成 webhook 的設定啦

