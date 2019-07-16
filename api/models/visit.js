// visit.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const VisitSchema = new Schema(
  {
    _id: Number,
    visitsAmount: Number
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Visit", VisitSchema);