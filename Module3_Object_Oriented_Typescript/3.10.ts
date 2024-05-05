{
  //* Encapsulation
  //* Encapsulation in TypeScript is like wrapping your code and data into a single package. It helps keep everything neat and tidy, and prevents outsiders from directly messing with your data.

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      if (amount >= 0) {
        this._balance += amount;
      } else {
        console.error("Input a positive number");
      }
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.getHiddenMethod();
    }
  }
}
