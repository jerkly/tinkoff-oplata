import crypto = require('crypto');
import {Tinkoff, TinkoffOptions} from "./Tinkoff";

import * as Init from './api/Init';
import * as Confirm from './api/Confirm';
import * as Charge from './api/Charge';
import * as Cancel from './api/Cancel';
import * as GetState from './api/GetState';

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

    init(options: Init.Options, callback: (error, body: Init.ResponseBody) => void) {
        this.perform(options, callback);
    }

    confirm(options: Confirm.Options, callback: (error, body: Confirm.ResponseBody) => void) {
        this.perform(options, callback);
    }

    charge(options: Charge.Options, callback: (error, body: Charge.ResponseBody) => void) {
        this.perform(options, callback);
    }

    cancel(options: Cancel.Options, callback: (error, body: Cancel.ResponseBody) => void) {
        this.perform(options, callback);
    }

    getState(options: GetState.Options, callback: (error, body: GetState.ResponseBody) => void) {
        this.perform(options, callback);
    }

    private perform(options: OptionsBase, callback: (error: Error, body: ResponseBodyBase) => void) {
        let body = Object.assign({}, options);
        body.TerminalKey = this.terminalKey;
        body.Password = this.password;
        body.Token = this.generateToken(body);

        request.post(URLs.INIT, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: body
        },  (error: any, response: RequestResponse, body: ResponseBodyBase) => {
            callback(error, body);
        })
    }

    private generateToken(body) {
        let values = Object.keys(body).sort().map((key) => body[key]).join('');
        return crypto.createHash('sha256').update(values).digest('hex');
    }
}