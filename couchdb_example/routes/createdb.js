exports.create = function(req,res){
    nano.db.create(req.body.dbname,function(){
        if(err){
            res.send("Error creating database");
            reurn;
        }
        res.send("database created succesfully;")
    })
}