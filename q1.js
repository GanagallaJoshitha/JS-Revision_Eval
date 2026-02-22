function createBankAccount(initialBalance) {
    let balance = initialBalance;
    let history = [];
    return{
        deposit:(amount)=>{
            if(amount<=0)
                return "Deposit amount must be positive.";
            balance+=amount;
            history.push(`Deposited: $${amount}`);
            return "Success";
        },
        withdraw:(amount)=>{
            if(amount<=0)
            return "Withdrawal amount must be positive.";
            if(amount>balance)
                return "Insufficient funds.";
            balance-=amount;
            history.push(`Withdrew: $${amount}`);
            return "Success";
        },
        getBalance:()=> balance,
        getTransactionHistory:()=> history
    };
}