// Express 엔진
const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// 서버를 생성
const app = express();

var router = express.Router();

app.use(express.static(__dirname + "/static"));
app.use(morgan('combined'));

app.use(cookieParser());

// JSON 바디 처리
app.use(bodyParser.json());

// URLForm 인코드 처리
app.use(bodyParser.urlencoded({ extended: false }));

app.use ((req, response, next) => {
    console.log ("첫번째 미들웨어");
    next();
});

app.use ((req, response, next) => {
    console.log ("두번째 미들웨어");
    next();
});

router.get ("/", (req, res) => {
    let a = {b:"c", d:"e"};

    res.send(a);
});

router.get ("/a", (req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>Hello Web server with Node.js</h1>");
});

router.get ("/b", (req, res) => {
    res.send(`<a href = "/a">Go to a</a>`);
});

router.get ("/mem/:id", (req, res) => {
    let a = {b:"c", d:"e", "m":req.params.id};

    res.send(a);
});

app.use('/', router);


app.listen(52273, () => {
    console.log ("Server Running at http://127.0.0.1:52273");
});