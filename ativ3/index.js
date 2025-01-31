const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.post('/mercadoria', (req, res) => {
    const {nome, preco} = req.body;

    if (preco <= 1000) {
        precofinal = 1.05 * preco;
        res.json({ nome:nome, precofinal: precofinal});   
    } else {
        precofinal = 1.07 * preco;
        res.json({ nome:nome, precofinal: precofinal });
    }
})

app.listen(4000, () =>{
    console.log('Servidor rodando em http://localhost:4000');  
})