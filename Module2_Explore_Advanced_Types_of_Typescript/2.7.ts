{
  //* Generic constraints with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //* manually
  type Owner2 = keyof Vehicle; //* using keyof operator

  function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

  const user = {
    name: "Mr. Persian",
    age: 26,
    address: "CTG",
  };

  const result1 = getPropertyValue(user, "name");
  console.log(result1);

  const person1: Owner = "car";
  const person2: Owner2 = "ship";
}
