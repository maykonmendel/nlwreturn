import { SubmitFeedbackService } from "../services/SubmitFeedbackService"

describe("Submit Feedback", () => {
    it("should be able to submit a feedback", () => {
        const submitFeedback = new SubmitFeedbackService(
            { create: async () => {} },
            { sendMail: async () => {}},
        );
    })
})