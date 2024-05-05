{
  //* Reference type -> Object

  const user: {
    readonly company: "Programming Hero"; //* String Literal type, readonly restricts you from reassigning, also called access modifier
    firstName: string;
    middleName?: string; //* Optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried: true,
  };

  // user.company = "T"; //* Cannot assign to 'company' because it is a read-only property.
}
