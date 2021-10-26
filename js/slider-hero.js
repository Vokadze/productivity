const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
// console.log( 'dots' );

const imgArr = ['./img/slider/bg1.svg', './img/slider/bg2.svg', './img/slider/bg3.svg', './img/slider/bg4.svg'];

let currentIntex = 0;

function changeIndex(ind) {
   currentIntex = ind;
   slide(currentIntex);
}

function nextIndex(direction) {
   currentIntex += direction;
   if (currentIntex >= imgArr.length) {
      currentIntex = 0;
   } else if (currentIntex < 0) {
      currentIntex = imgArr.length - 1;
   }

   slide(currentIntex);
}

function slide(index) {
   img.style.display = 'none';
   setTimeout(() => {
      img.style.display = 'block';
   }, 0);

   img.src = imgArr[index];

   updateDots(index);
}

function updateDots(index) {
   for (let dot of dots) {
      dot.classList.remove('active');
   }
   dots[index].classList.add('active');
}

