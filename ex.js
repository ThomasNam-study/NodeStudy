// Express 엔진
const express = require("express");

// 서버를 생성
const app = express();

app.use ((request, response) => {
    console.log ("첫번째 미들웨어");
});

app.use ((request, response) => {
    console.log ("두번째 미들웨어");
});

// request 이벤트 리스너 설정
app.use ((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end("<h1>Hello Web server with Node.js</h1>");
});

app.listen(52273, () => {
    console.log ("Server Running at http://127.0.0.1:52273");
});