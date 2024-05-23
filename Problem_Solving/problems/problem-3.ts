{
  function filterEvenNumbers(inputArr: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < inputArr.length; i++) {
      const element = inputArr[i];

      if (element % 2 === 0) {
        result.push(element);
      }
    }

    return result;
  }

  const sampleInput = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
  console.log(sampleInput);
}
