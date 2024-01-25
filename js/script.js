'use strict';

// function definitions

// NAV
const selectLink = function(event){
  console.log('clicked on', event.currentTarget);
  highlightLink(event.currentTarget);
}

const highlightLink = function(element) {
  for (let link of links) {
    link.classList.remove('selected');
  }
  element.classList.add('selected');

}


// MAIN MUSIC
const toggleMusic = function() {
  if (music.paused) {
    music.play();
    startMusicAnimation();
  } else {
    music.pause();
    stopMusicAnimation();
  }
}

const startMusicAnimation = function() {
  var musicNotes = Array.from(document.querySelectorAll('#music-notes path'));
  musicNotes.map((musicNote) => {
    // Setting animation property to empty string so it inherits from the default CSS again
    musicNote.style.animation = '';
    // And then resume animation
    musicNote.style.animationPlayState = 'running';
  });
}

const stopMusicAnimation = function() {
  var musicNotes = Array.from(document.querySelectorAll('#music-notes path'));
  musicNotes.map((musicNote) => {
    musicNote.offsetHeight;
    musicNote.style.animation = 'none';
  });
}


// FORM
const clearName = function (event) {
  console.log(username.id, username.value);
  username.value = username.defaultValue;
}

const updateDonation = function (event) {
  let element = event.currentTarget;
  console.log(element.id, element.value);
  donationOutput.value = '$' + element.value;
}

const setBackground = function (event) {
  let element = event.currentTarget;
  console.log(element.id, element.value);
  document.documentElement.style.backgroundColor = element.value;
}

const remainingChars = function (event) {
  let element = event.currentTarget;
  console.log(element.id, element.value);
  let remain = element.maxLength - element.value.length;
  remainingOutput.value = remain + ' characters left';
}

const checkForm = function (event) {
  event.preventDefault();
  if ( username.value ) {
    week5Form.submit();
  } else {
    error.classList.add( 'show');
    document.querySelector('#error-sound').play();
    username.focus();
  }
};



// variable declarations

// NAV + DATA AOS
let anim1 = document.querySelector( '#anim1' );


let links = document.querySelectorAll('nav a');

// FORM
let week5Form = document.querySelector('#week5Form');
let username = document.querySelector('#username');
let clearButton = document.querySelector('#clearButton');
let age = document.querySelector('#age');
let donation = document.querySelector('#donation');
let donationOutput = document.querySelector('#donationOutput');
let color = document.querySelector('#color');
let message = document.querySelector('#message');
let remainingOutput = document.querySelector('#remainingOutput');
let error = document.querySelector('#error');

// MAIN MUSIC
let music = document.querySelector('#main-music');
let musicButton = document.querySelector('#music-button');

// FIREWORKS
const fireworksContainer = document.querySelector('#fireworks-container');
const fireworks = new Fireworks.Fireworks(fireworksContainer, {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.02,
  friction: 0.93,
  gravity: 1.52,
  particles: 42,
  traceLength: 2.47,
  traceSpeed: 14,
  explosion: 2,
  intensity: 10.62,
  flickering: 0,
  lineStyle: 'round',
  // hue: {
  //   min: 0,
  //   max: 360
  // },
  delay: {
    min: 95,
    max: 100
  },
  rocketsPoint: {
    min: 61,
    max: 68
  },
  // lineWidth: {
  //   explosion: {
  //     min: 1,
  //     max: 4.84
  //   },
  //   trace: {
  //     min: 0.1,
  //     max: 1.29
  //   }
  // },
  brightness: {
    min: 19,
    max: 33
  },
  // decay: {
  //   min: 0.01,
  //   max: 0.026
  // },
  // mouse: {
  //   click: false,
  //   move: true,
  //   max: 1
  // }
})


// script initialisation

// NAV + DATA AOS
AOS.init({
  'anchor-placement': 'center-center',
  'delay': 500,
  'easing':'ease',
  'duration': 1000,
  'mirror': true,
  'offset': 100,
  'once': false,
});

for (let link of links) {
  link.addEventListener ('click', selectLink);
}

document.body.scrollIntoView();

// MAIN MUSIC
musicButton.addEventListener('click', toggleMusic);

// FIREWORKS
fireworks.start();


