class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = []
    }

    newCustomer (customer) {
        // customer = {firstName, lastName, personalId}
        let found = false;
        if (this.allCustomers.length>0) {
            this.allCustomers.forEach(existingCust => {
                if (existingCust.firstName===customer.firstName) {
                    found = true
                }    
            })
        }  
        if (found) {
            throw new Error (`${customer.firstName} ${customer.lastName} is already our customer!`)
        } else {
            this.allCustomers.push(customer)
            return customer
        }
    }
    depositMoney (personalId,amount) {
        let customerStats;
        let isCustomer = false;
        for (let customer of this.allCustomers) {
            if (customer.personalId==personalId) {
                isCustomer=true;
                if (!customer.transactions) {
                    customer.transactions = []
                }
                customerStats = customer
            }
        }
        if (isCustomer) {
            if (!customerStats.totalMoney) {
                customerStats.totalMoney = 0
            } 
                customerStats.totalMoney+=amount
                customerStats.transactions.push(`${customerStats.firstName} ${customerStats.lastName} made deposit of ${amount}$!`)
                return `${customerStats.totalMoney}$`
            
        } else {
            throw new Error('We have no customer with this ID!')
        }
        
    }
    withdrawMoney(personalId,amount) {
        let customerStats;
        let isCustomer = false;
        for (let customer of this.allCustomers) {
            if (customer.personalId==personalId) {
                isCustomer=true;
                customerStats = customer
            }
        }
        if (isCustomer) {
            if (customerStats.totalMoney>=amount) {
                customerStats.totalMoney -=amount
                customerStats.transactions.push(`${customerStats.firstName} ${customerStats.lastName} withdrew ${amount}$!`)
                return `${customerStats.totalMoney}$`
            } 
            else {
                throw new Error (`${customerStats.firstName} ${customerStats.lastName} does not have enough money to withdraw that amount!`)
            }
            
        } else {
            throw new Error('We have no customer with this ID!')
        }
    }
    customerInfo(personalId) {
        let customerStats;
        let isCustomer = false;
        for (let customer of this.allCustomers) {
            if (customer.personalId==personalId) {
                isCustomer=true;
                customerStats = customer
            }
        }
        if (!isCustomer) {
            throw  new Error (`We have no customer with this ID!`)
        }
        let result = ``
        let bankName = `Bank name: ${this._bankName}`
        let customerName = `Customer name: ${customerStats.firstName} ${customerStats.lastName}`
        let customerId = `Customer ID: ${customerStats.personalId}`
        let customerMoney = `Total Money: ${customerStats.totalMoney}$`
        result = bankName + "\n" + customerName + "\n" + customerId + "\n" + customerMoney
        let sorted = []
        for (let i =0; i<customerStats.transactions.length; i++){
            sorted.push(i+1 + `. ${customerStats.transactions[i]}`)
        }
        result += "\n" +`Transactions:` + "\n"
        sorted.sort((a,b) => b.localeCompare(a)).forEach(transaction => {
            
            result +=transaction + "\n"
        })
        return result.trim()
    }
}

// let bank = new Bank("SoftUni Bank");

// console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
// console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596,555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));

let name = 'SoftUni Bank';
let bank = new Bank(name);
// console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 }));
// console.log(bank.depositMoney(1111111, 250));
// console.log(bank.depositMoney(1111111, 250));
// console.log(bank.depositMoney(3333333, 555));
// console.log(bank.withdrawMoney(1111111, 125));
// console.log(bank.customerInfo(1111111));
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 }))
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 }))
