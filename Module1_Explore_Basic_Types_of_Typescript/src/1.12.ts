{
  //* Nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName("Persian");
  searchName(null);

  //* Unknown types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The converted speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [valueInNumber, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
      console.log(`The converted speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong input");
    }
  };

  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond("1000 kmh^-1");

  //* Never type
  function ThrowError(message: string): never {
    throw new Error(message);
  }

  ThrowError("জীবন বড় প্যারাময়");
}
