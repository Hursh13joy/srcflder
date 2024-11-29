// Function to set a reminder
function setReminder() {
    // Get input values
    const title = document.getElementById('reminder-title').value;
    const date = document.getElementById('reminder-date').value;
    const details = document.getElementById('reminder-details').value;

    // Validate input
    if (!title || !date) {
        alert("Please fill in all the fields.");
        return;
    }

    // Create a new list item for the reminder
    const reminderList = document.getElementById('reminders');
    const li = document.createElement('li');
    
    // Set reminder title, date, and details
    li.innerHTML = `
        <strong>${title}</strong><br>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
        <p><strong>Details:</strong> ${details}</p>
    `;
    
    // Append the new reminder to the list
    reminderList.appendChild(li);

    // Clear the form inputs
    document.getElementById('reminder-title').value = '';
    document.getElementById('reminder-date').value = '';
    document.getElementById('reminder-details').value = '';
}
