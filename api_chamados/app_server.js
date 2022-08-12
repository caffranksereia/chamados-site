const ex = require('express')
const app = ex()
const port = 3000


app.get('/abrir-chamado',(req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Exemplo app listening on port ${port}`)
})

