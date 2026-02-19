// Select the form
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Page reload stop

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  // Simple empty check
  if (!name || !email || !phone || !subject || !message) {
    alert("⚠️ Please fill all the fields");
    return;
  }

  // Mail body formatting
  let body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`;

  // Replace with your email
  let receiverEmail = "sivakumarmunuswamy20@gmail.com";

  // Create mailto link
  let mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open email app
  window.location.href = mailtoLink;

  // Optional: clear after open
  form.reset();
});
