/* First, wait for DOM content to be fully loaded before executing the function 
to ensure that script code can see the circle asnd other elements in HTML */
document.addEventListener('DOMContentLoaded', function () {
  const circle = document.getElementById('circle');
  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;

  /* execute whenever mouse moves */
  document.addEventListener('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  /* Updating the position of the circle based on the mouse cursor position 
  speed is 0.08 */
  function updateCirclePosition() {
    circleX += (mouseX - circleX) * 0.08;
    circleY += (mouseY - circleY) * 0.08;

    /* translate to the updated position */
    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    circle.style.display = 'block';
  }

  /* continuously update the position of the circle based on the mouse cursor. */
  setInterval(updateCirclePosition, 40); 
});
