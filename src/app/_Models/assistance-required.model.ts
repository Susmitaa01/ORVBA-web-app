import { Feedback } from "./feedback.model";

export class AssistanceRequired {
    assistanceId?: number;
    assistanceType?: string;
    userId?: number;
    mechanicId?: number;
    location?: string;
    feedback?: Feedback;
}
