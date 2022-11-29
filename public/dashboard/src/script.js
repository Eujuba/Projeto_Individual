var slider = document.querySelectorAll('.slider');
var btnPrev = document.getElementById('prev-button');
var btnNext = document.getElementById('next-button');


var currentSlide = 0;

// esconde o slide atual
function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

// mostra o slide atual
function showSlider() {
  slider[currentSlide].classList.add('on')
}


function nextSlider() {
  // esconde o slide atual
  hideSlider()

  // se o slide atual for o último, volta para o primeiro
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  // mostra o próximo slide
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


console.log(slider)


currentSlide = currentSlide + 1
currentSlide = currentSlide - 1