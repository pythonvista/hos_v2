import { User } from './user';

export class LabAttendant {
    _id: string;
    user: User;
    createdBy: string;
    category: string;
    gender: boolean;
    dob: string;
    description: string;
}
