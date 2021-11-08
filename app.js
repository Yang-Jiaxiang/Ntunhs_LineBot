// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1656570450',
  channelSecret: 'e0319d9ea00943c6479e9e9e15177881',
  channelAccessToken: 'yHSVn07uz4jMcTVw6ib20YjetbCVAgGWgt8cdpx9gUejeufej5IlyUDfDx5QVYyQ7a4GktER2b2VRqjapu987bTIzsAelNTvzTYDwg4IQr1Bj7D/0G9xO7EnsOcPo12sfjh6U52v3LbxLHkjTn52cwdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});