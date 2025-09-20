require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const path = require("path");

// Import routes
const supplierRoutes = require("./routes/supplierRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/auth");

// Import middleware
const { setUserInfo } = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key-change-this",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
      touchAfter: 24 * 3600,
    }),
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

// Flash messages
app.use(flash());

// Set user info for all views
app.use(setUserInfo);

// Routes
app.get("/", async (req, res) => {
  try {
    const Product = require("./models/Product");
    const Supplier = require("./models/Supplier");

    // Get query parameters for filtering and searching
    const { supplier, search } = req.query;

    // Build query for products
    let productQuery = {};
    if (search) {
      productQuery.name = { $regex: search, $options: "i" };
    }

    // Get products and suppliers
    let products = await Product.find(productQuery).populate("supplierId");
    const suppliers = await Supplier.find().sort({ name: 1 });

    // Filter by supplier if specified
    if (supplier) {
      products = products.filter(
        (product) =>
          product.supplierId && product.supplierId._id.toString() === supplier
      );
    }

    res.render("index", {
      title: "Product Management System",
      products,
      suppliers,
      selectedSupplier: supplier || "",
      searchTerm: search || "",
    });
  } catch (error) {
    console.error("Error loading homepage:", error);
    res.render("index", {
      title: "Product Management System",
      products: [],
      suppliers: [],
      selectedSupplier: "",
      searchTerm: "",
      error: "Error loading data",
    });
  }
});

app.use("/auth", authRoutes);
app.use("/suppliers", supplierRoutes);
app.use("/products", productRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render("error", {
    title: "Page Not Found",
    message: "The page you are looking for does not exist.",
    error: { status: 404 },
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).render("error", {
    title: "Error",
    message: err.message || "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
