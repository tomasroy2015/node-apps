const fs = require('fs');
fs.readFile('text.txt',function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Display after 2 second");
        console.log("end here");
    },2000);
});


console.log('Start here');
