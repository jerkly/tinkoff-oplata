import {Notification} from "./api/Notification";
import {generateToken} from "./TinkoffAcquiring";

export namespace TinkoffUtils {
    export function tokenValid(data: Notification): boolean {
        let bodyWithoutToken = Object.assign({}, data, {Token: undefined});
        let token = generateToken(bodyWithoutToken);
        return data.Token === token;
    }
}