# Blog-1

## The significance of _union_ and _intersection_ types in Typescript

<h4 style="text-align: justify; font-weight: 1">
<i>Union</i> and <i>Intersection</i> types are powerful tools/features provided by typescript. It enables us to declare complex type structures. It also helps maintain code more easily and enhances readability by reducing code repetition and makes the complex types reusable declaring only once. Then they can be used anywhere throughout a whole application without the necessity of redeclare repetitive code a. It enhances the creation of more precise type definitions which ensures better type safety and enhances code clarity.
</h4>

<br>

### Union Types

<h4 style="text-align: justify; font-weight: 1">
<i>Union</i> types are used to specify more than one possible types for a particular variable or a type alias. Among the specified possible types, one type is assigned to that particular variable or type alias. They can be compared to the logical OR operator "||", which is used for values, but the union type "|" is applicable only for types.
</h4>

### Example Usage

```typescript
type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): number {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return parseFloat(param1.toString() + param2.toString());
  }
}
```

<h4 style="text-align: justify; font-weight: 1">
In this example, we have specified the type <code>Alphanumeric</code> with two possible data types, <code>string</code> and <code>number</code>. It allows us to create variables which only accepts <code>string</code> and <code>number</code> as data types.
</h4>

<br>

### Intersection Types

<h4 style="text-align: justify; font-weight: 1">
<i>Intersection</i> types are used to extend or merge multiple types into a single type, allowing them to be used as a distinct separate type that includes all the types from the previously existing type. 
</h4>

### Example Usage

```typescript
interface User {
  username: string;
  id: number;
  password: string;
  role: "Student" | "Teacher";
}

interface Student {
  name: string;
  roll: number;
  grade: number;
  section: "A" | "B" | "C" | "D";
}

type StudentUser = User & Student;

const student: StudentUser = {
  name: "Ronald",
  roll: "4087",
  grade: 12,
  section: "C",
  username: "ronald2000",
  id: 23301265,
  password: "MyPassword123",
  role: "Student",
};
```

<h4 style="text-align: justify; font-weight: 1">
In this example, we have two interfaces <code>User</code> and <code>Student</code>. The <code>StudentUser</code> is created using an intersection of <code>User</code> and <code>Student</code>. This allows us to create objects that have properties from both interfaces.
</h4>
