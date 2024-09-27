const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

// POST: Create a user (optional, for testing purposes)
router.post(
  "/users",
  [
    body("first_name").isString().withMessage("First name must be a string"),
    body("last_name").isString().withMessage("Last name must be a string"),
    body("phone_number")
      .isString()
      .withMessage("Phone number must be a string"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("education").isString().withMessage("Education must be a string"),
    body("job_name").isString().withMessage("Job name must be a string"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Failed to create user" });
    }
  }
);

// GET: Fetch user details by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch user" });
  }
});

module.exports = router;
