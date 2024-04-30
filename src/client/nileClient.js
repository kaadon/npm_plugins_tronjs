import {nileContract} from "../contracts";
import defaultClient from "./defaultClient";

const nileClient = (apikey = null, privateKey = null) => {
    return {
        client: defaultClient('https://api.nileex.io/',apikey, privateKey),
        contract: nileContract
    }
}

export default nileClient
