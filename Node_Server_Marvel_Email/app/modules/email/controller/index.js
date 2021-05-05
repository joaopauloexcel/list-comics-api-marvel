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

        transporter.sendMail(mailOptions, (error)=>{
            console.log("execution sendMail");
            if (error) {
              console.log({sendMail: error});
              res.status(500).send({ message: 'Invalid email, password, or configuration!' });
              return;
            } else {
              console.log({sendMail: 'Email Sent!'});
              res.status(200).send({ message: 'Send with successfully!' });
              return;
            }
        })

	}else{
		res.status(504).send('Fail -> Body request not sent!');
		return;
	}
}