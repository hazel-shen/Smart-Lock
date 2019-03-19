"use strict"
require('dotenv').config();
const express = require('express')
const path = require('path')
const axios = require('axios')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')
const app = express()
const staticFileMiddleware = express.static(path.join(__dirname))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*") // Should be fixed before Risk assessment
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()    
})
app.use(staticFileMiddleware)

app.get('/', (req, res) => {
  res.sendStatus(200).render(path.join(__dirname + '/index.html'))
})
app.post('/unlock', (req, res) => {
  console.log(req.body)
  let userName = req.body.userName
  let userPic = req.body.userPic
  axios.post('https://notify-api.line.me/api/notify', 'message=' +  userName + ' 正在開門', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization': config.ACCESS_TOKEN
      //Please replace this access token to yours
    }
  })
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    //console.log(error);
  });


})

app.listen(process.env.PORT || 8000)
