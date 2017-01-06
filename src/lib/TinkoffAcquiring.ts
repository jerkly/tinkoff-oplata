import crypto = require('crypto');
import {Tinkoff, TinkoffOptions} from "./Tinkoff";

import {CancelOptions, CancelResponseBody} from './api/Cancel';
import {ChargeOptions, ChargeResponseBody} from './api/Charge';
import {ConfirmOptions, ConfirmResponseBody} from './api/Confirm';
import {GetStateOptions, GetStateResponseBody} from './api/GetState';
import {InitOptions, InitResponseBody} from './api/Init';

import {OptionsBase} from "./api/OptionsBase";
import {ResponseBodyBase} from "./api/ResponseBodyBase";
import request = require("request");
import RequestResponse = request.RequestResponse;

const URLs = {
    INIT:       'https://securepay.tinkoff.ru/rest/Init',
    CONFIRM:    'https://securepay.tinkoff.ru/rest/Confirm',
    CHARGE:     'https://securepay.tinkoff.ru/rest/Charge',
    CANCEL:     'https://securepay.tinkoff.ru/rest/Cancel',
    GET_STATE:  'https://securepay.tinkoff.ru/rest/GetState'
};

export class TinkoffAcquiring implements Tinkoff {
    private terminalKey: string;
    private password: string;

    constructor(options: TinkoffOptions) {
        this.terminalKey = options.terminalKey;
        this.password = options.password;
    }

    init(options: InitOptions, callback: (error, body: InitResponseBody) => void) {
        this.perform(URLs.INIT, options, callback);
    }

    confirm(options: ConfirmOptions, callback: (error, body: ConfirmResponseBody) => void) {
        this.perform(URLs.CONFIRM, options, callback);
    }

    charge(options: ChargeOptions, callback: (error, body: ChargeResponseBody) => void) {
        this.perform(URLs.CHARGE, options, callback);
    }

    cancel(options: CancelOptions, callback: (error, body: CancelResponseBody) => void) {
        this.perform(URLs.CANCEL, options, callback);
    }

    getState(options: GetStateOptions, callback: (error, body: GetStateResponseBody) => void) {
        this.perform(URLs.GET_STATE, options, callback);
    }

    private perform(url: string, options: OptionsBase, callback: (error: Error, body: ResponseBodyBase) => void) {
        let body = Object.assign({}, options);
        body.TerminalKey = this.terminalKey;
        body.Password = this.password;
        body.Token = this.generateToken(body);

        request.post({
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: body
        },  (error: any, response: RequestResponse, body: string) => {
            callback(error, JSON.parse(body));
        })
    }

    private generateToken(body) {
        let values = Object.keys(body).sort().map((key) => body[key]).join('');
        return crypto.createHash('sha256').update(values).digest('hex');
    }
}