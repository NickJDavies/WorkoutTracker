// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Routes
// =============================================================
module.exports = function(app, Workout) {

  let WorkoutInstance;
  // GET route for getting all workouts
  app.get("/api/workouts", function(req, res) {
    // returns all workouts
    console.log("api -- workouts get")
    // Workout.deleteMany({}, function(err, idk) {
    //   console.log(idk)
    // })
    Workout.find(function (err, Workouts) {
      console.log(Workouts)
      res.json(Workouts);
    })

    
  });

  // put route for saving new exercise to workout
  app.put("/api/workouts/:id", function(req, res) {
    console.log("api -- workouts put, ID")
    if (req.params.id === "undefined") {
      Workout.updateOne({_id: WorkoutInstance._id}, {$push: {exercises: req.body}, $set: {totalDuration: (req.body.duration + WorkoutInstance.totalDuration)}}, function (err) { if (err) throw (err)})
      res.json("task completed successfully");
    }
    else {
      Workout.updateOne({_id: req.params.id}, {$push: {exercises: req.body}, $set: {totalDuration: (req.body.duration)}})
      res.json("task completed successfully");
    }
  });

  // post route for making a new workout
  app.post("/api/workouts", function(req, res) {
    console.log("api -- workouts post");
    //creates a workout through body
    WorkoutInstance = new Workout({day: Date(), exercises: [], totalDuration: 0});
    WorkoutInstance.save(function(err) {
      if (err) throw (err);
    })
    res.json("task completed successfully");
  })

  // get route for returning workouts in a range
  app.get("/api/workouts/range", function(req, res) {
    console.log("api -- workouts get RANGE")
    //creates a workout through body
    console.log(req.body)
    Workout.find(function (err, Workouts) {
      console.log(Workouts)
      res.json(Workouts);
    })

  })
};
