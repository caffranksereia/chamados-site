const ex = require('express')
const app = ex()
const port = 3000


app.get('/abrir-chamado',(req,res)=>{
    res.send('Hello World')
})
app.post('/abrir-chamado/post',(req,res) =>{
    res.send('hello post chamado')
})





app.listen(port, ()=>{
    console.log(`Exemplo app listening on port ${port}`)
})

