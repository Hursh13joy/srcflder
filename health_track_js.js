// Function to track weight
function trackWeight() {
    let weight = document.getElementById('weight').value;
    if (weight) {
        let weightList = document.getElementById('weight-list');
        let li = document.createElement('li');
        li.textContent = `Weight: ${weight} kg`;
        weightList.appendChild(li);
        document.getElementById('weight').value = '';
    }
}

// Function to set medication reminder
function setReminder() {
    let medication = document.getElementById('medication').value;
    if (medication) {
        let medicationList = document.getElementById('medication-list');
        let li = document.createElement('li');
        li.textContent = `Medication: ${medication}`;
        medicationList.appendChild(li);
        document.getElementById('medication').value = '';
    }
}

// Function to add vet visit
function addVetVisit() {
    let vetVisitDate = document.getElementById('vet-visit-date').value;
    if (vetVisitDate) {
        let vetVisitList = document.getElementById('vet-visit-list');
        let li = document.createElement('li');
        li.textContent = `Vet Visit: ${vetVisitDate}`;
        vetVisitList.appendChild(li);
        document.getElementById('vet-visit-date').value = '';
    }
}
