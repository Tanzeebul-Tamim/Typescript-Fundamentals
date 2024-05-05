{
  //! Union type
  type TFrontEndDeveloper = "Fakibaj Developer" | "Junior Developer"; //* String literal type
  type TFullStackDeveloper = "Frontend Developer" | "Expert Developer"; //* String literal type
  type TDeveloper = TFrontEndDeveloper | TFullStackDeveloper; //* String literal type

  const newDeveloper: TFrontEndDeveloper = "Fakibaj Developer";

  type TUser = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "AB+" | "AB-";
  };

  const user1: TUser = {
    name: "Tanzeebul",
    gender: "male",
    bloodGroup: "A+",
  };
}
{
  type TFrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type TBackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type TFullstackDeveloper = TFrontendDeveloper & TBackendDeveloper;

  const fullstackDeveloper: TFullstackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
