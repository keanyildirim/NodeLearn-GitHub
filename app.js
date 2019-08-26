const  sunucu = require("http");
var tarihModul = require("./modul");
sunucu.createServer(function(req,res){
    res.end(tarihModul.tarih());
    
}).listen(1905); 