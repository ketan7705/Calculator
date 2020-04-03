const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    var result2 = num1-num2;
    var result3 = num1*num2;
    var result4 = num1/num2;
    res.send("<p>The Addition Result :</p> " +result+
    "<p>The Substraction Result :</p>" +result2+
    "<p>The Multiplication Result :</p>" +result3+
    "<p>The Division Result :</p>" +result4);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){

    var Weight = parseFloat(req.body.Weight);
    var Height = parseFloat(req.body.Height);
    var bmi = Weight/(Height*Height); 

res.send("This is Bmi : "+bmi);
})

app.listen(3000,function(){
    console.log("Your Server Starts At Port 3000 ");
});