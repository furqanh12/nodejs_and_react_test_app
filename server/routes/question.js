const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const { body, validationResult } = require("express-validator");

// POST: Add questions
router.post(
  "/questions",
  [
    // Validate the incoming questions
    body("questions").isArray().withMessage("Questions must be an array"),
    body("questions.*.question")
      .isString()
      .withMessage("Question must be a string"),
    body("questions.*.correct_answer")
      .isString()
      .withMessage("Correct answer must be a string"),
    body("questions.*.incorrect_answers")
      .isArray()
      .withMessage("Incorrect answers must be an array"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const questions = req.body.questions; // expecting an array of questions
      await Question.insertMany(questions);
      res.status(201).send({ message: "Questions added successfully" });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).send({ error: "Failed to add questions" });
    }
  }
);

// GET: Fetch all questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Failed to fetch questions" });
  }
});

module.exports = router;
