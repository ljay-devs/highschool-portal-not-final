// Import required modules
const express = require("express"),
      app = express(),
      moment = require('moment'),
      mysql = require("mysql"),
      cors = require('cors'),
      PORT = process.env.PORT || 6969  



const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format('YYYY-MM-DD HH:mm:ss')}`)  
    next()  
}

app.use(logger)  
app.use(cors())  
app.use(express.json()) // Middleware to parse JSON body
    

app.listen(PORT, ()=>{
   console.log(`Server is running on port ${PORT} `)
})