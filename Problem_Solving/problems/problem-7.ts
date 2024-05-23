{
  function logString(inputValue: unknown): void {
    if (typeof inputValue === "string") {
      console.log(inputValue);
    } else {
      console.log("Input is not a string");
    }
  }

  logString("Hello, TypeScript!");
  logString(42);
}
