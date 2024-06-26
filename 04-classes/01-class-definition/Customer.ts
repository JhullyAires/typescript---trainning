class Customer {
    private _firstName: string; // can give any property name. The "_" it's just a convention.

    constructor(thefirstName: string) {
        this._firstName = thefirstName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(theFirst: string) {
        this._firstName = theFirst;
    }

    //p.s.: only supported in ES5 and higher
    // set a flag to compile:
    // tsc --target ES5 --noEmitOnError Customer.ts
}

// use it:
// let myCustomer = new Customer("Martin");
// myCustomer.firstName = "Susan"; // calls the "set accessor" since we are assigning a value
// console.log(myCustomer.firstName);