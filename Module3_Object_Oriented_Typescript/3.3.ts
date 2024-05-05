{
  //! Type guards
  //* typeof guard
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return parseFloat(param1.toString() + param2.toString());
    }
  };

  const result = add(2, "5");
  console.log(result);

  //* in guard
  type RegularUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  function getUser(user: RegularUser | AdminUser): void {
    if ("role" in user) {
      console.log(`My name is ${user.name} and I'm an ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  }

  const regularUser: RegularUser = {
    name: "Tanzeebul Tamim",
  };

  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "Admin",
  };

  getUser(regularUser);
  getUser(adminUser);
}
