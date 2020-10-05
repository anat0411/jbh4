const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectID } = mongoose.Types;

const Account = new Schema(
  {
    accountNumber: { type: Number, required: true },
    operationType: { type: String, required: true }, //pull, deposit, loan
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    interest: { type: Number },
    payments: { type: Number },
  },
  {
    collection: "AccountOperations",
    timestamps: true,
  }
);
const newAccount = mongoose.model("Account", Account);

//MANULY OPERATIONS ADDED//
// newAccount.insertMany([
//   { accountNumber: 1234567890, operationType: "pull", amount: 6000 },
//   { accountNumber: 1234567890, operationType: "deposit", amount: 100 },
//   {
//     accountNumber: 1234567890,
//     operationType: "loan",
//     amount: 80,
//     interest: 0.4,
//     payments: 4,
//   },
//   { accountNumber: 012, operationType: "pull", amount: 3000 },
//   { accountNumber: 012, operationType: "deposit", amount: 300 },
//   {
//     accountNumber: 012,
//     operationType: "loan",
//     amount: 500,
//     interest: 0.7,
//     payments: 60,
//   },
// ]);

module.exports = { newAccount };
