export interface Options {
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
     * Идентификатор рекуррентного платежа (см. параметр Recurrent в методе Init)
     */
    RebillId: number;

    /**
     * 	Подпись запроса
     */
    Token: string;
}

export interface ResponseBody {
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