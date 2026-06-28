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

printUserProfile(currentUser);

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
console.log("Completed Projects:", completedList);
