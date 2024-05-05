{
  //* Ternary operator
  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //* Nullish coalescing operator -> used a decision has to be made based on null or undefined value
  const isAuthenticated = false;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1, result2 });

  //* Optional chaining operator
  type TUser = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: TUser = {
    name: "Tanzeebul",
    address: {
      city: "Dhaka",
      road: "Awesome road",
      presentAddress: "Dhaka city",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
}
