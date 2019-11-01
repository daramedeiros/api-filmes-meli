const express = require('express')
const app = express()
const port = 3000
const filmes = require('./filmes.json')


//middleware
app.all("*", (req, res, next) => {
    next()
})


//routes
app.get('/', (req, res) => {
    res.send('posta funcionando! =) ')
})


//listar filmes
app.get('/filmes', (req, res) => {
    console.log(require.url)
    res.status(200).send(filmes)
})


//listar por diretor
app.get('/filmes/:diretor', (req, res) => {
    const nomeDiretor = req.params.diretor
    res.send(filmes.filter(filmes => filmes.director == nomeDiretor ))
})

//listar por genero
app.get('/filmes/:genero', (req, res) => {
    const genero = req.params.genero
    res.send(filmes.filter(filmes.genre.includes(genero)))
})


//servidor
app.listen(port,function () {
    console.log(`App rodando na porta${port}`)
})