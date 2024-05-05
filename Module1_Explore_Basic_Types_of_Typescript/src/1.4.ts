{
  //! Basic Data Type

  //* string
  let firstName: string = "Mezba";

  //* number
  let roll: number = 123;

  //* boolean
  let isAdmin: boolean = true;

  //* undefined
  let x: undefined = undefined;

  //* null
  let y: null = null;

  let d;
  d = 123;
  d = "ddd";
  d = true;

  //* array
  let friends: string[] = ["rachel", "monica"];
  let eligibleRollList: number[] = [1, 2, 3, 1];
  // eligibleRollList.push('dd') -> //* won't let me push any data type other than number into this array

  //* tuple
  let ageName: [number, string, boolean, number[]] = [
    22,
    "Tamim",
    true,
    [1, 3],
  ];
  // ageName[0] = "Tamim"; -> //* won't let me push any data type other than number into the first element of this array
}
