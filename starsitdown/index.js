const express = require('express');
const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: 'yHSVn07uz4jMcTVw6ib20YjetbCVAgGWgt8cdpx9gUejeufej5IlyUDfDx5QVYyQ7a4GktER2b2VRqjapu987bTIzsAelNTvzTYDwg4IQr1Bj7D/0G9xO7EnsOcPo12sfjh6U52v3LbxLHkjTn52cwdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'e0319d9ea00943c6479e9e9e15177881'
};

const app = express();
app.post('/webhook', line.middleware(config), (req, res) => {
    req.body.events.map(message)
});

const client = new line.Client(config);

async function message(event){
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }else{
    if(event.message.text.indexOf("退費")!= -1 ){
      Refund(event)
    }
    else if(event.message.text.indexOf("選單")!= -1){
      menu(event)
    }
    else if(event.message.text.indexOf("社團")!= -1){
      Societies(event)
    }
    else if(event.message.text.indexOf("學餐")!= -1){
      foot(event)
    }
    else if(event.message.text.indexOf("地址")!= -1){
      map(event)
    }
    else{
      await Allmessage(event)
    }
    
  }
}
function menu(event){
  client.replyMessage(event.replyToken, [
    {
       type: 'template',
        altText: 'Buttons alt text',
        template: {
            type: 'buttons',
            thumbnailImageUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/92692626_2979158412104562_5768476949265514496_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TvPz0KxOUTYAX-FiesB&_nc_ht=scontent-tpe1-1.xx&oh=4d814f42c1e2a307efcad42016a569ff&oe=61BD6AD6',
            title: '選單資訊',
            text: '有任何問題請直接留言',
            actions: [
                { label: '校園地址', type: 'message',text: '校園地址'},
                { label: '學餐資訊', type: 'message', text: '學餐資訊'},
                { label: '社團資訊', type: 'message', text: '社團資訊'},
                { label: '學生會退費資訊', type: 'message', text: '學生會退費資訊'}
            ],
        },
      }
    ]);
}

function foot(event){
  client.replyMessage(event.replyToken, [
    {
      "type": "template",
      "altText": "foot",
      "template": {
          "type": "carousel",
          "columns": [
              {
                "thumbnailImageUrl": "https://upload.wikimedia.org/wikipedia/zh/thumb/5/54/Hi-Life.svg/1200px-Hi-Life.svg.png",
                "imageBackgroundColor": "#FFFFFF",
                "title": "萊爾富",
                "text": "萊爾富",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://www.hilife.com.tw/"
                },
                "actions": [
                    {
                        "type": "uri",
                        "label": "官網連結",
                        "uri": "http://example.com/page/111"
                    }
                ]
              },
              {
                "thumbnailImageUrl": "https://willisandfrieda.com/wp-content/uploads/2020/08/IMG_9073-4.jpg",
                "imageBackgroundColor": "#000000",
                "title": "梁社漢排骨",
                "text": "梁社漢排骨",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://www.buygood.com.tw/"
                },
                "actions": [                 
                    {
                        "type": "uri",
                        "label": "官網連結",
                        "uri": "https://www.buygood.com.tw/"
                    }
                ]
              },
              {
                  "thumbnailImageUrl": "https://cpok.tw/wp-content/uploads/2020/09/21e4b896e7b480e9a2a8e591b3e9a4a8.jpg",
                  "imageBackgroundColor": "#000000",
                  "title": "21風味館",
                  "text": "21風味館",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "https://www.pec21c.com.tw/"
                  },
                  "actions": [                 
                      {
                          "type": "uri",
                          "label": "官網連結",
                          "uri": "https://www.pec21c.com.tw/"
                      }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://media.nownews.com/nn_media/thumbnail/2021/09/1631695318430-79966c093e0c44dd8258a39ccdb7c008-800x600.jpg?unShow=false",
                  "imageBackgroundColor": "#000000",
                  "title": "八方雲集",
                  "text": "八方雲集",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "https://www.8way.com.tw/"
                  },
                  "actions": [                 
                      {
                          "type": "uri",
                          "label": "官網連結",
                          "uri": "https://www.8way.com.tw/"
                      }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://www.walkerland.com.tw/image/poi/p111604/m79466/166a1bf99129cd52d132ebb6691fbcedad43b902.jpg",
                  "imageBackgroundColor": "#000000",
                  "title": "饗記麵鋪",
                  "text": "饗記麵鋪",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "https://froda.pixnet.net/blog/post/230106178-jiami-jiami"
                  },
                  "actions": [                 
                      {
                          "type": "uri",
                          "label": "官網連結",
                          "uri": "https://froda.pixnet.net/blog/post/230106178-jiami-jiami"
                      }
                  ]
                }
                ,
                {
                  "thumbnailImageUrl": "https://breeze-assets.breeze.com.tw/shop/logo-05.jpg?15186661086091",
                  "imageBackgroundColor": "#000000",
                  "title": "全家",
                  "text": "全家",
                  "defaultAction": {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "https://www.family.com.tw/Marketing/"
                  },
                  "actions": [                 
                      {
                          "type": "uri",
                          "label": "官網連結",
                          "uri": "https://www.family.com.tw/Marketing/"
                      }
                  ]
                }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
      }
    }
  ]);
}

function Allmessage(event){
  return new Promise(function(resolve,reject){
    client.replyMessage(event.replyToken, [
    {
       type: 'template',
        altText: 'Buttons alt text',
        template: {
            type: 'buttons',
            thumbnailImageUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/92692626_2979158412104562_5768476949265514496_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TvPz0KxOUTYAX-FiesB&_nc_ht=scontent-tpe1-1.xx&oh=4d814f42c1e2a307efcad42016a569ff&oe=61BD6AD6',
            title: '您輸入的留言無法判斷，請聯繫以下工作人員',
            text: '有任何問題請直接留言',
            actions: [
                { label: '北護學生會臉書連結', type: 'uri', uri: 'https://www.facebook.com/%E5%9C%8B%E7%AB%8B%E8%87%BA%E5%8C%97%E8%AD%B7%E7%90%86%E5%81%A5%E5%BA%B7%E5%A4%A7%E5%AD%B8%E5%AD%B8%E7%94%9F%E6%9C%83-250036891683408/' },
                { label: '北護學生會IG連結', type: 'uri', uri: 'https://www.instagram.com/ntunhssu_19/'},
                { label: '北護學生會部落格連結',type: 'uri', uri: 'https://ntcnstudentunion.blogspot.com/'}
            ],
        },
      }
  ]);
})
}

function Refund(event){
  client.replyMessage(event.replyToken, [
    {
       type: 'template',
        altText: 'Buttons alt text',
        template: {
            type: 'buttons',
            thumbnailImageUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/92692626_2979158412104562_5768476949265514496_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TvPz0KxOUTYAX-FiesB&_nc_ht=scontent-tpe1-1.xx&oh=4d814f42c1e2a307efcad42016a569ff&oe=61BD6AD6',
            title: '退費相關資訊',
            text: '有任何問題請直接留言',
            actions: [
                { label: '國北護官網退費資訊', type: 'uri', uri: 'https://student.ntunhs.edu.tw/files/13-1002-37730.php?Lang=zh-tw' },
                { label: '北護學生會意見表單', type: 'uri', uri: 'https://docs.google.com/forms/d/e/1FAIpQLScSw7wckOEqs9If0IZKzpYivp_pPbpTygsLnc-LjHS5TrkgfQ/viewform'},
                { label: '與專人聯繫',type: 'uri', uri: 'https://www.instagram.com/direct/t/340282366841710300949128184450632665297'}
            ],
        },
      }
    ]);
}

function Societies(event){
  client.replyMessage(event.replyToken, [
    {
       type: 'template',
        altText: 'Buttons alt text',
        template: {
            type: 'buttons',
            thumbnailImageUrl: `https://ws.moe.edu.tw/001/Upload/1/relpic/7632/65086/829c5ea4-a643-449c-af7e-606062e3d203.jpg`,
            title: '國北護官社團',
            text: '有任何問題請直接留言',
            actions: [
                { label: '國北護官社團', type: 'uri', uri: 'https://student.ntunhs.edu.tw/files/90-1002-4.php' },
                { label: '國北護課指組網站', type: 'uri', uri: 'https://student.ntunhs.edu.tw/files/11-1002-258.php'},
                { label: '與專人聯繫',type: 'uri', uri: 'https://www.instagram.com/direct/t/340282366841710300949128184450632665297'}
            ],
        },
      }
    ]);
}

function map(event){
  client.replyMessage(event.replyToken, [
    {
      type: 'location',
      title: '國立台北護理健康大學',
      address: "112台北市北投區明德路365號",
      latitude: 25.117539,
      longitude: 121.520679
    }
]);
}
app.listen(process.env.PORT ||3000);
