import { User } from './user';

export class FrontDeskOfficer {
    _id: string;
    user: User;
    createdBy: string;
    gender: boolean;
    dob: string;
    description: string;
}
