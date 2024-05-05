{
  //* Spread operator
  const bros1: string[] = ["Mir", "Mizan", "Firoz"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    nextJS: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = { ...mentors1, ...mentors2 };

  console.log(bros1, mentorList);

  //* Rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend));
  };

  greetFriends("Tanzeebul", "Tamim", "Dhrubo");
}
