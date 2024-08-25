const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.use(express.json());

// POST Method Endpoint
app.post("/bfhl", (req, res) => {
  const {data} = req.body;

  const full_name = "john_doe";
  const dob = "17091999";
  const user_id = `${full_name}_${dob}`;

  const college_email_id = "john@xyz.com";
  const college_roll_number = "ABCD123";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highest_lowercase_alphabet = alphabets
      .filter((char) => char === char.toLowerCase())
      .sort().pop() || "";

  res.json({
    is_success: true,
    user_id,
    email: college_email_id,
    roll_number: college_roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
  });
});

// GET Method Endpoint
app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

exports.api = functions.https.onRequest(app);
