import {OptionsBase} from "../OptionsBase";
import {ResponseBodyBase} from "../ResponseBodyBase";

export interface AddCustomerOptions extends OptionsBase  {
    /**
     * Идентификатор покупателя в системе Продавца
     */
    CustomerKey: string;
    /**
     * IP-адрес запроса
     */
    IP?: string;
    /**
     * Email клиента
     */
    Email?: string;
    /**
     * Телефон клиента (+71234567890)
     */
    Phone?: string;
}

export interface AddCustomerResponseBody extends ResponseBodyBase {
    /**
     * Платежный ключ, выдается Продавцу при заведении терминала
     */
    TerminalKey: string;
    /**
     * Идентификатор покупателя в системе Продавца
     */
    CustomerKey: string;
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