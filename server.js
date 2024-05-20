let http = require('http');
let hostname = '127.0.0.1';
let port = 5000;
let server = http.createServer((req, res)=> {
res.statusCode = 200;
res.setHeader('Content-Type', 'xml/html')
res.write(
 '<!DOCTYPE html>'+
 '<html>'+
 ' <head>'+
 ' <meta charset="utf-8" />'+
 ' <title>Ma page Node.js !</title>'+
 ' </head>'+
 ' <body>'+
 ' <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
  '<p> voici un autre paragraphe <strong> HTML</strong></p>'+
  '<p> voici un autre paragraphe <strong> HTML5555</strong></p>'+
 ' </body>'+
 '</html>'
 );
res.end();
});
server.listen(port, hostname, ()=> {
console.log("Server running at http://" + hostname + ":" + port + "/");
});

