class BankAccount2 {
    public readonly id: number;
    public name: string;
    private _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
     
    private getTestBalance(): number{
       return this._balance
    }
    
    get Test():number{
      return this.getTestBalance()
    }
    //getter
    get balance(): number {
      return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
  
    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }
  
  class StudentAccount2 extends BankAccount2 {
    test() {
       this.balance
    }
  }
  
  const myAccount2 = new BankAccount(444, "Persian", 30);
  // myAccount.addDeposit(20);
  // myAccount.getBalance();
  // myAccount.getBalance();
//   console.log(myAccount2.balance);
//   myAccount2.deposit = 30;
//   console.log(myAccount2.balance);