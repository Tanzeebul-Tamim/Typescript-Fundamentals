{
  //! Type alias
  type TStudent = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: TStudent = {
    name: "Mezba",
    age: 50,
    gender: "Male",
    contactNo: "017",
    address: "CTG",
  };

  const student2: TStudent = {
    name: "Rafin",
    age: 55,
    gender: "Male",
    address: "Dhaka",
  };

  type TUserName = string;
  type TIsAdmin = boolean;
  const userName: TUserName = "Persian";
  const isAdmin: TIsAdmin = false;

  type TAdd = (num1: number, num2: number) => number;
  const add: TAdd = (num1, num2) => num1 + num2;
}
