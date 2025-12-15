document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("submitButton");
    const form = document.getElementById("Form");
    const body = document.getElementById("body");

    const audio = document.getElementById("audio");
    body.addEventListener("mouseenter", function() {
      audio.play();
 });
    
});

function redirect() {
    const button = document.getElementById("submitButton");
    const form = document.getElementById("Form");
    const status = document.getElementById("status");
    var InputCode = document.getElementById("Code")
    console.log(InputCode.value)
    /* EXAMPLE CARD *//* EXAMPLE CARD */

    if (InputCode.value === "1234") {
        status.textContent = "Success! Redirecting...";
        setTimeout(function() {
            document.location.href = "./card-Example/cardExample.html";
            status.textContent = "";
        }, 1500);
        
    } 

    /* BIRTHDAY CARDS *//* BIRTHDAY CARDS */

    else if (InputCode.value === "2561") {
        status.textContent = "Success! Redirecting...";
        setTimeout(function() {
            document.location.href = "./card-1/card1.html";
            status.textContent = "";
        }, 1500);
        
    } else if (InputCode.value === "5830") {
        status.textContent = "Success! Redirecting...";
        setTimeout(function() {
            document.location.href = "./card-2/card2.html";
            status.textContent = "";
        }, 1500);
        
    } else if (InputCode.value === "0502") {
        status.textContent = "Success! Redirecting...";
        setTimeout(function(){
            document.location.href = "./card-3/index.html";
            status.textContent = ""
        }, 1500);

    /* CHRISTMAS CARDS *//* CHRISTMAS CARDS */

    } else if (InputCode.value === "8411") {
        status.textContent = "Success! Redirecting...";
        setTimeout(function(){
            document.location.href = "./card-xmas-2025/xmas2025.html";
            status.textContent = ""
        }, 1500);

    } else if (InputCode.value === "9283") {
        status.textContent = "Success! Redirecting...";
        setTimeout(function(){
            document.location.href = "./card-xmas-2025/xmas2025a/a2025.html";
            status.textContent = ""
        }, 1500);
    
    /* ELSE *//* ELSE */

    } else {
        status.textContent = "Invalid code, please try again.";
    }
        
}