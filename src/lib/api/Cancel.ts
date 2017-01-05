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
     * Причина отмены
     */
    Reason?: string;

    /**
     * Подпись запроса
     */
    Roken: string;

    /**
     * Сумма отмены в копейках (**)
     */
    Amount?: number;
}

export interface ResponseBody {
    /**
     * Идентификатор терминала, выдается Продавцу Банком
     */
    TerminalKey: string;

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