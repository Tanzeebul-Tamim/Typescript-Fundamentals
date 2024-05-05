{
  //! Getter & setter
  //* Getter & setter lets you use methods like property
  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //* setter
    set deposit(amount: number) {
      if (amount >= 0) {
        this._balance += amount;
      } else {
        console.error("Input a positive number");
      }
    }

    //* getter
    get balance() {
      return this._balance;
    }
  }

  const poorPersonAccount = new BankAccount(111, "Tanzeebul Tamim", 100);

  poorPersonAccount.deposit = 21; //* Here Setter is letting you use "Balance" method like a property
  const myBalance = poorPersonAccount.balance; //* Here Getter is letting you use "Balance" method like a property
  console.log(myBalance);
}
