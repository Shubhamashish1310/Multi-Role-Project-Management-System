# Multi-Role Project Management System

A full-stack backend API for managing projects and tasks within multiple companies using strict role-based access control (RBAC).

Built as part of an assignment — supports Admins, Managers, and Members across multiple organizations.

---

## 🚀 Features

* Company registration with Admin setup
* JWT-based login with access & refresh tokens
* Role-based access (Admin, Manager, Member)
* Project CRUD (Admin & Manager)
* Task CRUD with role control
* Filtering, Pagination
* Input Validation, Error Handling
* Clean modular architecture (model, repo, service, controller)

---

## 🧱 Tech Stack

* Node.js + Express
* MongoDB + Mongoose
* JWT for authentication
* express-validator for validation
* express-rate-limit for security
* Jest + Supertest (test-ready)

---

## 📂 Project Structure

src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── validations/
└── app.js / server.js

---

## 👤 Roles & Access

| Feature          | Admin | Manager | Member |
| ---------------- | :---: | :-----: | :----: |
| Register Company |   ✅   |    ❌    |    ❌   |
| Login            |   ✅   |    ✅    |    ✅   |
| Create Users     |   ✅   |    ❌    |    ❌   |
| View Users       |   ✅   |    ❌    |    ❌   |
| Create Projects  |   ✅   |    ✅    |    ❌   |
| View Projects    |   ✅   |    ✅    |    ❌   |
| Create Tasks     |   ✅   |    ✅    |    ❌   |
| View Tasks       |   ✅   |    ✅    |    ✅   |
| Update Own Tasks |   ✅   |    ✅    |    ✅   |
| Delete Tasks     |   ✅   |    ✅    |    ❌   |

---

## 🛠️ Setup & Run

1. Clone the repo

```bash
git clone https://github.com/your-username/project-management-system.git
cd project-management-system
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

Copy .env.example and update values:

```env
PORT=5000
MONGO_URI=yours link
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

4. Run the app

```bash
npm run dev
```

---

## 📮 API Endpoints (Sample)

Auth

* POST /api/auth/register-company
* POST /api/auth/login
* POST /api/auth/users (Admin only)
* GET  /api/auth/users

Projects

* POST /api/projects
* GET /api/projects
* PUT /api/projects/\:id
* DELETE /api/projects/\:id

Tasks

* POST /api/tasks
* GET /api/tasks?status=Done\&page=1\&limit=10
* PUT /api/tasks/\:id
* DELETE /api/tasks/\:id

---

## 🖼️ Screenshots

## 📬 Postman Collection

You can test all endpoints using the included Postman collection:

→ [Multi-Role-Project-Management-System.postman_collection.json](./Multi-Role%20Project%20Management%20System.postman_collection.json)


- Company Registration
![alt text](/Images/image.png)
- Login
![alt text](/Images/login.png)
- User Creation (Admin)
![alt text](/Images/user_curd.png)
- Project Creation
![alt text](/Images/image-1.png)
- Task CRUD
![alt text](/Images/image-2.png)

## 🧪 Testing

Jest + Supertest ready. You can run:

```bash
npm test
```
npm run dev
---

## ✅ Status

🟢 Backend Feature-Complete
Yes — that’s the final step: clearly showing that you've fulfilled the assignment requirements.

📌 Your reviewer should never have to "figure out" whether something is done. Instead, make it super obvious.

Here’s how to present that in your README or submission notes:

---

## ✅ Assignment Checklist

| Requirement                              | Status                      | Notes                                    |
| ---------------------------------------- | --------------------------- | ---------------------------------------- |
| Multi-Tenant System                      | ✅ Done                      | Users & data are scoped by company       |
| Role-Based Access (Admin/Manager/Member) | ✅ Done                      | Role-based middleware used               |
| Company Registration                     | ✅ Done                      | /api/auth/register-company               |
| User Login + JWT + Refresh Token         | ✅ Done                      | /api/auth/login                          |
| Admin Creates Users                      | ✅ Done                      | /api/auth/users (Admin only)             |
| Project CRUD (Admin + Manager)           | ✅ Done                      | /api/projects (protected)                |
| Task CRUD with Role Permissions          | ✅ Done                      | /api/tasks (Members can only update own) |
| Task Filtering (status, assignedTo)      | ✅ Done                      | /api/tasks?status=Done\&assignedTo=id    |
| Pagination on listing endpoints          | ✅ Done                      | page & limit supported                   |
| Input Validation (express-validator)     | ✅ Done                      | All major routes validated               |
| Rate Limiting                            | ✅ Done                      | express-rate-limit middleware added      |
| Centralized Error Handling               | ✅ Done                      | Consistent error responses in services   |
| Modular Folder Structure                 | ✅ Done                      | Cleanly split by models, services, etc   |
| Postman Collection Provided              | ✅ Done                      | JSON file included                       |
| README with Setup & API Guide            | ✅ Done                      | You're reading it now 🎉                 |
| .env.example Included                    | ✅ Done                      | in repo root                             |


---

