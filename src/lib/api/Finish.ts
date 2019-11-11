import {OptionsBase} from "./OptionsBase";
import {ResponseBodyBase} from "./ResponseBodyBase";
import {PaymentStatus} from "./PaymentStatus";

export interface FinishOptions extends OptionsBase {

    /**
     * Сумма в копейках.
     * Max length: 10
     */
    Amount?: number;

    /**
     * Уникальный  идентификатор транзакции  в системе Банка.
     * Max length: 50
     */
    PaymentId: string;

    /**
     * IP-адрес клиента.
     * Max length: 40
     */
    IP?: string;

    /**
     * Данные карты. Используется только для ApplePay(расшифровкатокенанасторонеБанка).
     * Max length: 5000
     */
    EncryptedPaymentData?: string;

    /**
     * true–отправлять  клиенту  информацию  на почту об оплате. 
     */
    SendEmail?: boolean;

    /**
     * Способ платежа
     * Max length: 50    
     */
    Route?: string;

    /**
     * Источник платежа
     * Max length: 50    
     */
    Source: string;

    /**
     * Emailдля отправки информации об оплат
     * Max length: 50    
     */
    
    InfoEmail?: string;

}

export interface FinishResponseBody extends ResponseBodyBase {
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
     * Сумма в копейках
     */
    Amount: number;

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

    /**
     * В случае если при вызове метода Init платеж был помечен как рекуррентный, то после подтверждения оплаты в этот параметр будет передан идентификатор рекуррентного платежа
     */
    RebillId: string;

    /**
     * В случае если разрешена автоматическая привязка карт Покупателей к терминалу и при вызове метода Init был передан параметр CustomerKey, в этот параметр будет передан идентификатор привязанной карты
     */
    CardId: string;
}