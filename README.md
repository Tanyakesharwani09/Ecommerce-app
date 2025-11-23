# Forever - Full Stack E-Commerce Project

A complete, full-stack e-commerce solution built with the **MERN Stack** (MongoDB, Express, React, Node.js). This project consists of three distinct components: a customer-facing frontend, an admin dashboard for management, and a robust backend API.

## 🔗 Live Deployments

| Component | URL | Description |
| :--- | :--- | :--- |
| **Frontend Store** | [Visit Site](https://forever-frontend1-cyan.vercel.app) | The customer-facing shopping application. |
| **Admin Panel** | [Visit Panel](https://forever-admin-panel-psi.vercel.app) | Dashboard for managing products and orders. |
| **Backend API** | [API Link](https://ecommerce-app-smoky-delta.vercel.app) | The server handling data, logic, and database connections. |

---

## 🏗️ Architecture

This project follows a service-oriented architecture:

* **Frontend (User App):** A React application where users browse products, manage their cart, and place orders.
* **Admin Panel:** A separate React application dedicated to store owners for inventory and order management.
* **Backend:** A Node.js/Express server that acts as the bridge between the frontend apps and the MongoDB database.

---

## ✨ Key Features

### 🛍️ User Frontend (Customer Experience)
* **Browsing & Filtering:** Advanced filtering by Category (Men, Women, Kids), Sub-category, and Price.
* **Product Details:** High-quality image sliders, size selection, and description tabs.
* **Shopping Cart:** Dynamic cart management with instant subtotal calculations.
* **Checkout Flow:** Secure checkout process with address capture and payment integration placeholders.
* **User Accounts:** Registration, Login, and Order History tracking.

### 🛠️ Admin Panel (Management)
* **Secure Login:** Administrator authentication to access the dashboard.
* **Add Products:** Upload product images (multi-image support), set prices, descriptions, and categorize items.
* **List Products:** View user-facing inventory and delete obsolete items.
* **Order Management:** View incoming orders and update their status (e.g., *Order Placed ➝ Packing ➝ Shipped ➝ Delivered*).

### 🔌 Backend (API & Server)
* **RESTful API:** Well-structured endpoints for Products, Users, Cart, and Orders.
* **Database:** MongoDB schema design using Mongoose for efficient data modeling.
* **Authentication:** JWT-based authentication for user security.
* **Image Storage:** Integration with Cloud storage (e.g., Cloudinary) for product asset management.
* **Payment Gateways:** Backend logic ready for Stripe or Razorpay integration.

---

## 🛠️ Tech Stack

### Frontend & Admin
* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** Context API
* **HTTP Client:** Axios

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (with Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **Image Uploads:** Multer / Cloudinary

---

## 🚀 Installation & Setup

To run the full project locally, you will need to set up the Backend, Frontend, and Admin separately.

### 1. Backend Setup

```bash
cd backend
npm install
npm start
```

### Configuration:
Create a .env file in the backend directory with the following:

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_key
JWT_SECRET=your_secret
```

### 2. Frontend Setup

```
cd frontend
npm install
npm run dev
```

### Configuration:
Create a .env file in the frontend directory:

```
VITE_BACKEND_URL=http://localhost:4000
```

### 3. Admin Panel Setup

```
cd admin
npm install
npm run dev
```

### Configuration:
Create a .env file in the admin directory:

```
VITE_BACKEND_URL=http://localhost:4000
```

## 📂 Project Structure Overview
The repository is typically organized into three main folders:

```
root/
├── backend/          # Node.js/Express Server
│   ├── config/       # DB Connection
│   ├── controllers/  # Logic for Products, Users, Orders
│   ├── models/       # Mongoose Models
│   ├── routes/       # API Routes
│   └── server.js     # Entry point
│
├── frontend/         # User React App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── context/
│
└── admin/            # Admin React App
    ├── src/
        ├── components/
        └── pages/
```

---
Made with ❤️ by **TANYA KESHARWANI** - feel free to reach out!
