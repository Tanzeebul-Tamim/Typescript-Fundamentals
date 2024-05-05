{
  //! Access modifier
  class BankAccount {
    readonly id: number; //* "readonly" restricts modifying
    public name: string; //* "public" is set by default, no need to mention explicitly
    //* "private" restricts modifying outside the class, using underscore before a private property name is a convention
    // private _balance: number;
    //* "protected" also works like private, but doesn't restricts the properties and the methods from being used in a child class
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      //* Access modifiers can also be used for methods
      if (amount >= 0) {
        this._balance += amount;
      } else {
        console.error("Input a positive number");
      }
    }

    public getBalance() {
      return this._balance;
    }
  }

  const poorPersonAccount = new BankAccount(111, "Tanzeebul Tamim", 100);
  // poorPersonAccount.id = 222;
  // poorPersonAccount.balance = 0;

  poorPersonAccount.addDeposit(21);
  const myBalance = poorPersonAccount.getBalance();
  console.log(myBalance);

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }
}
