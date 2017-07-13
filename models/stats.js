const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  activity: { type: String,},
  reps: { type: Number,},
  date: { type: Date,}
})

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;
