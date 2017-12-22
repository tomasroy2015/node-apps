
const http = require('http');
const fs = require('fs');
var cluster = require('cluster');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
const hostname = '127.0.0.1';
const port = 3000;
var data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log("end here");
// var a1;
// var a2 = "3";
// var a3 = 3;

// var b1 = a1+a2;
// var b2 = a1+a3;
// var b3 = a2+a3;
// var c1 = b2+a3;
// console.log(b3);
// var stdudent = new Object({type:"student"});
// console.log(calltoother());
// function calltoother(){
//     var x=9;
//     x=x>>2;
//     x=x<<2;
//     x=x^3;
//   return x;
// }
// function othertocall(){
//     var x= 2,y=5;
//     return (x+y);
// }
//  function getRandom(){
//      var total = 0;
//      for(var x=1;x<5;x=x<<1){
//          total += x;
//      }
//     tdy = new Date();
//     var BIGn = tdy.getSeconds()*tdy.getTime();
//     BIGn *= Math.sqrt(tdy.getMinutes());
//     var rand = (BIGn%4) + 1;
//     return total;
// }
// function setvals(s){
//     s.name = "John";
//     s.ager = 15;
//     s.id = 100;
// }
// setvals(stdudent);
// if(cluster.isMaster){
//     var worker1 = cluster.fork();
//     var worker2 = cluster.fork();
//     worker1.send(port);
//     worker1.send(port+1);
//     worker2.send(port+1);
//     worker2.send(port);
    
//     // worker.on('message',function(msg){
//     //     console.log('Master',msg);
//     // });
// }else{
//     // console.log('Worker','worker starting');
//     // process.send('worker started');
//     // process.exit();
//     process.on('message',function(port){
//         console.log("worker "+cluster.worker.process.pid+" started on port"+port);
//         http.createServer(function(req,res){
//             res.end("worker"+cluster.worker.process.pid);
//         }).listen(port);
//     });
// }
// fs.readFile('index.html',(err,html)=>{
//     if(err){
//         throw err;
//     }
//     const server = http.createServer((req,res)=>{
      
//         if (req.url == '/fileupload') {
            
            
//             var form = new formidable.IncomingForm();
//             form.parse(req, function (err, fields, files) {
//               res.write('File uploaded');
//               res.end();
//             });
//             var transporter = nodemailer.createTransport({
//                 service:'gmail',
//                 auth:{
//                     user:'smtp.b-causebd.com',
//                     pass:'wl3Q5Yh$'
//                 }
//             });
//             var mailOptions = {
//                 from:"tomas.cse.ju@gmail.com",
//                 to:"programmer01@b-causebd.com",
//                 subject:"Test email from node",
//                 text:"that was easy"
//             }
//             transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                   console.log(error);
//                 } else {
//                   console.log('Email sent: ' + info.response);
//                 }
//               }); 
//           } else {
//                 res.statusCode = 200;
//                 res.setHeader('Content-type','text/html');
//                 res.write(html);
//                 res.end();
//           }
//     });
//     server.listen(port,hostname,()=>{
//         console.log('Server started on port'+port);
//     });
// })
