// Function to register for an event
function registerEvent(eventName) {
    // Show the confirmation message with the event name
    document.getElementById('event-name').innerText = `You have successfully registered for the ${eventName}!`;
    document.getElementById('registration-confirmation').style.display = 'block';
}

// Function to close the registration confirmation
function closeConfirmation() {
    document.getElementById('registration-confirmation').style.display = 'none';
}
