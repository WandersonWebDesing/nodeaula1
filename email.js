const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurações do transporte de e-mail
const transporter = nodemailer.createTransport({
    service: 'Gmail', // ou outro provedor de e-mail
    auth: {
        user: 'wanderson.iesb@gmail.com',
        pass: 'zwda qvtk ygpy vqje',
    },
});

// Opções do e-mail
const mailOptions = {
    from: 'wanderson.iesb@gmail.com',
    to: 'wandersonwebsantos@gmail.com',
    subject: 'Deu certo',
    text: 'Acredita',
    html: '<h1>Welcome</h1><p>Bem sucedido</p>'
};

// Enviar o e-mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Erro ao enviar o e-mail:', error);
    } else {
        console.log('E-mail enviado com sucesso:', info.response);
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  
