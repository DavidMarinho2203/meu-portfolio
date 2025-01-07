import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Only POST requests are allowed' });
  }
  
  const { name, email, telefone, message } = req.body;

  // Verificando se a variável de ambiente está sendo lida corretamente 
  console.log('EMAIL_USER:', process.env.EMAIL_USER);

  const msg = {
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject: `Contato de ${name}`,
    text: `
      Nome: ${name}
      E-mail: ${email}
      Telefone: ${telefone}
      Mensagem: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao enviar e-mail.' });
  }
}
