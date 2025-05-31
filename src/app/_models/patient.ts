import { User } from './user';
import { Vital } from './vitals';

export class Patient {
    _id: string;
    user: User;
    createdBy: string;
    createdAt: string
    occupation: string;
    gender: boolean;
    maritalStatus: string;
    tribe: string;
    religion: string;
    dob: string;
    description: string;

    // Fixed Disease
    problems_PastMedicalHistory: String;
    drugHistory: String;
    surgicalHistory: String;
    obstetrics_GynacologyHistory: String;
    vaccines: String;
    allergies: String;

    vitals: Vital[];
    vitalsUpdatedAt: Date;
    reports: [
        {
            category: String,
            file: String,
            fileName: String
        }

    ];
    visit: [];

}
