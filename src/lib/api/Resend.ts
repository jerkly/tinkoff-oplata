export interface ResendOptions {
    /**
     * Id платежа по которому необходимо получить нотификацию их архива
     */
    PaymentId: number | string;
    /**
     * Тип нотификации который необходимо получить из архива повторно. *Параметр обязателен если передан PaymentId
     */
    NotificationType: string;
}

export interface ResendResponseBody {
    /**
     * Платежный ключ, выдается Продавцу при заведении терминала
     */
    TerminalKey: string;
    /**
     * Кол-во сообщений, отправленных на повторную рассылку
     */
    Count: number;
    /**
     * Успешность операции (true/false)
     */
    Success: boolean;
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