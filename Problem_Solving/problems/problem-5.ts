{
  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  function calculateAverageGrade(student: Student): number {
    const { grades } = student;
    const sum = grades.reduce((sum, currentValue) => sum + currentValue, 0);
    const average = sum / grades.length;
    return parseFloat(average.toFixed(2));
  }

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(averageGradeForBob);
}
