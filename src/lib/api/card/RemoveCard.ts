import {OptionsBase} from "../OptionsBase";
import {ResponseBodyBase} from "../ResponseBodyBase";

export interface RemoveCardOptions extends OptionsBase  {
    /**
     * Идентификатор карты в системе Банка
     */
    CardId: number;
    /**
     * Идентификатор покупателя в системе Продавца
     */
    CustomerKey: string;
    /**
     * IP-адрес запроса
     */
    IP?: string;
}

export interface RemoveCardResponseBody extends ResponseBodyBase {
    /**
     * Платежный ключ, выдается Продавцу при заведении терминала
     */
    TerminalKey: string;
    /**
     * Идентификатор карты в системе Банка
     */
    CardId: number;
    /**
     * Идентификатор покупателя в системе Продавца
     */
    CustomerKey: string;
    /**
     * Статус карты: D – удалена
     */
    Status: string;
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