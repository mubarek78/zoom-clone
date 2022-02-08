const express = require('express')
const app = express()

const server = require('http').Server(app)




app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send("hello")
})



server.listen(process.env.PORT||3000)