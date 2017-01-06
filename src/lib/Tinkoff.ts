import {CancelOptions, CancelResponseBody} from './api/Cancel';
import {ChargeOptions, ChargeResponseBody} from './api/Charge';
import {ConfirmOptions, ConfirmResponseBody} from './api/Confirm';
import {GetStateOptions, GetStateResponseBody} from './api/GetState';
import {InitOptions, InitResponseBody} from './api/Init';
import {TinkoffAcquiring} from "./TinkoffAcquiring";
import {Notification} from "./api/Notification";

export interface TinkoffOptions {
    terminalKey: string
    password: string
}

export interface Tinkoff {
    init(options: InitOptions, callback: (error, body: InitResponseBody) => void): void;
    confirm(options: ConfirmOptions, callback: (error, body: ConfirmResponseBody) => void): void;
    charge(options: ChargeOptions, callback: (error, body: ChargeResponseBody) => void): void;
    cancel(options: CancelOptions, callback: (error, body: CancelResponseBody) => void): void;
    getState(options: GetStateOptions, callback: (error, body: GetStateResponseBody) => void): void;
    isTokenValid(data: Notification): boolean;
}

export interface TinkoffConstructor {
    new (options: TinkoffOptions): Tinkoff;
}

export let Tinkoff: TinkoffConstructor = TinkoffAcquiring;
