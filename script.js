document.addEventListener("DOMContentLoaded", function () {
  console.log("document has been loaded");
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  feedbackDiv.style.display = "block";
  form.addEventListener("submit", function (event) {
    console.log("submit botton click");
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;
    let messages = [];
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      let paragraph = "";
      for (let i = 0; i < messages.length; i++) {
        
        paragraph += messages[i];
        paragraph +="<br>"
      }
      feedbackDiv.innerHTML = `<p>${paragraph}</p>`;
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
