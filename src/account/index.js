import {mathHelper} from "@kaadon.com/helper";
/*
* 获取地址的账户信息
* @param address
* */
export async function getAccount(client,address) {
    try {
        //逻辑代码
        if (!client.client.isAddress(address)) throw new Error("Incorrect address format");
        return await client.client.trx.getAccount(address)
    } catch (e) {
        return Promise.reject(e)
    }
}
/*
* 获取地址的能量和带宽
* @param address
* */
export const getAddressResource =async (client,address) => {
    let addressData = await client.client.trx.getAccountResources(address)
    if (JSON.stringify(addressData) === '{}') return Promise.resolve(false);
    let energy = 0
    let net = 0
    if (addressData?.EnergyLimit) energy = addressData.EnergyLimit - ((addressData?.EnergyUsed)?addressData.EnergyUsed:0)
    if (addressData?.NetLimit) net = (addressData.NetLimit - ((addressData?.NetUsed)?addressData.NetUsed:0))
    if (addressData?.freeNetLimit) net += (addressData.freeNetLimit - ((addressData?.freeNetUsed)?addressData.freeNetUsed:0))
    return {energy,net}
}
/*
* 获取地址的trx余额
* @param address
* */
export async function getTrx(client,address) {
    try {
        //逻辑代码
        if (!client.client.isAddress(address)) throw new Error("Incorrect address format");
        let balance = await client.client.trx.getBalance(address)
        return Promise.resolve(mathHelper.dev(balance,1000000))
    } catch (e) {
        return Promise.reject(e)
    }
}



