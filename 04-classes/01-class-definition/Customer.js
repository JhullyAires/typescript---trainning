"use strict";
class Customer {
    constructor(thefirstName) {
        this._firstName = thefirstName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirst) {
        this._firstName = theFirst;
    }
}
// use it:
// let myCustomer = new Customer("Martin");
// myCustomer.firstName = "Susan"; // calls the "set accessor" since we are assigning a value
// console.log(myCustomer.firstName);
