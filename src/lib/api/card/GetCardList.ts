import {OptionsBase} from "../OptionsBase";
import {ResponseBodyBase} from "../ResponseBodyBase";

export interface GetCardListOptions extends OptionsBase  {
    /**
     * Идентификатор покупателя в системе Продавца
     */
    CustomerKey: string;
    /**
     * IP-адрес запроса
     */
    IP?: string;
}

export interface GetCardListResponseBody extends ResponseBodyBase {
    cards: [{
        /**
         * Номер карты 411111******1111
         */
        Pan: string;
        /**
         * Идентификатор карты в системе Банка
         */
        CardId: string;
        /**
         * Статус карты: A – активная, I – не активная
         */
        Status: string;
    }];
}