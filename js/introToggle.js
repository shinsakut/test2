
function showDescriptionWindow() {

  document.querySelector(".intro-container-left-who-window").style.transitionDelay = "0";
  document.querySelector(".intro-container-left-who-window").style.opacity = 1;

}

function hideDescriptionWindow() {

  document.querySelector(".intro-container-left-who-window").style.transitionDelay = "0";
  document.querySelector(".intro-container-left-who-window").style.opacity = 0;

}

function showDescriptionWho() {
  document.querySelector(".intro-who-description").style.transitionDelay = ".1s";
  document.querySelector(".intro-who-description").style.opacity = 1;
}

function hideDescriptionWho() {
  document.querySelector(".intro-who-description").style.transitionDelay = 0;
  document.querySelector(".intro-who-description").style.opacity = 0;
}

function showDescriptionDesign() {
  document.querySelector(".intro-design-description").style.transitionDelay = ".1s";
  document.querySelector(".intro-design-description").style.opacity = 1;
}

function hideDescriptionDesign() {
  document.querySelector(".intro-design-description").style.transitionDelay = 0;
  document.querySelector(".intro-design-description").style.opacity = 0;
}

function showDescriptionWorks() {
  document.querySelector(".intro-works-description").style.transitionDelay = ".1s";
  document.querySelector(".intro-works-description").style.opacity = 1;
}

function hideDescriptionWorks() {
  document.querySelector(".intro-works-description").style.transitionDelay = 0;
  document.querySelector(".intro-works-description").style.opacity = 0;
}