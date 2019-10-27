var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index", { msg: "Welcome!" });
    });
    app.get("/login", function(req, res) {
        res.render("login", { invalidLoginCredentials: true, msg: "Invalid login credentials. Please try again." });
    });
    app.get("/home", function(req, res) {
        res.render("home", { title: 'Home' });
    });
    app.get("/added", function(req, res) {
        res.render("added", { title: 'Add form' });
    });

    app.get("/search", function(req, res) {
        res.render("search", { title: 'search' });
    });




    // Load example page and pass in an example by id
    // app.get("/example/:id", function(req, res) {
    //     db.Student.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //         res.render("example", {
    //             example: dbExample
    //         });
    //     });
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};