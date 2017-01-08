import {OptionsBase} from "./OptionsBase";
import {ResponseBodyBase} from "./ResponseBodyBase";

export interface ChargeOptions extends OptionsBase {
    /**
     * Уникальный идентификатор транзакции в системе Банка
     */
    PaymentId: number | string;

    /**
     * IP-адрес клиента
     */
    IP?: string;

    /**
     * Идентификатор рекуррентного платежа (см. параметр Recurrent в методе Init)
     */
    RebillId: number | string;
}

export interface ChargeResponseBody extends ResponseBodyBase {
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
    PaymentId: string;

    /**
     * Код ошибки, «0» - если успешно
     */
    ErrorCode: string;

    /**
     * Сумма списания в копейках
     */
    Amount: number;

    /**
     * Краткое описание ошибки
     */
    Message?: string;

    /**
     * Подробное описание ошибки
     */
    Details?: string;
}