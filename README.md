# 📚 Book-Mania

**Book-Mania** is a full-stack web application for browsing, reading, and managing eBooks.  
Users can explore books by genre, bookmark favorites, track reading progress, and download PDFs, while **admins** can upload new books and manage the library.

---

## 🚀 Features

### 👤 User Features
- 📖 **Browse Books**: View categorized carousels (Popular, Fiction, Non-Fiction)
- 📘 **Book Details**: See title, author, description, ratings, and reviews
- 📥 **Download eBooks**: Secure PDF downloads via AWS S3 pre-signed URLs
- ⭐ **Bookmark Books**: Save favorite books to "My Library"
- 🔍 **Search Books**: Filter books by title or genre
- 🎯 **Recommendations**: Personalized suggestions based on reading history
- 📊 **Reading Progress**: Update and track reading progress
- 🌙 **Dark Mode**: Toggle light/dark themes

### 🛠 Admin Features
- ➕ **Add Books**: Upload books with covers, PDFs, and metadata
- 📊 **Dashboard**: View book stats with charts and analytics
- 🔒 **Authorization**: Admin-only routes and controls

---

## 🧱 Tech Stack

### Frontend
- ⚛️ React + TypeScript
- 🧠 Redux Toolkit + RTK Query
- 🔀 React Router
- 🖼 React-Slick (carousels), React Icons
- 📊 Chart.js (admin analytics)
- 🎨 Tailwind CSS (modern responsive UI)
- ⚡ Vite (build tool)

### Backend
- 🟢 Node.js + Express (RESTful API)
- 🍃 MongoDB + Mongoose (NoSQL database)
- ☁️ AWS S3 (file storage)
- 🔐 JWT Authentication
- 📥 Formidable (file uploads)
- 🧰 Custom middlewares and async handlers

### Dev Tools
- 🧪 ESLint + Prettier (linting/formatting)
- 🧾 Git + GitHub (version control)

---

## 📁 Project Structure Overview 

```
Book-Mania/
├── Frontend/                  # Frontend (React)
│   ├── src/
│   │   ├── components/      # UI components  
│   │   ├── redux/           # Redux slices and APIs
│   │   ├── pages/           # Pages 
│   │   └── constants/       # Static config 
├── backend/                  # Backend 
│   ├── controllers/         # Logic handlers 
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routes
│   ├── utils/               # Utilities 
│   └── middlewares/         
├── .env                     # Environment variables
├── README.md                # Project info
└── package.json             # Dependencies
```

---

## ⚙️ Getting Started

### ✅ Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- AWS account with S3 bucket
- Git

### 🧩 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/Book-Mania.git
cd Book-Mania

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

---

### 🔐 Environment Variables

#### Sample `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/Book-Mania
JWT_SECRET=your-jwt-secret
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET_NAME=your-bucket-name
```

---

### ▶️ Run the Application

```bash
# Start MongoDB (if local)
mongod

# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

- Frontend: http://localhost:3000  || Your Frontend port
- Backend: http://localhost:5000 || Your Backend port

---





## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to GitHub: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact
Have feedback or questions?  

Open an issue on [GitHub](https://github.com/your-username/Book-Mania/issues)

---

**Happy reading with Book-Mania!** 📚✨