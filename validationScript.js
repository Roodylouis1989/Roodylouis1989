document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("validationForm");
  const inputField = document.getElementById("inputField");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission

      const inputValue = inputField.value;
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;

      if (alphanumericPattern.test(inputValue)) {
          message.textContent = "Input is valid. Form submitted successfully!";
          message.style.color = "green";
      } else {
          message.textContent = "Error: Please enter only alphanumeric characters.";
          message.style.color = "red";
      }
  });
});
