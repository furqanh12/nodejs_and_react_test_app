const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: /.+\@.+\..+/,
    },
    education: {
      type: String,
      required: [true, "Education information is required"],
    },
    job_name: {
      type: String,
      required: [true, "Job name is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
