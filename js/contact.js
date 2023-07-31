// Contact Form -- Email JS
// Get the form element
(function () {
   emailjs.init("2EQVNo01wxgxBTZwZ");

   // Function to handle form submission
   function sendForm(event) {
      event.preventDefault();

      // Get the form element
      const form = document.getElementById("form");

      // Create an object to get value from form field
      const templateParams = {
         from_name: document.querySelector("#name").value,
         from_email: document.querySelector("#email").value,
         message: document.querySelector("#message").value,
      };

      // Send the email using the EmailJS service
      emailjs
         .send("service_fzcqi06", "template_k5rwyia", templateParams)
         .then(function (response) {
            // Check if any of the form fields are empty
            if (
               templateParams.from_name === "" ||
               templateParams.from_email === "" ||
               templateParams.message === ""
            ) {
               // Error pop Up message
               emptyError();
               console.log("FAILED...");
               return;
            } else {
               // Suvccess pop Up message
               success();
               console.log("SUCCESS!", response.status, response.text);
               // Reset the form after successful submission
               setTimeout(() => {
                  form.reset();
               }, 5);
            }
         })
         .catch(function (error) {
            console.log("FAILED...", error);
         });
   }

   // Attach event listener to the form
   document.getElementById("form").addEventListener("submit", sendForm);
})();

// Sweet Alert Integration
// Failed message for empty fields
function emptyError() {
   swal({
      title: "Sorry boo...",
      text: "Fields cannot be empty",
      icon: "error",
   });
}

// Success message after email submission
function success() {
   swal({
      title: "Email sent successfully",
      text: "I'll try to reply within 24 hours",
      icon: "success",
   });
}
