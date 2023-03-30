var express = require('express');
var router = express.Router();

let x;
let y;
router.get('/', function(req, res, next) {
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let o1=Math.log2(x,y);
let o2=Math.cosh(y,x);
let o3=Math.floor(y);
  res.send('Math.log2() applied to '+x+' and '+y+' is ' +o1+"<br>" +'Math.cosh() applied to '+y+' and '+x+' is '+o2+"<br>"+'Math.floor()  applied to '+y+' is'+o3); 
}
else{

  x = req.query.x;
  let o1=Math.log2(x,y);
  let o2=Math.cosh(y,x);
  let o3=Math.floor(y);

  res.send('Math.log2() applied to '+x+' and '+y+' is ' +o1+"<br>" +'Math.cosh() applied to '+y+' and '+x+' is '+o2+"<br>"+'Math.floor()  applied to '+y+' is'+o3); 
}
});

module.exports = router;