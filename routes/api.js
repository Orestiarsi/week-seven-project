const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const User = require('../models/user');
const Activity = require('../models/activity')
const Stats = require('../models/stats');

router.get('/user', (req, res)=>{
  User.find({}).then(user=>{
    res.json(user);
  })
  .catch(y=>{
    res.send("Wrong on user get",y)
  })
});

router.post('/user', (req,res) =>{
  User.create({
    name: req.body.name,
    password: req.body.password
  })
  .then(newUser=>{
    req.status(201).json(newUser);
  })
  .catch(y=>{
    res.send("wrongggg on the user", y)
  })
});

router.get('/activity', (req, res)=>{
  Activity.find({}).then(fatburger=>{
    res.json(fatburger);
  })
  .catch(bacon=>{
    res.send("Wrong on user get",bacon)
  })
});

router.post('/activity', (req,res) =>{
  Activity.create({
    activity: req.body.activity,
    instructions: req.body.instructions
  })
  .then(newActivity=>{
    req.status(201).json(newActivity);
  })
  .catch(porkbelly=>{
    res.send("wrongggg on the user", porkbelly)
  })
});



router.get('/stats', (req, res) =>{
  Stats.find({}).then(stats=>{
    res.json(stats);
  })
  .catch(x=>{
    res.send("wrongggg", x)
  })
});

router.post('/stats', (req, res) =>{
  Stats.create({
    activity: req.body.activity,
    reps: req.body.reps,
    date: req.body.date
  })
   .then(newStat =>{
     res.status(201).json(newStat);
   })
   .catch(x=>{
     res.send("wrongggg on 2nd catch", x);
   })
});

// get /activities
// post /activities
//
// get /activities/{id}
// put /activities/{id}
//
// delete /activities/{id}
//
// post /activities/{id}/stats
//
// delete /stats/{id}


module.exports=router;

//
// GET	/activities	Show a list of all activities I am tracking, and links to their individual pages
// POST	/activities	Create a new activity for me to track.
// GET	/activities/{id}	Show information about one activity I am tracking, and give me the data I have recorded for that activity.
// PUT	/activities/{id}	Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
// DELETE	/activities/{id}	Delete one activity I am tracking. This should remove tracked data for that activity as well.
// POST	/activities/{id}/stats	Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
// DELETE	/stats/{id}	Remove tracked data for a day.
