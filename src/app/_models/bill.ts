import { PaymentItem } from './paymentItem';
export class Bill {
    _id: any;
    createdBy: any;
    hospital: any;
    patient: any;
    doctor: any;
    // paymentMethod:String;
    items: PaymentItem[];
    discount: number;
    date: Date;
    createdAt: any;
    totalAmount: number;

}