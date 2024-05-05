{
  //! Function

  //* Regular function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  const a = add(1, 2);
  console.log(a);

  //* Arrow function
  const addArrow = (num1: number, num2: number = 10): number => num1 + num2; //* number = 10 defines the default value for the parameter num2

  const b = addArrow(3, 6);
  console.log(b);

  //* Method
  const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is ${this.balance + balance}`;
    },
  };

  //* Map
  const arr: number[] = [12, 4, 10];
  const newArray: number[] = arr.map((elem: number): number => elem ** 2);
  console.log(newArray);
}
