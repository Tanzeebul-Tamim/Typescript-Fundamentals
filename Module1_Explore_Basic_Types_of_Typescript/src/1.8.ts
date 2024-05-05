{
  //! Destructuring
  //* Object destructuring
  const user = {
    id: 346,
    name: {
      firstName: "Mezba",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "0171234567",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { middleName: midName }, //* Name alias "midName"
  } = user;

  console.log(contactNo, midName);

  //* Array destructuring
  const myFriends = ["Chandler", "Joey", "Ross", "Rachel", "Monica", "Phoebe"];

  const [, , bestFriend, ...rest] = myFriends;

  console.log(bestFriend);
  console.log(rest);
}
