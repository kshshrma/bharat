console.log("BharatVerse loaded.");
function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function signUp() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  alert(`Registered:\nName: ${name}\nEmail: ${email}`);
}

function signIn() {
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  alert(`Logged in as: ${email}`);
}

function subscribePayment() {
  const email = document.getElementById('subscribe-email').value;
  alert(`Initiating ₹199 payment for: ${email}`);
  // Razorpay or Stripe integration comes here
}

