{
  //* Function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  console.log(res1);

  const resGeneric = createArrayWithGeneric<boolean>(true);
  console.log(resGeneric);

  interface User {
    name: string;
    age: number;
  }

  interface User {
    name: string;
    age: number;
  }

  const resGenericObj = createArrayWithGeneric<User>({
    name: "Tanzeebul Tamim",
    age: 23,
  });

  //---------------------------------------

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple = createArrayWithTuple<boolean, string>(true, "Tanzee");
  console.log(resTuple);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "y@gmail.com",
    watch: "Apple watch",
  });
}
