{
  //* Basic promise
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  const result = getToDo();
  console.log(result);

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  //* Calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };

  showData();
}
