const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [
        true,
        "Enter your name...",
      ],
    },
    NIC: {
      type: String,
      required: [true, "Enter your NIC number"],
    },
    DateOfBirth: {
      type: Date,
      required: [true, "Enter your date of birth"],
    },
    Address: {
      type: String,
      required: [true, "Enter your Address"],
    },
    Email: {
      type: String,
      required: [
        true,
        "Please enter your email",
      ],
      unique: true,
      lowercase: true,
      uppercase:true,
      validate: [validator.isEmail, "Please enter a valid email..."],
    },
    Role: {
      type: String,
      enum: ["patient"],
      default: "patient",
    },
    Password: {
      type: String,
      required: [true, "Please choose a password..."],
      minlength: 8,
      select: false,
    },
    PasswordConfirm: {
      type: String,
      required: [true, "Please confirm your password...."],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not the same..",
      },
    }
}
)
