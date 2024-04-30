
import {mathHelper} from "@kaadon.com/helper";

/*
* 获取trc20合约
* @param contract 合约名称或者合约对象
*   {
*        address:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
*        decimal:6,
*        name:"usdt"
*    }
* */
export async function getTrc20Contract(client,contract) {
    try {
        if (typeof contract === 'string') contract = client.contract.find(item => item.symbol === contract)
        //逻辑代码
        let myContract = await client.client.contract().at(contract.address)
        myContract.contract = contract
        return Promise.resolve(myContract)
    } catch (e) {
        return Promise.reject(e)
    }
}
/*
* 获取TRC20余额
* @param contract 合约对象
* @param address 地址
* */
export async function getTrc20Balance(client,contract,address) {
    try {
        //逻辑代码
        let instance = await getTrc20Contract(contract)
        let balance = await instance.balanceOf(address).call()
        if (!balance) balance = client.client.BigNumber(0);
        return Promise.resolve(mathHelper.dev(balance.toNumber(), instance.contract.decimal))
    } catch (e) {
        return Promise.reject(e)
    }
}

