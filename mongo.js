const mongoose = require("mongoose");
const { format } = require("path");

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/Workouts";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI, options)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

const WorkoutSchema = new mongoose.Schema({
    day: Date, 
    totalDuration: Number,
    exercises: [{
        name: String,
        type: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number,
        distance: Number,
    }]
}, { typeKey: '$type' })

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;