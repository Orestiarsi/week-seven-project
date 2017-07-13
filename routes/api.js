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
    res.status(201).json(newUser);
  })
  .catch(y=>{
    res.send("wrongggg on the user", y)
  })
});


// don't think i need this since i have activity on my stats schema
//
// router.get('/activity', (req, res)=>{
//   Activity.find({}).then(fatburger=>{
//     res.json(fatburger);
//   })
//   .catch(bacon=>{
//     res.send("Wrong on user get",bacon)
//   })
// });
//
// router.post('/activity', (req,res) =>{
//   Activity.create({
//     activity: req.body.activity,
//     instructions: req.body.instructions
//   })
//   .then(newActivity=>{
//     res.status(201).json(newActivity);
//   })
//   .catch(porkbelly=>{
//     res.send("wrongggg on the user", porkbelly)
//   })
// });

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

router.put('/stats/:activity_id', (req, res) =>{
  Stats.findOneAndUpdate({
         activity: req.body.activity,
         reps: req.body.reps,
  }).then(newStat =>{
     res.status(201).json(newStat);
   })
   .catch(x=>{
     res.send("wrongggg on 2nd catch", x);
   })
});

router.delete('/stats/:activity_id', (req, res) =>{
  Stats.findOneAndRemove({
         activity: req.body.activity,
         reps: req.body.reps,
  }).then(newStat =>{
     res.status(201).json(newStat);
   })
   .catch(x=>{
     res.send("wrongggg on 2nd catch", x);
   })
});

module.exports=router;
