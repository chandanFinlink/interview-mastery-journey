const calculateTotal = (price: number, tax: number): number => {
  return price + tax;
};

// -------------- interface ---------------

interface User {
  id: number; // lowercase
  name: string; // lowercase
  email: string; // lowercase
  role?: string; // Added the '?' here to make it optional, just in case a user doesn't have a role yet!
}

const currentUser: User = {
  id: 1232,
  name: "chandan kumar",
  email: "test@gmail.com",
  role: "Admin",
};

const printUserProfile = (user: User) => {
  console.log(user);
};

// printUserProfile(currentUser);

const userList: User[] = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" },
];

enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  CUSTOMER = "CUSTOMER",
}

enum ProjectStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

interface Project {
  id: number;
  title: string;
  status: ProjectStatus;
}

const projectDashboard: Project[] = [
  {
    id: 123123,
    title: "Development project",
    status: ProjectStatus.PENDING,
  },
];

// A function to extract completed tasks safely
const getCompletedProjects = (projects: Project[]): Project[] => {
  return projects.filter(
    (project) => project.status === ProjectStatus.COMPLETED,
  );
};

// Test your function out!
const completedList = getCompletedProjects(projectDashboard);
// console.log("Completed Projects:", completedList);

const wrapWithTimestamp = <T>(input: T) => {
  return { timeStamp: Date.now(), content: input };
};

// console.log(wrapWithTimestamp(787898));

/*

      Let's switch tracks to your fullstack-development folder. Today, we are covering Union Types, Intersection Types, and Type Guards. These tools let you handle complex API data payloads without letting bugs slip through.

      1. Union Types (|)
      A Union type allows a variable to hold more than one specific type of data. Think of it as a logical OR.

      TypeScript
      // status can ONLY be one of these three literal strings
      let systemStatus: "loading" | "success" | "error"; 
      2. Intersection Types (&)
      An Intersection type combines multiple interfaces into one. Think of it as a logical AND. This is highly useful for extending data shapes (like adding database audit fields to a regular data model).

      TypeScript
      interface Timestamped {
        createdAt: Date;
      }

      interface User {
        id: number;
        name: string;
      }

      // FullUser now has ALL properties: id, name, and createdAt
      type FullUser = User & Timestamped;
      3. Type Guards (typeof / in)
      When a function accepts a Union type, TypeScript won't let you blindly treat the variable as one specific type without checking first. You must "narrow" the type down using a conditional check called a Type Guard.

      TypeScript
      const processId = (id: string | number) => {
        if (typeof id === "string") {
          // Inside this block, TypeScript knows 'id' is definitely a string
          console.log(id.toUpperCase()); 
        } else {
          // Inside this block, TypeScript knows 'id' is definitely a number
          console.log(id.toFixed(2));
        }
      };
*/

interface PaymentSuccess {
  transactionId: string;
  amount: number;
}

interface PaymentFailure {
  reason: string;
  errorCode: number;
}

type PaymentResponse = PaymentSuccess | PaymentFailure;

const handlePaymentResponse = (response: PaymentResponse) => {
  if ("transactionId" in response) {
    return `Payment of ${response.amount} succeeded with ID ${response.transactionId}`;
  } else {
    return `Payment failed: ${response.reason} (Error Code: ${response.errorCode})`;
  }
};

console.log(handlePaymentResponse({ transactionId: "abc123", amount: 100 }));
console.log(
  handlePaymentResponse({ reason: "Insufficient funds", errorCode: 402 }),
);
