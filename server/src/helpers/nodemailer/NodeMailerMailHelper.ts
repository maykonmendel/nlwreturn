import { MailHelper, SendMailData } from "../MailHelper";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3d2d770d11f64d",
    pass: "62ed1ed0f31607"
  }
});

export class NodeMailerMailHelper implements MailHelper {
    async sendMail({  subject, body }: SendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Maykon Mendel <maykonmendel.dev@gmail.com",
        subject,
        html: body,
    });
    }
}