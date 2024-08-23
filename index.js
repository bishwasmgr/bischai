require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send("bishwastmgr")
})

app.get('/login', (req,res) =>{
    res.send('<H1> Please Login <H1>')
})

app.get('/chai', (req, res)=>{
    res.send('<H2> Chai or Code </H2>')
})

app.get('/register', (req,res)=>{
    res.send('Hello You have done it Bro')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})