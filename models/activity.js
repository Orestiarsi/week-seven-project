const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  activity: {type: String},
  instructions:{type: String},
})

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
