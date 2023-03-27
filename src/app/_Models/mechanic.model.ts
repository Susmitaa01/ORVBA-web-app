import { Feedback } from "./feedback.model";

export class Mechanic {
    mechanicId: number;
  mechanicName: string;
  mechanicPhoneNumber: number;
  mechanicEmailId: string;
  mechanicLocation: string;
  mechanicPassword: string;
  allowed: boolean;
  loggedIn: boolean;
  feedback: Feedback[];
}
