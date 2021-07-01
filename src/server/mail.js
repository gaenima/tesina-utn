import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arstechtechnica@gmail.com',
        pass: 'MailPruebas'
    }
})

const mailOptions = {
    from: 'arstechtechnica@gmail.com',
    to: 'gabriela.n.stocco@gmail.com',
    subject: 'Contacto desde OrgPre',
    html: '<h1 style="color:blue;"> <span style="color:green;">Nuevo mensaje de un usuario</span></h1'
}
transport.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log(err)
        return err
    }
    console.log(info)
})