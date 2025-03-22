function showCalendar() {
    document.getElementById("calendar").classList.remove("hidden");
}

function showForm() {
    let date = document.getElementById("date").value;
    if(date) {
        document.getElementById("calendar").classList.add("hidden");
        document.getElementById("form").classList.remove("hidden");
    } else {
        alert("Please select a date first!");
    }
}

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if(name && email) {
        document.getElementById("form").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
        document.getElementById("confirmationText").innerText = `Your demo has been scheduled, ${name}!`;
    } else {
        alert("Please fill in all details!");
    }
}