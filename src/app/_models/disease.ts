import { AnimationQueryOptions } from '@angular/animations';
import { Prescription } from './prescription';

export class Disease {
    _id: any;
    createdBy: any;
    patient: any;
    hospital: any;
    // date: AnimationQueryOptions;
    presentingComplaint: string;
    historyOfPresentingComplaint: string;
    physicalExamination: string;
    provisionalDiagnosis: string;
    investigations: string;
    finalDiagnosis: string;
    treatment: string;
    outcome: string;
    diseaseCategory: string;
    diseaseSubCategory: string;
    prescription: Prescription[];
    createdAt: any;
}