// servidor express na porta 3000
const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./route/postsRoute'))
app.use('/', require('./route/usersRoute'))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})