document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the form and display area
    var form = document.getElementById("resumeform");
    var resumeDisplayElement = document.getElementById("resume-display");
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("edu").value;
        var experience = document.getElementById("exp").value;
        var skills = document.getElementById("skill").value;
        // Generate resume content dynamically
        var resumeHTML = "\n            <h2><b>Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display generated resume in the resume-display element
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error("The Resume Display Element is missing!");
        }
    });
});
