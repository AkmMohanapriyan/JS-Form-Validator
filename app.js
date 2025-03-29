// =============== JavaScript for Form Validation ===============

//  Get Form Elements by ID
const regForm = document.getElementById('registerForm');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const strengthBar = document.getElementById('strength');
const btn = document.getElementById("SHBtn");

// =============== Event Listeners ===============

// Form Submit Event
regForm.addEventListener('submit', function (e) {
    e.preventDefault();

        if (validateForm()) {
            saveToLocal();
            window.alert("Your Registration Succesfull!");
        } else {
            scrollToFirstError();
        }

});

// Password Input Event (for strength meter)

    // Call calculateStrength() and update the strength bar here
    passwordField.addEventListener('input', function() {
        const value = this.value;
        let strength = 0;
        
        if (value.length >= 8) strength++;
        if (/[A-Z]/.test(value)) strength++;
        if (/[0-9]/.test(value)) strength++;
        if (/[!@#$%^&*]/.test(value)) strength++;

        switch(strength) {
            case 0:
            case 1:
                strengthMeter.style.width = '33%';
                strengthMeter.style.background = 'red';
                strengthText.textContent = 'Weak';
                break;
            case 2:
            case 3:
                strengthMeter.style.width = '66%';
                strengthMeter.style.background = 'orange';
                strengthText.textContent = 'Medium';
                break;
            case 4:
                strengthMeter.style.width = '100%';
                strengthMeter.style.background = 'green';
                strengthText.textContent = 'Strong';
                break;
        }
    });


// Toggle Password Show/Hide

function ShowHidePW() {
    var PW = document.getElementById("password");
    if (PW.type === "password") {
      PW.type = "text";
      document.getElementById("SHBtn").value = "Hide";

    } else {
      PW.type = "password";
      document.getElementById("SHBtn").value = "Show";
    }
  }
  
  function ShowHideCPW() {
    var PW = document.getElementById("confirmPassword");
    if (PW.type === "password") {
      PW.type = "text";
      document.getElementById("SHBtn1").value = "Hide";

    } else {
      PW.type = "password";
      document.getElementById("SHBtn1").value = "Show";
    }
  }


// Function to Validate All Fields
function validateForm() {
    // Validate username, email, password, confirm password
    // Use the check() function for each
    // Display success message if all valid
}

// Function to Validate Individual Field
function check(value, id, regex, message) {
    // If regex fails show error using setError()
    // Else clear error using clearError()
}

// Function to Calculate Password Strength
function calculateStrength(password) {
    // Return an object like { percent: 75, color: 'orange' }
}

// Function to Set Error Message
function setError(id, message) {
    // Show error message and apply red border
}

// Function to Clear Error Message
function clearError(id) {
    // Clear error message and apply green border
}

// Smooth Scroll to First Invalid Field
function scrollToFirstError() {
    // Scroll smoothly to the first input with invalid class
}

//   Save to LocalStorage
function saveToLocal() {
    // Save username and email to localStorage
}