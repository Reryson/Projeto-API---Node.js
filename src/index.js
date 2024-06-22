const express = require('express');

const app = express();

//http://localhost:3000/projects

app.get('/', function(req,res){
    return res.json({
        message: 'Olá mundo!!',
        First: 'Primeiro valor do Json'
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000!')
});
