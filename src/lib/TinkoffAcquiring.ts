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
import {Notification} from "./api/Notification";
import {ResendResponseBody, ResendOptions} from "./api/Resend";
import {isFunction} from "util";
import {AddCustomerOptions, AddCustomerResponseBody} from "./api/card/AddCustomer";
import {GetCustomerOptions, GetCustomerResponseBody} from "./api/card/GetCustomer";
import {RemoveCustomerOptions, RemoveCustomerResponseBody} from "./api/card/RemoveCustomer";
import {GetCardListOptions, GetCardListResponseBody} from "./api/card/GetCardList";
import {RemoveCardOptions, RemoveCardResponseBody} from "./api/card/RemoveCard";

const URLs = {
    INIT:               'https://securepay.tinkoff.ru/rest/Init',
    CONFIRM:            'https://securepay.tinkoff.ru/rest/Confirm',
    CHARGE:             'https://securepay.tinkoff.ru/rest/Charge',
    CANCEL:             'https://securepay.tinkoff.ru/rest/Cancel',
    GET_STATE:          'https://securepay.tinkoff.ru/rest/GetState',
    RESEND:             'https://securepay.tinkoff.ru/rest/Resend',

    ADD_CUSTOMER:       'https://securepay.tinkoff.ru/rest/AddCustomer',
    GET_CUSTOMER:       'https://securepay.tinkoff.ru/rest/GetCustomer',
    REMOVE_CUSTOMER:    'https://securepay.tinkoff.ru/rest/RemoveCustomer',
    GET_CARD_LIST:      'https://securepay.tinkoff.ru/rest/GetCardList',
    REMOVE_CARD:        'https://securepay.tinkoff.ru/rest/RemoveCard'
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

    resend(callback: (error, body: ResendResponseBody) => void)
    resend(options: ResendOptions, callback: (error, body: ResendResponseBody) => void)
    resend(options: ResendOptions | ((error, body: ResendResponseBody) => void), callback?: (error, body: ResendResponseBody) => void) {
        let resultOptions = isFunction(options) ?  {} : options;
        let resultCallback = isFunction(options) ? <(error, body: ResendResponseBody) => void> options : callback;
        this.perform(URLs.RESEND, resultOptions, resultCallback);
    }

    addCustomer(options: AddCustomerOptions, callback: (error, body: AddCustomerResponseBody) => void): void {
        this.perform(URLs.ADD_CUSTOMER, options, callback);
    }

    getCustomer(options: GetCustomerOptions, callback: (error, body: GetCustomerResponseBody) => void): void {
        this.perform(URLs.GET_CUSTOMER, options, callback);
    }

    removeCustomer(options: RemoveCustomerOptions, callback: (error, body: RemoveCustomerResponseBody) => void): void {
        this.perform(URLs.REMOVE_CUSTOMER, options, callback);
    }

    getCardList(options: GetCardListOptions, callback: (error, body: GetCardListResponseBody) => void): void {
        this.perform(URLs.GET_CARD_LIST, options, (error, body) => callback(error, <GetCardListResponseBody>{cards: body}));
    }

    removeCard(options: RemoveCardOptions, callback: (error, body: RemoveCardResponseBody) => void): void {
        this.perform(URLs.REMOVE_CARD, options, callback);
    }

    isTokenValid(data: Notification): boolean {
        let bodyWithoutToken = Object.assign({Password: this.password}, data, {Token: undefined});
        let token = this.generateToken(bodyWithoutToken);
        return data.Token === token;
    }

    private generateToken(body): string {
        let values = Object.keys(body).sort().map((key) => body[key]).join('');
        return crypto.createHash('sha256').update(values).digest('hex');
    };

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
}