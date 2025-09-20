# ProductSupplierAuth - Product & Supplier Management System

A full-featured web application for managing products and suppliers with user authentication, built using Node.js, Express, MongoDB, and EJS templating engine following the MVC architecture pattern.

![Node.js](https://img.shields.io/badge/Node.js-22%2B-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-5-blue?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8-brightgreen?logo=mongodb)
![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)

---

## 📑 Table of Contents

- [✨ Features](#features)
- [🖥️ System Requirements](#system-requirements)
- [🛠️ Technologies Used](#technologies-used)
- [📁 Project Structure](#project-structure)
- [📡 API Endpoints](#api-endpoints)
- [⚡ Installation](#installation)
- [⚙️ Configuration](#configuration)
- [🚀 Usage](#usage)
- [🔐 Authentication Flow](#authentication-flow)
- [🎨 UI Features](#ui-features)
- [🗂️ Database Models](#database-models)
- [👨‍💻 Development](#development)
- [📞 Support](#support)
- [📝 License](#license)

---

## ✨ Features

### 🔐 Authentication & Authorization

- **User Registration**: Secure user account creation with bcrypt password hashing
- **User Login/Logout**: Session-based authentication system
- **Protected Routes**: Access control for authenticated users only
- **Session Management**: Secure session handling with MongoDB store

### 📦 Product Management

- **CRUD Operations**: Create, Read, Update, Delete products
- **Product Details**: Name, price, quantity, and supplier association
- **Product Listing**: View all products with supplier information
- **Search & Filter**: Find products by various criteria

### 🏢 Supplier Management

- **Supplier CRUD**: Complete supplier management system
- **Supplier Details**: Name, contact information, and address
- **Product Association**: Link products to their respective suppliers
- **Supplier Analytics**: Track supplier performance and metrics

### 🎨 User Interface

- **Responsive Design**: Mobile-first responsive web design
- **Modern UI**: Clean and intuitive user interface with Bootstrap
- **Dashboard**: Comprehensive overview of products and suppliers
- **Interactive Elements**: Smooth animations and transitions

---

## 🖥️ System Requirements

- **Node.js** (v22 or higher)
- **MongoDB** (v5 or higher)
- **npm** or **yarn** package manager
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

---

## 🛠️ Technologies Used

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling library
- **bcryptjs** - Password hashing library
- **express-session** - Session middleware
- **connect-mongo** - MongoDB session store

### Frontend

- **EJS** - Embedded JavaScript templating
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **Custom CSS** - Additional styling

### Development Tools

- **nodemon** - Development server with auto-reload
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
ProductSupplierAuth/
├── models/
│   ├── User.js              # User model with authentication
│   ├── Product.js           # Product model
│   └── Supplier.js          # Supplier model
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── products.js          # Product management routes
│   └── suppliers.js         # Supplier management routes
├── views/
│   ├── partials/            # Reusable EJS components
│   ├── products/            # Product-related views
│   ├── suppliers/           # Supplier-related views
│   ├── auth/                # Authentication views
│   └── index.ejs            # Main dashboard
├── public/
│   ├── css/                 # Stylesheets
│   ├── js/                  # Client-side JavaScript
│   └── images/              # Static images
├── middleware/
│   └── auth.js              # Authentication middleware
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
├── app.js                  # Main application file
├── seed.js                 # Database seeding script
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

---

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint         | Description       | Auth Required |
| ------ | ---------------- | ----------------- | ------------- |
| `GET`  | `/auth/register` | Registration page | ❌            |
| `POST` | `/auth/register` | Register new user | ❌            |
| `GET`  | `/auth/login`    | Login page        | ❌            |
| `POST` | `/auth/login`    | User login        | ❌            |
| `POST` | `/auth/logout`   | User logout       | ✅            |

### Product Routes

| Method   | Endpoint             | Description        | Auth Required |
| -------- | -------------------- | ------------------ | ------------- |
| `GET`    | `/products`          | List all products  | ✅            |
| `GET`    | `/products/new`      | New product form   | ✅            |
| `POST`   | `/products`          | Create new product | ✅            |
| `GET`    | `/products/:id`      | Product details    | ✅            |
| `GET`    | `/products/:id/edit` | Edit product form  | ✅            |
| `PUT`    | `/products/:id`      | Update product     | ✅            |
| `DELETE` | `/products/:id`      | Delete product     | ✅            |

### Supplier Routes

| Method   | Endpoint              | Description         | Auth Required |
| -------- | --------------------- | ------------------- | ------------- |
| `GET`    | `/suppliers`          | List all suppliers  | ✅            |
| `GET`    | `/suppliers/new`      | New supplier form   | ✅            |
| `POST`   | `/suppliers`          | Create new supplier | ✅            |
| `GET`    | `/suppliers/:id`      | Supplier details    | ✅            |
| `GET`    | `/suppliers/:id/edit` | Edit supplier form  | ✅            |
| `PUT`    | `/suppliers/:id`      | Update supplier     | ✅            |
| `DELETE` | `/suppliers/:id`      | Delete supplier     | ✅            |

---

## ⚡ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ProductSupplierAuth.git
   cd ProductSupplierAuth
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

---

## ⚙️ Configuration

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/productsupplierauth

# Session Configuration
SESSION_SECRET=your_super_secure_secret_key_here

# Application Configuration
PORT=3000
NODE_ENV=development

# Additional Configuration
BASE_URL=http://localhost:3000
```

**Important Security Notes:**

- Replace `your_super_secure_secret_key_here` with a strong, random string
- Use environment-specific MongoDB URIs for different environments
- Set `NODE_ENV=production` for production deployments

---

## 🚀 Usage

### Development Mode

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Access the application**
   - Open your browser to `http://localhost:3000`
   - You'll see the main dashboard

### Production Mode

1. **Start the production server**
   ```bash
   npm start
   ```

### Database Seeding

To populate the database with sample data:

```bash
npm run seed
```

This will create:

- Sample user account (admin/admin123)
- Sample suppliers
- Sample products with supplier associations

---

## 🔐 Authentication Flow

### User Registration

1. User provides username, email, password, and phone
2. Server validates input data
3. Password is hashed using bcrypt (10 salt rounds)
4. User data is saved to MongoDB
5. Success message is displayed

### User Login

1. User provides username and password
2. Server validates credentials
3. Password is compared with hashed version
4. Session is created with user information
5. User is redirected to dashboard

### Session Management

- Sessions stored in MongoDB using connect-mongo
- Session cookies configured for security:
  - `httpOnly: true` - Prevents XSS attacks
  - `secure: false` - Set to `true` in production with HTTPS
  - `maxAge: 24 hours` - Session expires after 24 hours

### Protected Routes

- Middleware checks for valid session
- User information retrieved from session
- Access granted or denied based on authentication status

---

## 🎨 UI Features

### Dashboard

- **Statistics Cards**: Display total products and suppliers
- **Quick Actions**: Easy access to add new items
- **Modern Design**: Glass morphism effects and smooth animations
- **Responsive Layout**: Works on desktop, tablet, and mobile

### Forms

- **Validation**: Client-side and server-side validation
- **User Feedback**: Success and error messages
- **Auto-complete**: Enhanced user experience
- **File Upload**: Support for product images (if implemented)

### Navigation

- **Responsive Navbar**: Collapses on mobile devices
- **User Menu**: Profile and logout options
- **Breadcrumbs**: Easy navigation tracking
- **Search Bar**: Quick search functionality

---

## 🗂️ Database Models

### User Model

```javascript
{
  username: String (required, unique, 3-30 chars),
  email: String (required, unique, valid email),
  password: String (required, hashed, min 6 chars),
  phone: String (required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

### Supplier Model

```javascript
{
  name: String (required),
  address: String (required),
  phone: String (required),
  email: String (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

### Product Model

```javascript
{
  name: String (required),
  price: Number (required, min 0),
  quantity: Number (required, min 0),
  supplierID: ObjectId (required, ref: 'Supplier'),
  description: String (optional),
  category: String (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

---

## 👨‍💻 Development

### Available Scripts

```bash
# Start development server with nodemon
npm run dev

# Start production server
npm start

# Seed database with sample data
npm run seed

# Run tests (if implemented)
npm test
```

### Code Structure Guidelines

- **Models**: Define database schemas and business logic
- **Routes**: Handle HTTP requests and responses
- **Views**: EJS templates for rendering HTML
- **Middleware**: Custom middleware for authentication and validation
- **Public**: Static assets (CSS, JS, images)

### Best Practices

- Use async/await for database operations
- Implement proper error handling
- Validate all user inputs
- Use environment variables for configuration
- Follow RESTful API conventions

---

## 🛡️ Security Features

### Password Security

- Passwords hashed using bcryptjs with 10 salt rounds
- Never store plain text passwords
- Secure password comparison during authentication

### Session Security

- Sessions stored securely in MongoDB
- HTTP-only cookies prevent XSS attacks
- Secure cookie settings for production
- Session expiration handling

### Input Validation

- Server-side validation for all inputs
- Sanitization to prevent injection attacks
- Proper error handling without exposing system details
- CSRF protection (if implemented)

---

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify database permissions

2. **Session Issues**

   - Clear browser cookies
   - Check session secret configuration
   - Verify MongoDB session store connection

3. **Port Already in Use**

   - Change port in `.env` file
   - Kill existing processes on the port
   - Use different port for development

4. **Dependencies Issues**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility
   - Update npm to latest version

---

## 📞 Support

If you encounter any issues or have questions:

- 📧 **Email**: [khang.ng243@gmail.com](mailto:khang.ng243@gmail.com)
- 🐙 **GitHub Issues**: [Create an issue](https://github.com/LuxKaito/ProductSupplierAuth/issues)
- 📚 **Documentation**: Check the code comments and this README
- 💬 **Community**: Join our discussion forums

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📋 Future Enhancements

- [ ] API documentation with Swagger
- [ ] Product image upload and management
- [ ] Advanced search and filtering
- [ ] Export data to CSV/PDF
- [ ] Email notifications
- [ ] Role-based access control
- [ ] Inventory tracking
- [ ] Dashboard analytics with charts
- [ ] Mobile app development
- [ ] Multi-language support

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Express.js** team for the excellent web framework
- **MongoDB** team for the powerful database solution
- **Bootstrap** team for the responsive CSS framework
- **Font Awesome** for the beautiful icons
- All contributors who have helped improve this project

---

⭐ **If you find this project useful, please give it a star!**

---

