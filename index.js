const express = require('express')
const app = express()
const port = 3000
const filmes = require('./filmes.json')


app.use(express.json())



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
app.get('/filmes/genero/:nome', (req, res) => {
    const genero = req.params.nome
    res.send(filmes.filter(filme => filme.genre.indexOf(genero) > -1))
})

//criar um filme e salvar o resultado
app.post('/filmes', (req, res) => {
    const { title, year, director, duration, genre, rate } = req.body
    filmes.push({ title, year, director, duration, genre, rate })
    return res.status(201).send(filmes)
})


//servidor
app.listen(port,function () {
    console.log(`App rodando na porta${port}`)
})