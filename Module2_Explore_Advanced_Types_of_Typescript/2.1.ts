{
  //* Type assertion
  let anything: any;

  anything = "Next lever web development";
  (anything as string).split(" ");

  anything = 222;
  (anything as number).toString();

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue} gm`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm("4") as string;
  console.log(result1);

  const result2 = kgToGm(4) as number;
  console.log(result2);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.error((error as CustomError).message);
  }
}
