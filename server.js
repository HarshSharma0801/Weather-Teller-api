const express = require('express');
const https = require('https');
const app = express();

app.get('/',(req,res)=>{
res.send('server is up and running');
const url = 'https://api.weatherapi.com/v1/current.json?key=2fe72bce856b428bb27204334231606&q=London&aqi=no';
https.get(url,function(response){
    console.log(response.statusCode);
});

})

app.listen(3000,()=>{
    console.log('server started');
})

