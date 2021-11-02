const express = require('express');
const app = express();
const router = express.Router();

router.get('/',(req,res,next) => {
    res.send("Welcome");
    next()
})

router.get('/home',(req,res,next) => {
    res.send("Request time: "+req.requestDateTime);
    next()
});
router.get('/detail',(req,res,next) => {
    res.send("Request time: "+req.requestDateTime);
    next()
});

module.exports = router;