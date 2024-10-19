// Function to display the current date
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();

    // Format the date (e.g., September 21, 2024)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    // Set the formatted date with the "Today's Date:" prefix
    dateElement.textContent = `Today's Date: ${formattedDate}`;
}

function reviewFormData() {
    // Get form values
    const form = document.getElementById('registration-form');
    const firstName = form.first_name.value;
    const middleInitial = form.middle_initial.value;
    const lastName = form.last_name.value;
    const dob = form.dob.value;
    const ssn = form.ssn.value;
    const address1 = form.address1.value;
    const address2 = form.address2.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const email = form.email.value;
    const symptoms = form.symptoms.value;
    const gender = form.gender.value;
    const vaccinated = form.vaccinated.value;
    const insurance = form.insurance.value;
    const healthScale = form.health_scale.value;
    const userId = form.user_id.value;

    // Format the form data into a readable output
    let reviewData = `
        <strong>Full Name:</strong> ${firstName} ${middleInitial} ${lastName}<br>
        <strong>Date of Birth:</strong> ${dob}<br>
        <strong>Social Security:</strong> ${ssn}<br>
        <strong>Address:</strong> ${address1}, ${address2 ? address2 + ',' : ''} ${city}, ${state} ${zip}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Symptoms:</strong> ${symptoms}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Vaccinated:</strong> ${vaccinated}<br>
        <strong>Insurance:</strong> ${insurance}<br>
        <strong>Health Rating:</strong> ${healthScale}/10<br>
        <strong>Desired User ID:</strong> ${userId}<br>
    `;

    // Display the data in the review section
    const reviewOutput = document.getElementById('review-output');
    reviewOutput.innerHTML = reviewData;

    // Show the review area
    const reviewArea = document.getElementById('review-area');
    reviewArea.style.display = 'block';
}

function setDOBMaxDate() {
    const dobField = document.getElementById('dob-field');
    const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    dobField.setAttribute('max', today);
}

// Function to update the slider value dynamically
function updateSliderValue(value) {
    document.getElementById('slider-value').textContent = value;
}


// this is validating the password that the user uses
function validatePasswords() {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;
    const userId = document.querySelector('input[name="user_id"]').value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters, include uppercase, lowercase, number, and special character.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    if (password.toLowerCase().includes(userId.toLowerCase())) {
        alert('Password cannot contain or match the User ID.');
        return false;
    }

    return true; // Only return true if all validations pass
}

// Attach to form onsubmit event
document.querySelector('form').onsubmit = function(event) {
    if (!validatePasswords()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
};


window.onload = function() {
    displayCurrentDate();
    setDOBMaxDate();
}

// Attach the review button click event
document.getElementById('review-btn').addEventListener('click', reviewFormData);
