const express=require('express');

const app=express();

const port = 4000;

const logger=(req,res,next)=>{
    var today = new Date();
  
    if(today.getDay() == 6 || today.getDay() == 0 && today.getHours()<9 || today.getHours()>=17) {
      return res.send("<h1> Our Page is only available Monday to Friday From 9.am to 5.pm </h1>");
    }
  
    next();
  }


app.get('/', logger,(req, res) => {
    res.sendFile(__dirname + "/public/Home.html");
  });
  app.get('/contact', logger,(req, res) => {
    res.sendFile(__dirname + "/public/Contact.html");
  });
  app.get('/services',logger, (req, res) => {
    res.sendFile(__dirname + "/public/Services.html");
  });
  app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
  });
app.listen(port,()=> console.log(`server running on port ${port}`));