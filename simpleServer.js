// 서버를 생성합니다.
const server = require ("http").createServer ((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end("<h1>Hello Web server with Node.js</h1>");
});

server.on('request', (code) => {
    console.log ("Request On");
});

server.on('connection', (code) => {
    console.log ("Connection On");
});

server.on('close', (code) => {
    console.log ("Close On");
});

// 서버를 실행한다.
server.listen(52273, () => {
   console.log ("Server Running at http://127.0.0.1:52273");
});

// 10초후 함수 실행
let test = () => {
    // 서버를 종료
    server.close();
};
