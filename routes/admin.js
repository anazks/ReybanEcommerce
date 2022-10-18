var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/adminlog');
});
router.get('/adminHome',(req,res)=>{
  res.render('admin/adminHome')
})
router.post('/login',(req,res)=>{
  console.log(req.body)
  if(req.body.user == "admin" && req.body.password=="admin"){
    console.log("login succes")
    res.redirect('/admin/adminHome')

  }else{
    console.log("login error")
  }
})


module.exports = router;
