{
  function repeatString(inputString: string, repetition: number): string {
    let result: string = "";

    for (let i = 0; i < repetition; i++) {
      result += `${inputString}`;
    }

    return result;
  }

  const sampleInput = repeatString("Hello!", 3);
  console.log(sampleInput);
}
