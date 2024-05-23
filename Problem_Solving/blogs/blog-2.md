# Blog-2

## Handling asynchronous operations using `async/await` over `callback/promise` in TypeScript.

<h4 style="text-align: justify; font-weight: 1">
<code>Async/await</code> provides a synchronous-like syntax for working with asynchronous operations. It simplifies the code structure and improving readability. It offers several advantages over traditional callback and promise-based approaches.
</h4>

<br>

## Example Usage

### Using `callback/promises`

```typescript
function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function processData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

processData();
```

<h4 style="text-align: justify; font-weight: 1">
The first example fetches data using <i>Promises</i>. It defines a function <code>fetchData</code> that returns a <i>Promise</i>. Inside the <i>Promise</i>, it fetches data and then uses <code>.then</code> and <code>.catch</code> to handle success and failure scenarios. The <code>processData</code> function uses <code>async/await</code> to call <code>fetchData</code> and waits for the <i>Promise</i> to resolve before processing the data. It includes a <code>try/catch</code> block to handle errors.
</h4>

<br>

### Using `async/await`

```typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

async function processData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

processData();
```

<h4 style="text-align: justify; font-weight: 1">
The second example achieves the same functionality but with cleaner syntax using <code>async/await</code>. The <code>fetchData</code> function is again asynchronous, but it directly uses <code>await</code> before asynchronous operations like <code>fetch</code> and <code>response.text()</code>. This pauses the function's execution until the <i>Promise</i> resolves. The <code>processData</code> function remains similar, using <code>await</code> with <code>fetchData</code> and handling errors within a <code>try/catch</code> block. <code>Async/await</code> simplifies the code by avoiding chained <i>Promises</i> and making the asynchronous flow appear more synchronous.
</h4>

<br>


### Conclusion

<h4 style="text-align: justify; font-weight: 1">
<code>Async/await</code> is generally preferred over callbacks and promises due to its readability, maintainability, and ability to write asynchronous code in a synchronous-like style.
</h4>
