{
  //* Utility types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //* Pick
  type NeededFields = "name" | "age";

  // type NameAge = Pick<Person, "name" | "age">;
  type NameAge = Pick<Person, NeededFields>;

  //* Omit
  type UnnecessaryFields = "name" | "age" | "email";

  // type ContactInfo = Omit<Person, "name" | "age">;
  type ContactInfo = Omit<Person, UnnecessaryFields>;

  //* Required
  type PersonRequired = Required<Person>;

  //* Optional
  type PersonOptional = Partial<Person>;

  //* Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 23,
    contactNo: "017",
  };

  // person1.name = "Mr. YZ"; //* Restricts reassigning properties

  //* Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<number | string, unknown>;

  const obj1: MyObj = {
    1: "12",
    B: 13,
    3: true,
  };
}
