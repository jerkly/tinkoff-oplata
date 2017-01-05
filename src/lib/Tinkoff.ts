import * as Init from './api/Init';
import * as Confirm from './api/Confirm';
import * as Charge from './api/Charge';
import * as Cancel from './api/Cancel';
import * as GetState from './api/GetState';

export interface TinkoffOptions {
    terminalKey: string
    password: string
}

export interface Tinkoff {
    init(options: Init.Options, callback: (error, body: Init.ResponseBody) => void);
    confirm(options: Confirm.Options, callback: (error, body: Confirm.ResponseBody) => void);
    charge(options: Charge.Options, callback: (error, body: Charge.ResponseBody) => void);
    cancel(options: Cancel.Options, callback: (error, body: Cancel.ResponseBody) => void);
    getState(options: GetState.Options, callback: (error, body: GetState.ResponseBody) => void);
}

export interface TinkoffConstructor {
    new (options: TinkoffOptions): Tinkoff;
}

declare let Tinkoff: TinkoffConstructor;
