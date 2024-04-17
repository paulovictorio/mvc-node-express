const express = require('express')
const app = express()
const loginRoute = require('./routes/LoginRoute')

app.set('view engine', 'ejs')
app.set('views', './views/login')

app.use(loginRoute)

app.listen(3000,function(){
    console.log("App rpdamdp na porta 3000")
})