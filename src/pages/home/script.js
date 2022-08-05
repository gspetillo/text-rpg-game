/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
var fullscreenButton = document.getElementById('fullscreenButton');
var isFullscreen = false;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

fullscreenButton.onclick = () => {
    if (isFullscreen) {
        closeFullscreen();
    }else{
        openFullscreen();
    }
    isFullscreen = !isFullscreen;
}
