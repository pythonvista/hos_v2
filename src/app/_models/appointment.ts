import { User } from './user';
import { Patient } from './patient';
import { Doctor } from './doctor';

export class Appointment {
    _id: string;
    hospital: any;
    patient: Patient;
    doctor: Doctor;
    createdBy: User;
    startDate: Date;
    endDate: Date;
    reason: string;
    status: "scheduled" | "confirm" | "noshow" | "intake" | "checkout";
}

export enum appointmentStatusType {
    scheduled = "scheduled",
    confirm = "confirm",
    noshow = "noshow",
    intake = "intake",
    checkout = "checkout"
}