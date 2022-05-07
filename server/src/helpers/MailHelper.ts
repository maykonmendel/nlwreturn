export interface SendMailData {
    subject: string;
    body: string;
}

export interface MailHelper {
    sendMail: (data: SendMailData) => Promise<void>;
}