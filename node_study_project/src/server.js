const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    response.writeHead(200, { //서버 코드 200(정상)
        'Content-Type': 'text/html'
    });
   if (require.url === '/') {
        fs.readFile('index.html', 'utf8', (err, file) => {
            response.end(file);
        });
   } else if (request.url === '/111') {
        fs.readFile('111.html', 'utf8', (err, file) => {
            response.end(file);
        });
   } else {
       fs.readFile('404.html', 'utf8', (err, file) => {
           response.end(file);
       });
   }
    
    //const data = 'hihi';
    //response.end(`<div>${data}</div>`); // 외부에서 누군가 접속을 했을 때 실행(end)
}).listen('8081', () => {
    console.log('server on!!');
});