// Function to handle form submission
function submitContactForm() {
    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const queryType = document.getElementById('vet-query').value;
    const message = document.getElementById('message').value;

    // Validate the input fields
    if (!name || !email || !queryType || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = `
        <h2>Your Message Has Been Sent!</h2>
        <p>Thank you <strong>${name}</strong> for contacting us. Our vet doctors will respond to you at <strong>${email}</strong> shortly.</p>
        <p><strong>Type of Help:</strong> ${queryType}</p>
        <p><strong>Your Message:</strong> ${message}</p>
    `;
    confirmationMessage.style.display = 'block';

    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('vet-query').value = '';
    document.getElementById('message').value = '';
}
