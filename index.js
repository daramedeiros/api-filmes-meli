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




//servidor
app.listen(port,function () {
    console.log(`App rodando na porta${port}`)
})