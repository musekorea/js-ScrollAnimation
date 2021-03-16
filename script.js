const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', observer);

function observer() {
  const triggerBottom = window.innerHeight * (3 / 4);

  boxes.forEach((box) => {
    console.log(box);
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
