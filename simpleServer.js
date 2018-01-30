const fs = require("fs");
const url = require("url");
const ejs = require("ejs");

// 서버를 생성합니다.
const server = require ("http").createServer ((request, response) => {

    let reqUrl = url.parse(request.url);

    let pathname = reqUrl.pathname;

    if (pathname === "/")
    {
        fs.readFile("HTMLPage.html", (error, data) => {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
    else if (pathname === "/q")
    {
        var query = reqUrl.query;

        response.writeHead(200, {'Content-Type':'text/html'});
        response.end("<H1>" + JSON.stringify(query) + "</H1>");
    }
    else if (pathname === "/test.png")
    {
        fs.readFile("node-js-736399_640.png", (error, data) => {
            response.writeHead(200, {'Content-Type':'image/png'});
            response.end(data);
        });
    }
    else if (pathname === "/loc")
    {
        response.writeHead(302, {'Location':'http://naver.com'});
        response.end();
    }
    else if (pathname === "/test")
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end("<h1>Hello Web server with Node.js</h1>");
    }
    else if (pathname === "/ejs")
    {
        fs.readFile("test.ejs",'utf-8', (error, data) => {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(ejs.render(data, {
                "myName":"Thomas Nam"
            }));
        });
    }
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
