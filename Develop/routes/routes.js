// Routes
// =============================================================
const path = require("path");

module.exports = function(app) {

    // GET route for getting all workouts
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  };
  