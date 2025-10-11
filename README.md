# COMP3123 – Assignment 1 (F2025)

## NAME AND STUDENT ID:
NAME- Rudramani Dhiman
STudent ID: 101502928

## Assignment Overview
This assignment implements a Node.js + Express REST API with a MongoDB Atlas backend to manage users and employees. It fulfills the specifications of Assignment 1 for COMP3123, including the required user and employees endpoints, data validation, and integration with Atlas using Mongoose.

The database name used is `comp3123_assigment1`.

---

## 🛠️ Tech Stack
- Node.js 
- Express.js
- MongoDB Atlas 
- Mongoose ODM
- bcryptjs for password hashing
- express-validator for input validation
- dotenv for environment variables
- nodemon for development

---

## 📂 Project Structure
.
├── src
│ ├── config
│ │ └── db.js
│ ├── controllers
│ │ ├── employeeController.js
│ │ └── userController.js
│ ├── middleware
│ │ └── validateRequest.js
│ ├── models
│ │ ├── Employee.js
│ │ └── User.js
│ ├── routes
│ │ ├── employeeRoutes.js
│ │ └── userRoutes.js
│ └── index.js
├── .env
├── .gitignore
├── package.json
├── README.md






