// Simple form validation for sign-in
document.getElementById('sign-in-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
      alert('Please fill in all fields');
      e.preventDefault();
    }
  });
  
  // Validation for register form
  document.getElementById('register-form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      e.preventDefault();
    }
  });
  