let customer = {
    name : "Nehal Garg",
    balance : 200000,
    deposit : function (amount) 
    {
        this.balance = this.balance + amount;
    },
    withdrawn : function (amount)
    {
        this.balance = this.balance - amount;
    },
}

customer.deposit(4000);
console.log("After Deposit: " + customer.balance);
customer.withdrawn(8000);
console.log("After Withdrawn: " +customer.balance);