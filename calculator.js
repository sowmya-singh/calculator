const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
//  res.send("<h1>hello world</h1>");
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var sum=num1+num2;

    res.send("sum :"+sum);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var wt=parseFloat(req.body.weight);
    var ht=parseFloat(req.body.height);
    var bmi=wt/(ht*ht);

    res.send("bmi :"+bmi);
});
app.listen(3000,function(){
  console.log("server is startedat loc 3000");
});
