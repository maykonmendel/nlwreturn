import { MailHelper } from "../helpers/MailHelper";
import { FeedbacksRepository } from "../repositories/FeedbacksRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {  
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private MailHelper: MailHelper,
    ) { } 
    
    async execute(request: SubmitFeedbackServiceRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        });

        await this.MailHelper.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div>`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n'),
        });

    }
}