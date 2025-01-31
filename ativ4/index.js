const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.post('/maior', (req, res) => {
    const {a,b,c,d,e,f} = req.body;
    let maiornumero = a;

    if (a < b) {
        maiornumero = b;
    } if (b < c){
        maiornumero = c;     
    }     if (c < d) {
        maiornumero = d;
    } if (d < e){
        maiornumero = e;     
    } if (e < f){
        maiornumero = f;   
    } 
    res.json({ maiornumero: maiornumero });
    
})

app.listen(4000, () =>{
    console.log('Servidor rodando em http://localhost:4000');  
})