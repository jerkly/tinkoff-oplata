import {PaymentStatus} from "./PaymentStatus";

export namespace NotificationType {
    export const AUTHORIZED: PaymentStatus = 'AUTHORIZED';
    export const REVERSED: PaymentStatus = 'REVERSED';
    export const CONFIRMED: PaymentStatus = 'CONFIRMED';
    export const REFUNDED: PaymentStatus = 'REFUNDED';
    export const PARTIAL_REFUNDED: PaymentStatus = 'PARTIAL_REFUNDED';
    export const REJECTED: PaymentStatus = 'REJECTED';
}