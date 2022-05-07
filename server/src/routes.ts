import express from "express";
import { NodeMailerMailHelper } from "./helpers/nodemailer/NodeMailerMailHelper";
import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackService } from "./services/SubmitFeedbackService";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();    
    const nodeMailerMailHelper = new NodeMailerMailHelper();
    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbacksRepository, nodeMailerMailHelper);

    await submitFeedbackService.execute({
        type,
        comment,
        screenshot,
    });    

    return res.status(201).send();
});