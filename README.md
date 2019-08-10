# Line 聊天機器人
查詢各縣市 PM 2.5 濃度der聊天機器人

![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/line-demo.png)


## 申請Line Messaging API (aka Line Bot)
https://developers.line.biz/en/

Login 之後點選 Create new provider， 輸入 Provider Name 然後送出
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/1.png)
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/2.png)

Provider 建完之後，點選 Messaging API 下面的 Create API
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/3.png)

輸入Bot 的資料，這裡輸入的名字就是Line聊天時顯示的名字，Privacy Policy URL 跟 Terms of use URL 可以先空著，然後送出、確認、送出就完成申請啦
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/4.png)
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/5.png)
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/6.png)

完成之後點進你的Bot，看到Using LINE@ features, 點擊右邊的 Set message ， 將 Auto-reply messages 以及 Greeting messages 關掉，順便把 Webhooks 打開
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/11.png)
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/12.png)

在 webhook URL 貼上架在heroku上的server，然後點擊驗證。
最後記得點擊 Channel access token 右邊的 Issue 取得 token。
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/13.png)
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/14.png)


這裡比較重要的東西有 "Channel ID", "Channel secret", "Channel access token"，在 server.js 裡會用到。

# 安裝 node
sudo apt-get install nodejs -y

npm init

npm install cheerio request linebot


# heroku
`git init`

`heroku create bb-line-bot`
![image](https://github.com/kh555069/bb-line-bot/blob/master/pic/0.png)

create 完之後記得加上 `heroku git:remote -a bb-line-bot`

`git add .`

`git commit -m 'init'`

`git push heroku master`

到這裡就算完成 webhook 的設定啦

