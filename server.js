const express = require('express');
const bodyparser = require('body-parser');
const https = require('https');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');
//url for api
// const url = 'https://api.weatherapi.com/v1/current.json?key=2fe72bce856b428bb27204334231606&q=shimla&aqi=no';
// https.get(url,function(response){
//     console.log(response.statusCode);
//     response.on('data',function(data){
//        const weatherData = JSON.parse(data);
//        console.log(weatherData);
//        console.log(weatherData.current.temp_c);
//        console.log(weatherData.current.condition.text);
//     })
// });

})


app.listen(3000,()=>{
    console.log('server started');
})

app.post('/',function(req,res){
    console.log(req.body.city);
})

