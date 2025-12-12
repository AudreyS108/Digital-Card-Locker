document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("submitButton");
    const form = document.getElementById("Form");
    
});

function redirect() {
    const button = document.getElementById("submitButton");
    const form = document.getElementById("Form");
    const status = document.getElementById("status");
    var InputCode = document.getElementById("Code")
    console.log(InputCode.value)
    if (InputCode.value === "2561") {
        status.textContent = "Success! Redirecting...";
        document.location.href = "card1.html";
    } else {
        status.textContent = "Invalid code, please try again.";
    }
        
}