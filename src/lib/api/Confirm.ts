import {OptionsBase} from "./OptionsBase";
import {ResponseBodyBase} from "./ResponseBodyBase";

export interface ConfirmOptions extends OptionsBase {
    /**
     * Идентификатор терминала, выдается Продавцу Банком
     */
    TerminalKey: string;

    /**
     * Уникальный идентификатор транзакции в системе Банка
     */
    PaymentId: number;

    /**
     * IP-адрес клиента
     */
    IP?: string;

    /**
     * Сумма в копейках
     */
    Amount?: number;

    /**
     * 	Подпись запроса
     */
    Token: string;
}

export interface ConfirmResponseBody extends ResponseBodyBase {
    /**
     * Идентификатор терминала, выдается Продавцу Банком
     */
    TerminalKey: string;

    /**
     * Номер заказа в системе Продавца
     */
    OrderId: string;

    /**
     * Успешность операции
     */
    Success: boolean;

    /**
     * Статус транзакции:
     * - при успешном сценарии: NEW
     * - при неуспешном: REJECTED
     */
    Status: string;

    /**
     * Уникальный идентификатор транзакции в системе Банка
     */
    PaymentId: number;

    /**
     * Код ошибки, «0» - если успешно
     */
    ErrorCode: string;

    /**
     * Краткое описание ошибки
     */
    Message?: string;

    /**
     * Подробное описание ошибки
     */
    Details?: string;
}