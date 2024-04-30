import {mainnetContract} from "../contracts";
import defaultClient from "./defaultClient";

const mainNetClient = (apikey = null, privateKey = null) => {
    return {
        client: defaultClient('https://api.trongrid.io',apikey, privateKey),
        contract: mainnetContract
    }
}

export default mainNetClient
