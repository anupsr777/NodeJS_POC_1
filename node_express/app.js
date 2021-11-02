const express = require('express');
const app = express();
const port = 8082;
const route = require('./route');

app.use(function(req,res,next){
     req.requestDateTime = new Date().toLocaleString();
    next();
});
app.use(route);

app.listen(port,()=>{
    console.log("Server listening on port:",port);
})
