 🔐 Password Reset Backend (Node.js + Express + MongoDB)

This is the backend API for a complete authentication system with:
- Register
- Login
- Forgot Password
- Reset Password (via email using Brevo)

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Brevo (Sendinblue) Email API
- bcryptjs
- dotenv

---

## 📂 Project Structure

backend/
├── controllers/
│ └── authController.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── utils/
│ └── sendEmail.js
├── .env
├── server.js
└── package.json

yaml
Copy code

---




Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
POST	/api/auth/forgot-password	Send reset link
POST	/api/auth/reset-password/:token	Reset password

📧 Email Flow (Brevo)
User submits email in forgot password page

Backend generates token

Email with reset link is sent using Brevo

User clicks link → frontend reset page opens


Set start command:

powershell
Copy code
npm start
Deploy 🚀

✅ Status
Fully working production-ready password reset system.
