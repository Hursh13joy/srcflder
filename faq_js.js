// Function to toggle the display of the answer for each question
function toggleAnswer(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqItem = faqItems[index];

    // Toggle the 'active' class to show/hide the answer
    faqItem.classList.toggle('active');
}
