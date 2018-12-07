const nodemailer = require('nodemailer');

const clientId = '152254100722-3m1md3lirien5iv3hb5iff3438oqr8a2.apps.googleusercontent.com'
const refreshToken = '1/e3_EGGcr_3pl0Oias45Up76NSq4tgIx2z62j7pKtl4U'

exports.handler = function(event, context, callback){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "park.edmund@gmail.com",
            clientId: clientId,
            clientSecret: "process.env.CLIENT_SECRET",
            refreshToken: refreshToken,
        }
    })

    const body = JSON.parse(event.body);
    const mailOptions = {
        to: 'park.edmund@gmail.com',
        subject: `New Website Message from ${body.name}`,
        text: `Sender Name: ${body.name}, Sender Email: ${body.email}, Sender Message: ${body.message}`,

    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            callback(null, {
                statusCode: 500,
                body: JSON.stringify(error),
            })
        }else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(info.response)
            })
        }
        })
    }
