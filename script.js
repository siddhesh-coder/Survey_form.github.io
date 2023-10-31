document.addEventListener("DOMContentLoaded", function() {
  //variables
    const form = document.getElementById("surveyForm");
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");

    //submission
    submitButton.addEventListener("click", function() {
      if (form.checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelectorAll('input[type="checkbox"]:checked');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        let genderString = '';
        gender.forEach(function(checkbox) {
          genderString += checkbox.id + ', ';
        });
        genderString = genderString.slice(0, -2);

        // popup 
        alert( `Survey Results:
                First Name: ${firstName}
                Last Name: ${lastName}
                Date of Birth: ${dob}
                Country: ${country}
                Gender: ${genderString}
                Profession: ${profession}
                Email: ${email}
                Mobile Number: ${mobile}`);

        form.reset(); //by clicking ok it will reset the form
      } else {
        alert("Form is not valid. Please check your inputs."); //if you submit empty form then this popup will rise
      }
    });

    //reset button 
    resetButton.addEventListener("click", function() {
      form.reset();
    });
  });