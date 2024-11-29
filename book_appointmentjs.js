// Function to handle the appointment booking
function bookAppointment() {
    // Get the values from the form
    const petName = document.getElementById('pet-name').value;
    const vetName = document.getElementById('vet-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    // Validate the input fields
    if (!petName || !vetName || !appointmentDate || !appointmentTime) {
        alert("Please fill in all fields.");
        return;
    }

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = `
        <h2>Appointment Booked Successfully!</h2>
        <p>Your pet <strong>${petName}</strong> has an appointment with <strong>${vetName}</strong></p>
        <p><strong>Date:</strong> ${new Date(appointmentDate).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${appointmentTime}</p>
    `;
    confirmationMessage.style.display = 'block';

    // Reset the form
    document.getElementById('pet-name').value = '';
    document.getElementById('vet-name').value = '';
    document.getElementById('appointment-date').value = '';
    document.getElementById('appointment-time').value = '';
}
