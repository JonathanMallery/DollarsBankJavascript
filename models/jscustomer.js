export default class Customer {
    constructor(){
        this._firstname = null;
        this._lastname = null;
        this._pin = null;
        this._balance = null;
    }

    getFirstname(){
        return this._firstname;
    }

    setFirstname(firstname){
        this._firstname = firstname;
    }

    getLastname(){
        return this._lastname;
    }

    setLastname(lastname) {
        this._lastname = lastname;
    }

    getPin(){
        return this._pin;
    }

    setPin(pin){
        this._pin = pin;
    }

    getBalance(){
        return this._balance;
    }

    setBalance(balance){
        this._balance = balance;
    }
}