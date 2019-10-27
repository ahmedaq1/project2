var db = require("../models");

module.exports = function(app) {
    // Get all student
    app.get("/api/home", function(req, res) {
        db.Teachers.findAll({}).then(function(dbExamples) {
            res.json(dbExamples);
        });
    });

    // Create a new Teacher
    app.post("/api/home", function(req, res) {
        db.Teachers.create(req.body).then(function(sundaySchooldb) {
            res.json(sundaySchooldb);
        });
    });

    app.get("/api/search", function(req, res) {
        console.log(req.body);
        // db.Teachers.findOne({
        //     where: {

        //     }
        // }).then(function(sundaySchooldb) {
        //     console.log(sundaySchooldb);
        //     res.json(sundaySchooldb);
        // });
    });

    app.delete("/api/home/:id", function(req, res) {
        db.Teachers.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
            res.json(dbExample);
        });
    });
};