"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (pin) {
        return this.pin === pin;
    };
    return BankCustomer;
}());
try {
    var customer = new BankCustomer('John Doe', '3579');
    assert.equal(typeof customer.getName, 'function');
    assert.equal(typeof customer.verifyPinInput, 'function');
    assert.equal(customer.getName(), 'John Doe');
    assert.ok(customer.verifyPinInput('3579'));
    console.log("good :)");
}
catch (_a) {
    console.log("echec :(");
}
