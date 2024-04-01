document.addEventListener('DOMContentLoaded', function () {
  const circle = document.getElementById('circle');
  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;

  document.addEventListener('mousemove', function (e) {
    // Store the current mouse coordinates
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function updateCirclePosition() {
    circleX += (mouseX - circleX) * 0.08;
    circleY += (mouseY - circleY) * 0.08;

    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    circle.style.display = 'block';
  }

  setInterval(updateCirclePosition, 40); 
});
