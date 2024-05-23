{
  const findLargestNumber = (numArr: number[]): number => {
    let result: number = numArr[0];

    for (let i = 0; i < numArr.length; i++) {
      const element = numArr[i];

      if (element > result) {
        result = element;
      }
    }

    return result;
  };

  const sampleInput = findLargestNumber([10, 5, 8, 20, 3]);
  console.log(sampleInput);
}
