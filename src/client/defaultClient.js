import TronWeb from "tronweb";

const defaultApikeys = [
    "e746f1ac-ac71-4a63-9093-52615b48da37",
    "db8896a6-1ebf-4b59-91b5-a70d69067bb9",
    "a274dc26-c368-488d-aeb9-6b1617e26825",
    "6bdb638e-cb82-40c1-9fd5-2275dffe6610",
    "4dd12b2e-62b9-4090-8ff0-e4c6888bebae",
    "7b4904ce-c29e-4946-b20f-eef2b50d00ca",
    "d6ff5154-3efd-4105-8051-a5e3dde856f6",
    "a35907c2-5673-4cb1-bd4f-9886a0d91933",
    "440a0bd3-efaa-439d-8237-8e2f6c5fcd25"
]

const defaultPrivateKey = '2fe76d9f1d872d07826cada397350819d3ab5b4a61bbc846c14de2b2f1edf9ba'

const defaultClient = (url, apikey = null, privateKey = null) => {
    if (!apikey) {
        apikey = defaultApikeys[Math.floor(Math.random() * defaultApikeys.length)]
    } else {
        if (Array.isArray(apikey)) {
            apikey = apikey[Math.floor(Math.random() * apikey.length)]
        }
    }
    return new TronWeb({
        fullHost: url,
        headers: {'TRON-PRO-API-KEY': apikey},
        privateKey: privateKey || defaultPrivateKey
    })
}

export default defaultClient