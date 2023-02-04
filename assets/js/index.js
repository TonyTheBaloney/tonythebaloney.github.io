// Make an animation that will replace the text in the element with id "iAm" and look like it's typing
// The animation will be 1 second long and will have a delay of 0.5 seconds
// The animation will be repeated forever, and will change each time it repeats based on an array of strings
// the animation should work in browsers that support CSS animations

// you can use the animate.css library to help you make this animation

const texts = ['Software Developer', 'Gamer', 'Tutor'];
const start = "I am a ";
let count = 0;

function typingEffect() {
  let iAm = document.getElementById("iAm");
  let text = texts[count];
  let textLength = text.length;
  let i = 0;
  let interval = setInterval(() => {
    iAm.innerHTML = start + text.slice(0, i);
    i++;
    if (i === textLength + 1) {
      clearInterval(interval);
      setTimeout(() => {
        count++;
        if (count >= texts.length) count = 0;
        typingEffect();
      }, 500);
    }
  }, 100);
}

typingEffect();