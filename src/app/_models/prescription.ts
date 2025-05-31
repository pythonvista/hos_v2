export class Prescription {
    name: string;
    quantity: number;
    days: number;
    time: {
        morning: boolean;
        afternoon: boolean;
        evening: boolean;
        night: boolean;
    }
}