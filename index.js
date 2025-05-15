const passengerCountEl = document.getElementById('passengerCount');
const savedEntriesEl = document.getElementById('savedEntries');
let currentCount = 0; 
function addPassenger() {
    currentCount += 1;
    passengerCountEl.textContent = currentCount;
}
function saveCount() {
    let savedCounts =currentCount + " • "
    savedEntriesEl.textContent += savedCounts
    passengerCountEl.textContent = 0;
    currentCount = 0;
}
