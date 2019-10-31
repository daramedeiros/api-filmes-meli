const express = require('express')
const app = express()
const port = 3000


//middleware
app.all("*", (req, res, next) => {
    next()
})


//routes
app.get('/', (req, res) => {
    res.send('posta funcionando! =) ')
})