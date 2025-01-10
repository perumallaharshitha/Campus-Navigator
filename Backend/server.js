const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors');

dotenv.config();
const CampyModel = require("./middlewear/tokenVerifier");

const app = express();
app.use(express.json());
app.use(cors(origin = '*'));

const { MongoClient } = require("mongodb");
const { mongo, default: mongoose } = require("mongoose");
const uri = process.env.MONGO_URL;
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.post('/register', async (req, res) => {
    CampyModel.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        res.json(error);
    });
});

app.post('/login', async (req, res) => {
  CampyModel.findOne({username: req.body.username})
  .then((data) => {
      if (data) {
          console.log('Found user:', data);
          if (data.password === req.body.password) {
              res.json("Login Success");
          } else {
              res.json("Invalid password");
          }
      } else {
          res.json("User not found");
      }
  })
  .catch((error) => {
      res.json(error);
  });
});


app.listen(process.env.PORT, () => {
  console.log("Server started");
});

