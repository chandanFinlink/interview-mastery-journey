"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotal = (price, tax) => {
    return price + tax;
};
const currentUser = {
    id: 1232,
    name: "chandan kumar",
    email: "test@gmail.com",
    role: "Admin",
};
const printUserProfile = (user) => {
    console.log(user);
};
printUserProfile(currentUser);
//# sourceMappingURL=index.js.map