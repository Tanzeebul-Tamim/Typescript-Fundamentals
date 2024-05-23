{
  const reverseArray = <T>(arr: Array<T>): Array<T> => {
    const result: T[] = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(i);
      const element = arr[i];
      result.push(element);
    }

    return result;
  };

  const sampleInput1 = reverseArray(["apple", "banana", "cherry"]);
  console.log(sampleInput1);

  const sampleInput2 = reverseArray([10, 20, 30]);
  console.log(sampleInput2);
}
