const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      typeof: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    amount: {
      typeof: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    type: {
      typeof: String,
      default: "income",
    },
    date: {
      typeof: Date,
      required: true,
    },
    category: {
      typeof: String,
      required: true,
      trim: true,
    },
    description: {
      typeof: String,
      required: true,
      maxLength: 20,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Income' , IncomeSchema);