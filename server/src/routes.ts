import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackService } from "./services/SubmitFeedbackService";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3d2d770d11f64d",
    pass: "62ed1ed0f31607"
  }
});

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbacksRepository);

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot,
    });

    /*transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Maykon Mendel <maykonmendel.dev@gmail.com",
        subject: "Novo feedback",
        html: [
            `<div>`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });*/

    return res.status(201).send();
});