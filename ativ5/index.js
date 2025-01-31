const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.post('/ordemcrescente', (req, res) => {
    const {a,b,c,d,e} = req.body;
    const num = [a,b,c,d,e];
    const ordemcrescente = num.sort((a,b) => a - b );

    res.json({ ordemcrescente });
});
app.listen(4000, () =>{
    console.log('Servidor rodando em http://localhost:4000');  
})