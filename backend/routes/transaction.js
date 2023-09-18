const router = require("express").Router();
const {
  addExpense,
  deleteExpense,
  getExpense,
} = require("../controllers/expense");
const { addIncome, getIncome, deleteIncome } = require("../controllers/income");

router.get("/", (req, res) => {
  res.send("Hello world");
});

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncome)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
