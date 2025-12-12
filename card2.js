document.addEventListener("DOMContentLoaded", function() {
  const card = document.getElementById("card");
  const audio = document.getElementById("audio");

  card.addEventListener("mouseenter", function() {
      audio.play();
  })
});