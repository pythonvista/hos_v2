import { User } from './user';

export class Ticket {
    _id: string;
    createdBy: User;
    subject: string;
    description: string;
    createdAt: string
}
