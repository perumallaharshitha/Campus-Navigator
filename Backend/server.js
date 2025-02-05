const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

dotenv.config();
const CampyModel = require("./middlewear/tokenVerifier");

const app = express();
app.use(express.json());
app.use(cors(origin = "*"));

const { MongoClient } = require("mongodb");
const { mongo, default: mongoose } = require("mongoose");
const uri = process.env.MONGO_URL;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Registration Route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password before saving to DB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new CampyModel({ username, password: hashedPassword });
    newUser.save()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json(error);
    });
});

// Login Route - Generates JWT Token
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  CampyModel.findOne({ username })
  .then((user) => {
      if (user) {
          // Compare the hashed password with the entered password
          bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) return res.status(500).json("Error comparing passwords");

              if (isMatch) {
                  // Create JWT token
                  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
                  res.json({ message: "Login Success", token });  // Send token to the client
              } else {
                  res.json("Invalid password");
              }
          });
      } else {
          res.json("User not found");
      }
  })
  .catch((error) => {
      res.json(error);
  });
});

// Logout Route - Client just clears the token (frontend side)
// Note: There's no session management here, so logging out only means client-side token removal
app.post('/logout', (req, res) => {
    // Since no server-side session exists, the client just needs to clear the token
    res.json("Logged out successfully");
    // Note: The client will need to delete the token from localStorage or cookies.
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
