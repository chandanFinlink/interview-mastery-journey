const calculateTotal = (price: number, tax: number): number => {
  return price + tax;
};

// -------------- interface ---------------

interface User {
  id: number;      // lowercase
  name: string;    // lowercase
  email: string;   // lowercase
  role?: string;   // Added the '?' here to make it optional, just in case a user doesn't have a role yet!
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