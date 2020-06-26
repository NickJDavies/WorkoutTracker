const mongoose = require("mongoose");
const { format } = require("path");

mongoose.connect('mongodb://localhost/Workouts', {useNewUrlParser: true});

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