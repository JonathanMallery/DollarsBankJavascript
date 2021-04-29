export default class Accounts {
    constructor(){
        this._allaccounts = [];
    }

    getAccounts(){
        return this._allaccounts;
    }

    addCustomerToAccounts(customerObj){
        this._allaccounts.push(customerObj);
    }

}