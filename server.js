const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;



// Middleware para processar dados JSON do formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para processar o envio do formulário
app.post('/send-feedback', (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const subject = `Feedback de ${name}`;
  const text = `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`;

  sendEmail(email, subject, text);
  res.json({ message: 'Feedback enviado com sucesso!' });
});










// Configuração do transporte para envio de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou o serviço de e-mail que você usa
  auth: {
    user: 'wanderson.iesb@gmail.com', // seu e-mail
    pass: 'zwda qvtk ygpy vqje', // sua senha ou senha de app
  },
});

// Opções do e-mail
const mailOptions = {
  from: 'wanderson.iesb@gmail.com',
  to: 'wandersonwebsantos@gmail.com',
    subject: 'Deu certo',
    text: 'Acredita',
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
