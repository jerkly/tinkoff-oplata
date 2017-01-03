import * as request from 'request';
import {Tinkoff, TinkoffOptions} from "./Tinkoff";
import {InitOptions} from "./InitOptions";
import RequestResponse = request.RequestResponse;

let URLS = {
    INIT: 'https://securepay.tinkoff.ru/rest/Init'
};

export class TinkoffAcquiring implements Tinkoff {
    private terminalKey: string;

    constructor(options: TinkoffOptions) {
        this.terminalKey = options.terminalKey;
    }

    init(options: InitOptions, callback: (error, body) => void) {
        let body = Object.assign({}, options);
        body.terminalKey = this.terminalKey;
        request.post(URLS.INIT, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: body
        },  (error: any, response: RequestResponse, body: any) => {
            callback(error, body);
        })
    }
}