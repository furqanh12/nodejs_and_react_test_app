const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question text is required"],
    },
    correct_answer: {
      type: String,
      required: [true, "Correct answer is required"],
    },
    incorrect_answers: {
      type: [String],
      required: [true, "At least one incorrect answer is required"],
      validate: {
        validator: (value) => value.length > 0,
        message: "Incorrect answers must be an array with at least one element",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);
