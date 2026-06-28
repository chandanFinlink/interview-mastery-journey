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
const userList = [
    { id: 1, name: "Alice", email: "alice@test.com" },
    { id: 2, name: "Bob", email: "bob@test.com" },
];
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["CUSTOMER"] = "CUSTOMER";
})(UserRole || (UserRole = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["PENDING"] = "PENDING";
    ProjectStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ProjectStatus["COMPLETED"] = "COMPLETED";
})(ProjectStatus || (ProjectStatus = {}));
const projectDashboard = [
    {
        id: 123123,
        title: "Development project",
        status: ProjectStatus.PENDING,
    },
];
// A function to extract completed tasks safely
const getCompletedProjects = (projects) => {
    return projects.filter((project) => project.status === ProjectStatus.COMPLETED);
};
// Test your function out!
const completedList = getCompletedProjects(projectDashboard);
console.log("Completed Projects:", completedList);
//# sourceMappingURL=index.js.map