
let http=require('http');
let url=require('url');
let hostname='127.0.0.1';
let querystring= require('querystring');
let port= 5000;


let server=http.createServer((req,res)=>{

    let page=url.parse(req.url).pathname;

    let params=querystring.parse(url.parse(req.url).query);

    res.setHeader('Content','text/html');

    if(page=='/'){
        res.statusCode=200;
        res.write('you are at home page');
    }else if(page=='/controller'){
        res.statusCode=200;
        res.write('you are at the controller');
    }else if(page=='/controller/method'){
        res.statusCode=200;
        res.write('you are the method of the controller')
    }else{
        res.statusCode=404;
        res.write('page does not exist')
    }


    if('prenom' in params && 'nom' in params){

        res.write('<br> you are ' + params['prenom'] + '' + params['nom'])
    }else{
        res.write('<br> FirstName and/or lastname are empty')
    }

    res.end();
})

server.listen(process.env.PORT || port , hostname, function(){
    console.log('server running at http://' + hostname + ':' + port + '/')

})