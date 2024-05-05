{
  //* Conditional types
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //* Conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; //* Conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T, K> = T extends keyof K ? number : boolean;
  type HasBike = CheckVehicle<"bike", Sheikh>;
}
