$(document).ready(function() {

    var fNameInput = $("#fName");
    var lNameInput = $("#lName");
    var contactInput = $("#phoneSearch");
    var subInput = $("#subjectSearch");
    var levelInput = $("#levelSearch");
    $("#teacherSearchB").on("click", handleTeacherFormSubmit);
    console.log("test");

    function handleTeacherFormSubmit(event) {
        event.preventDefault();
        var searchQuery = {};

        if (fNameInput.val().trim()) {
            searchQuery["firstName"] = fNameInput.val().trim()
        };
        if (lNameInput.val().trim()) {
            searchQuery["lastName"] = lNameInput.val().trim()
        };
        if (contactInput.val().trim()) {
            searchQuery["phone"] = contactInput.val().trim()
        };
        if (subInput.val().trim()) {
            searchQuery["subject"] = subInput.val().trim()
        };
        if (levelInput.val().trim()) {
            searchQuery["level"] = levelInput.val().trim()
        };

        searchTeacher(searchQuery);
    };

    function searchTeacher(data) {
        // event.preventDefault();
        console.log("search teacher:");
        console.log(data);

        $.get("/api/search", data).then(
            function(result) {
                console.log('Result', result);


            }
        );


    }

});