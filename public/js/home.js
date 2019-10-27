function hideElement() {
    var c = document.getElementById("teacherSelect");
    var d = document.getElementById("vSelect");
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none";
        // d.style.display = "none";

    }
}

hideElement();


// function hideElement() {
//     if ($(this).is(":checked"))
//         $("#teacherSelect").show();
//     else
//         $("#teacherSelect").hide();
// }
// hideElement();
// function hideElement() {
//     $(this).css("display", "none")
// };
// hideElement();

$(document).ready(function() {

    var fNameInput = $("#first-name");
    var lNameInput = $("#last-name");
    var addressInput = $("#address");
    var emailInput = $("#email");
    var cityInput = $("#city");
    var stateInput = $("#state");
    var zipInput = $("#zip");
    var contactInput = $("#contact");
    var subInput = $("#subject");
    var levelInput = $("#level");
    $("#formSubmit").on("click", handleTeacherFormSubmit);
    console.log("test");

    function handleTeacherFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!fNameInput.val().trim().trim()) {
            return;
        }
        // Calling the function and passing in the value of the name input
        newTeacher({
            firstName: fNameInput
                .val()
                .trim(),
            lastName: lNameInput
                .val()
                .trim(),
            phone: contactInput.val()
                .trim(),
            email: emailInput.val()
                .trim(),
            zipcode: zipInput.val(),
            subject: subInput.val()
                .trim(),
            level: levelInput.val()
                .trim(),
            address: addressInput.val()
                .trim(),
            city: cityInput.val()
                .trim(),
            state: stateInput.val()
                .trim()

        });
    }

    function newTeacher(event) {
        // event.preventDefault();
        console.log("test");

        $.post("/api/home", event).then(
            function() {
                window.location.href = "/added";
            }
        );


    }

});