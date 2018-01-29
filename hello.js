let url = require("url");
let qs = require("querystring");

console.time("Hello");

console.log("dirName : " + __dirname);
console.log("fileName : " + __filename);
console.log("output : %d", 273);

console.timeEnd("Hello");

// 프로세스 정보
console.log (process.arch);
console.log (process.version);
console.log (process.platform);
console.log (process.memoryUsage());

// URL 파싱 작업
let po = url.parse("http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160");

console.dir (po);

// 쿼리스프링 처리
let q = qs.parse (po.query);

console.dir (q);

