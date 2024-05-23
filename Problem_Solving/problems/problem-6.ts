{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const isRecentBook = (book: Book): boolean => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const { publishedYear } = book;
    const yearRange = currentYear - 5;

    if (publishedYear < yearRange) {
      return false;
    } else {
      return true;
    }
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };

  const result = isRecentBook(book1);
  console.log(result);
}
