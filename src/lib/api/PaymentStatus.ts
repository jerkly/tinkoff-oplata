export type PaymentStatus = 'NEW' | 'CANCELED' | 'PREAUTHORIZING' | 'FORMSHOWED' | 'AUTHORIZING' | '3DS_CHECKING' | '3DS_CHECKED' | 'AUTHORIZED' | 'REVERSING' | 'REVERSED' | 'CONFIRMING' | 'CONFIRMED' | 'REFUNDING' | 'REFUNDED' | 'PARTIAL_REFUNDED' | 'REJECTED' | 'UNKNOWN'

export namespace PaymentStatus {
    export const NEW: PaymentStatus = 'NEW';
    export const CANCELED: PaymentStatus = 'CANCELED';
    export const PREAUTHORIZING: PaymentStatus = 'PREAUTHORIZING';
    export const FORMSHOWED: PaymentStatus = 'FORMSHOWED';
    export const AUTHORIZING: PaymentStatus = 'AUTHORIZING';
    export const THREE_DS_CHECKING: PaymentStatus = '3DS_CHECKING';
    export const THREE_DS_CHECKED: PaymentStatus = '3DS_CHECKED';
    export const AUTHORIZED: PaymentStatus = 'AUTHORIZED';
    export const REVERSING: PaymentStatus = 'REVERSING';
    export const REVERSED: PaymentStatus = 'REVERSED';
    export const CONFIRMING: PaymentStatus = 'CONFIRMING';
    export const CONFIRMED: PaymentStatus = 'CONFIRMED';
    export const REFUNDING: PaymentStatus = 'REFUNDING';
    export const REFUNDED: PaymentStatus = 'REFUNDED';
    export const PARTIAL_REFUNDED: PaymentStatus = 'PARTIAL_REFUNDED';
    export const REJECTED: PaymentStatus = 'REJECTED';
    export const UNKNOWN: PaymentStatus = 'UNKNOWN';
}