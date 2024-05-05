{
  //* Mapped types
  const arrayOfNumbers: number[] = [1, 4, 5];
  // const arrayOfStrings: string[] = ["1", "4", "5"];
  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfStrings);
  //------------------------------
  type AreaNumber = {
    length: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type VolumeNumber = {
    length: number;
    width: number;
    height: number;
  };

  type ConvertToString<T> = {
    [key in keyof T]: T[key] | string;
  };

  type VolumeString = ConvertToString<VolumeNumber>;

  const volume: VolumeString = {
    height: "100",
    length: 39,
    width: 23,
  };

  //* Lookup type
  type Length = AreaNumber["length"];
}
