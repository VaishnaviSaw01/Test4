# Test4

This project contains multiple backend problems implemented using:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Express Session
- Cookie Parser

---

## 📂 Project Structure

```
Test4/
│
├── Problem1.js  → CRUD using static array
├── Problem2.js  → Middleware (Logging + Validation)
├── Problem3.js  → Visit counter using Cookies
├── Problem4.js  → Role-based Access Control using Session
├── Problem5.js  → MongoDB CRUD Operations
├── package.json
└── README.md
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/VaishnaviSaw01/Test4.git
cd Test4
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

Run any problem individually:

```bash
npm run start:p1
npm run start:p2
npm run start:p3
npm run start:p4
npm run start:p5
```

---

## 🧪 API Endpoints

### 🔹 Problem 1 – Student CRUD (Static Data)

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /students | Create student |
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| PUT | /students/:id | Update student |
| DELETE | /students/:id | Delete student |

---

### 🔹 Problem 2 – Middleware Implementation

Features:
- Custom Logging Middleware
- Custom Validation Middleware
- Proper use of `next()` function
- Validation for required fields before creating student

---

### 🔹 Problem 3 – Visit Counter

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /visit | Increment visit count |
| GET | /reset | Reset visit count |

---

### 🔹 Problem 4 – Role Based Access

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /login | Login as Admin/Client |
| GET | /dashboard | Access dashboard |
| GET | /logout | Logout |

---

### 🔹 Problem 5 – Product CRUD (MongoDB)

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /products | Get all products |
| POST | /products | Create product |
| PUT | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

---

## 🌍 MongoDB Setup

1. Create MongoDB Atlas cluster
2. Add database user
3. Allow network access (0.0.0.0/0)
4. Add connection string inside Problem5.js

---

## ⚠️ Important Notes

- node_modules is ignored
- Use your own MongoDB credentials
- Do not expose database passwords publicly

---

## 👨‍💻 Author

Vaishnavi
