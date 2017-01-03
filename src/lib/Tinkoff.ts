import {InitOptions} from "./InitOptions";

export interface TinkoffOptions {
    terminalKey: string
}

export interface Tinkoff {
    init(options: InitOptions, callback: (error, body) => void);
}

export interface TinkoffConstructable {
    new (options: TinkoffOptions): Tinkoff;
}
