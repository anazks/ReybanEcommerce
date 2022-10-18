var express = require('express');
var router = express.Router();
var con = require('../config/config');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user)
  var user = req.session.user
  res.render('user/home',{user});
});
router.get('/userlogin', (req,res)=>{
  res.render('user/userlogin',{login:true})
 })
router.post('/userreg',(req,res)=>{
  console.log(req.body)
  var sql="insert into user set ?"
  con.query(sql,req.body,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.redirect("/userlogin")
    }
  })
  
})
router.post('/Userlogin',(req,res)=>{
console.log(req.body)
var sql = "select * from user where username = ? and password = ?"
con.query(sql,[req.body.username,req.body.password],(err,result)=>{
  if(err){
    console.log(err)
  }else{
    if(result.length>0)
    {
      req.session.user=result[0]
      res.redirect('/')
    }else{
      console.log("error")
    }
  }
})
})
router.get('/logout',(req,res)=>{
req.session.destroy()
res.redirect('/')
})
module.exports = router;
