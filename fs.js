let fs = require("fs");

// FileSync
/*
var text = fs.readFileSync("./package.json", 'utf8');

console.log (text);
*/


// File Read
fs.readFile ("./package.json", 'utf8', (error, data) => {
    if (error)
    {
        console.log (error);
        return;
    }

    console.log (data);
});

// File Write
let data2 = "Hello World .. !zzzzz";

// fs.writeFileSync ("text.txt", data2, 'utf8');

fs.writeFile ("text.txt", data2, 'utf8', (error, data3) => {

    if (error)
    {
        console.log (error);
        return;
    }

    console.log (data3);
});