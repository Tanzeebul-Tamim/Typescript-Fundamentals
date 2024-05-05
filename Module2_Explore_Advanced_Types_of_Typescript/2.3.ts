{
  //* Generic types
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. Z", "Mr. Y", "Mr. X"];
  const mentors: GenericArray<string> = ["Mr. Z", "Mr. Y", "Mr. X"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar",
      age: 200,
    },
    {
      name: "Tonmoy",
      age: 130,
    },
  ];

  //* Generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const person: GenericTuple<string, string> = ["Mr. X", "Mrs. X"];
  const userWithId: GenericTuple<number, User> = [
    1234,
    { name: "Tanzeebul", age: 23 },
  ];
}
