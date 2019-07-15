import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';//引入body-parser，用于post接口

const webPush = require('web-push');
const app = express();

app.use(bodyParser.json());//使用bodyparser并配置其参数
app.use(bodyParser.urlencoded({ extended: false }));//使用bodyparser并配置其参数
app.use(express.static('static/images'));
app.use(express.static('server/'));

//express服务端允许跨域要放在最上面
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");//允许来自所有源.如果要发送Cookie就不能设为星号
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,PATCH,OPTIONS");//允许跨域的请求方式
  res.header("Access-Control-Allow-Headers", "Content-Type,Mode");
  next();
});

app.get('/getGoods', function(req, res, next){
  // res.jsonp({
  res.json({
    error:false,
    msg:'get啦啦啦',
    data:[
      {id:'E0001',title:'花岗岩涂层不沾炒锅30cm', img:'http://localhost:8088/img1.jpg'},
      {id:'E0002',title:'奥林匹亚万向登机箱 24寸', img:'http://localhost:8088/img2.jpg'},
      {id:'E0003',title:'韩国进口钢化玻璃饭盒3.6L', img:'http://localhost:8088/img3.jpg'},
      {id:'F0001',title:'韩国春雨面膜玻尿酸精华', img:'http://localhost:8088/img4.jpg'},
      {id:'F0002',title:'居家纯棉四件套', img:'http://localhost:8088/img5.jpg'},
      {id:'F0003',title:'Whoo后7件套(305ml)', img:'http://localhost:8088/img6.jpg'},
      {id:'F0004',title:'日本凯得宝砂锅养生砂壶', img:'http://localhost:8088/img7.jpg'},
      {id:'A0001',title:'JBLGO外便携迷你小音箱', img:'http://localhost:8088/img8.jpg'}
    ]
  });
});

const server = app.listen(8088, "localhost", () => {
    console.log("服务器已启动, 地址是：http://localhost:8088");
});


