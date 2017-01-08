import {CancelOptions, CancelResponseBody} from './api/Cancel';
import {ChargeOptions, ChargeResponseBody} from './api/Charge';
import {ConfirmOptions, ConfirmResponseBody} from './api/Confirm';
import {GetStateOptions, GetStateResponseBody} from './api/GetState';
import {InitOptions, InitResponseBody} from './api/Init';
import {TinkoffAcquiring} from "./TinkoffAcquiring";
import {Notification} from "./api/Notification";
import {ResendResponseBody, ResendOptions} from "./api/Resend";

import {AddCustomerOptions, AddCustomerResponseBody} from "./api/card/AddCustomer";
import {GetCustomerOptions, GetCustomerResponseBody} from "./api/card/GetCustomer";
import {RemoveCardOptions, RemoveCardResponseBody} from "./api/card/RemoveCard";
import {RemoveCustomerOptions, RemoveCustomerResponseBody} from "./api/card/RemoveCustomer";
import {GetCardListOptions, GetCardListResponseBody} from "./api/card/GetCardList";

export interface TinkoffOptions {
    terminalKey: string;
    password: string;
}

export interface Tinkoff {
    init(options: InitOptions, callback: (error, body: InitResponseBody) => void): void;
    confirm(options: ConfirmOptions, callback: (error, body: ConfirmResponseBody) => void): void;
    charge(options: ChargeOptions, callback: (error, body: ChargeResponseBody) => void): void;
    cancel(options: CancelOptions, callback: (error, body: CancelResponseBody) => void): void;
    getState(options: GetStateOptions, callback: (error, body: GetStateResponseBody) => void): void;
    resend(callback: (error, body: ResendResponseBody) => void): void;
    resend(options: ResendOptions, callback: (error, body: ResendResponseBody) => void): void;

    addCustomer(options: AddCustomerOptions, callback: (error, body: AddCustomerResponseBody) => void): void;
    getCustomer(options: GetCustomerOptions, callback: (error, body: GetCustomerResponseBody) => void): void;
    removeCustomer(options: RemoveCustomerOptions, callback: (error, body: RemoveCustomerResponseBody) => void): void;
    getCardList(options: GetCardListOptions, callback: (error, body: GetCardListResponseBody) => void): void;
    removeCard(options: RemoveCardOptions, callback: (error, body: RemoveCardResponseBody) => void): void;

    isTokenValid(data: Notification): boolean;
}

export interface TinkoffConstructor {
    new (options: TinkoffOptions): Tinkoff;
}

export let Tinkoff: TinkoffConstructor = TinkoffAcquiring;
