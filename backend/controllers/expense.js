const ExpenseSchema = require("../models/ExpenseModel.js");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !description || !date) {
      return res.status(404).json({
        message: "All fields are required",
      });
    }
    if (amount < 0 || !amount === "number") {
      return res.status(404).json({
        message: "Amount must be a positive number",
      });
    }
    await income.save();
    res.status(200).json({
      message: "Income saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "server eroor" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    // sort according to the latest date
    const incomes = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json({
      incomes
    });
  } catch (error) {
    res.status(500).json({
        message : 'server eroor in getting income'
    })
  }
};

exports.deleteExpense = async (req, res) => {
  
    const {id} = req.params;
    console.log(id)
    ExpenseSchema.findByIdAndDelete({_id : id}).then((income)=>{
        res.status(200).json({message : "Income Deleted"})
    }).catch((error) => {
        console.log(error)
        res.status(500).json({message : "Server eroor in deleting income"})
    })

  };

