const
    express = require('express'),
    path = require('path')

let mysql = require('mysql') 
const app = express()
let port = process.env.PORT || 8082
app.use(express.static(path.join(__dirname+'/client')))

app.get('/',(req,res)=>{

      
    res.sendFile(__dirname+"client/index.html")

})

app.get('/order',(req,res)=>{

      
    res.sendFile(__dirname+"/client/views/order2.html")

})

app.listen(port,()=>{

    console.log('server running on. \n localhost:',port)
})