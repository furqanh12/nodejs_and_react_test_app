const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const { body, validationResult } = require("express-validator");

router.post(
  "/questions",
  [
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
      await Question.insertMany(req.body.questions);
      res.status(201).send({ message: "Questions added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Failed to add questions" });
    }
  }
);

router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch questions" });
  }
});

module.exports = router;
