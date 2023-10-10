document.addEventListener('DOMContentLoaded', function() {
  const main = document.querySelector('#main');
  
  const keyframes = {
    opacity: [0, 1],
    translate: ['0 -50px', 0],
  };
  const options = {
    duration: 2000,
    easing: 'ease',
  }
  
  main.animate(keyframes, options);
});
