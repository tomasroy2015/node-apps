var fs = require('fs');
var event = require('events');

const myEmitter = new event.EventEmitter();
fs.readFile('text.txt',function(err,data){
  console.log(data.toString());
  myEmitter.emit('readFile');

});

myEmitter.on('readFile',()=>{
    console.log("emmiter event occured");
})