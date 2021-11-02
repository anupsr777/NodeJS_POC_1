const http = require('http');
const port = 8081;
const host = 'localhost';
const fs = require('fs');
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const day = today.getDay();

const server = http.createServer((req, res) => {
    let requestDay = (req.url.slice(1)) ? req.url.slice(1): '';
    let fileName = (req.url.slice(1)) ? 'week_day.html' : 'index.html';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    render(res, fileName, requestDay);
});

server.listen(port, host, () => {
    console.log(`server running at http://${host}:`, port);
});

function render(res, htmlFile, day) {
    fs.stat(`./${htmlFile}`, (err, stats) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        if (stats && (daylist.includes(day) || day == '')) {
            if (day == '' || day == getDay()){
                fs.createReadStream(htmlFile).pipe(res);
            }
            else{
                res.end(`Today is ${getDay()} click on <h3><a href="http://${host}:${port}/${getDay()}">${getDay()}</a></h3>`);
            }
               
        } else {
            res.statusCode = 404;
            res.end('Sorry, page not found');
        }
    })
}

function getDay() {
    return daylist[day];
}