const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.post('/triangulo', (req, res) => {
    const {a, b, c} = req.body;

    if (a == b && a == c) {
        const {resultado } = req.body;
        res.json({ resultado : 'equilatero' });
    }else if (a != b && a == c || a == b && a != c || b == c && b != a){
        const {resultado } = req.body;
        res.json({ resultado : 'isosceles' });     
    } else {
        const {resultado} = req.body;
        res.json({ resultado : 'escaleno' });
    }
})

app.listen(4000, () =>{
    console.log('Servidor rodando em http://localhost:4000');  
})