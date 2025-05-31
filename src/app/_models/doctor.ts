import { User } from './user';

export class Doctor {
    _id: string;
    user: User;
    createdBy: string;
    cadre: string;
    department: string;
    specialty: string;
    gender: boolean;
    dob: string;
    description: string;
}
