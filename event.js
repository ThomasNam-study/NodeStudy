var EventEmitter = require('events');

// 이벤트 리스너 연결 개수를 조절
process.setMaxListeners (15);

let onUncaughtException = (error) => {
    console.log (error + "예외 발생!!");
};

process.on ("exit", function (code) {
    console.log (code + " - 기존 EXIT 종료합니다.");
});

// exit 이벤트 연결
process.on ("exit", (code) => {
    console.log (code + " - EXIT 종료합니다.");
});

// EventEmitter 객체 생성
let custom = new EventEmitter();

custom.on("tick", (code) => {
    console.log ("커스텀 이벤트를 실행한다.");
});

custom.emit ("tick");


// 이벤트 강제 종료 이벤트 발생
process.emit("exit", 2);

process.on ("uncaughtException", onUncaughtException);

// 이벤트 핸들러 제거
process.removeListener('uncaughtException', onUncaughtException);
