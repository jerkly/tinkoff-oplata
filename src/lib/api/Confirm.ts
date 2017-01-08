import {OptionsBase} from "./OptionsBase";
import {ResponseBodyBase} from "./ResponseBodyBase";
import {PaymentStatus} from "./PaymentStatus";

export interface ConfirmOptions extends OptionsBase {
    /**
     * Уникальный идентификатор транзакции в системе Банка
     */
    PaymentId: number | string;

    /**
     * IP-адрес клиента
     */
    IP?: string;

    /**
     * Сумма в копейках
     */
    Amount?: number;
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
     * Статус транзакции
     */
    Status: PaymentStatus;

    /**
     * Уникальный идентификатор транзакции в системе Банка
     */
    PaymentId: string;

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