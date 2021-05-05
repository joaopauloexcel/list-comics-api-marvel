const emailConfig = require('../../../config/email.config');
const transporter=emailConfig.transporter
const email = emailConfig.email

exports.send = (req, res) => {
    if(req.body){

        const mailOptions = {
            from: `"${req.body.name}" <${email}>`,
            to: `${req.body.recept}`,
            subject: `${req.body.title}`,
            html: `${req.body.text}
            <br><br>Enviado pelo usuário do e-mail: <b>${emailConfig.email}</b>
            <br><br>by: Agile-Home`
          };

        transporter.sendMail(mailOptions, (error, info)=>{
            if (error) {
              console.log(error);
              res.status(500).send(error);
              return;
            } else {
              console.log('Email Sent!');
              res.status(200).send({ message: 'Send with successfully!' });
              return;
            }
        })

	}else{
		res.status(504).send('Fail -> Email does not exist!');
		return;
	}
}