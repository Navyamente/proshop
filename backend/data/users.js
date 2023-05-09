import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@smthng.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jhon",
    email: "Jhon@smthng.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane",
    email: "Jane@smthng.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
