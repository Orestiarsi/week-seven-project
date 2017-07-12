const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  activity: { type: String,},
  reps: { type: Number,},
  date: { type: Number,}
})

const Stats = mongoose.model('Stats', statsSchema);


module.exports = Stats;


// one schema for user
// one for activity
// one for stats
