import {OptionsBase} from "./OptionsBase";
import {ResponseBodyBase} from "./ResponseBodyBase";
import {PaymentStatus} from "./PaymentStatus";

export interface CancelOptions extends OptionsBase {

    /**
     * Уникальный идентификатор транзакции в системе Банка
     */
    PaymentId: number | string;

    /**
     * IP-адрес клиента
     */
    IP?: string;

    /**
     * Причина отмены
     */
    Reason?: string;

    /**
     * Сумма отмены в копейках (**)
     */
    Amount?: number;
}

export interface CancelResponseBody extends ResponseBodyBase {
    /**
     * Идентификатор терминала, выдается Продавцу Банком
     */
    TerminalKey: string;

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
     * Номер заказа в системе Продавца
     */
    OrderId: string;

    /**
     * Сумма в копейках до операции отмены
     */
    OriginalAmount: number;

    /**
     * Сумма в копейках после операции отмены
     */
    NewAmount: number;

    /**
     * Краткое описание ошибки
     */
    Message?: string;

    /**
     * Подробное описание ошибки
     */
    Details?: string;
}