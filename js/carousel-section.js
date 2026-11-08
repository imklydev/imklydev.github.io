const carousel_track = document.querySelector(".carousel-track");

[...carousel_track.children].forEach(element => {
  const clone = element.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  carousel_track.appendChild(clone);
});

let elements = carousel_track.children;
let current_element = 0;

function selectNextElement() {
    elements[current_element].removeAttribute("selected");
    console.log(current_element, elements.length);
    if(current_element < elements.length - 1) {
        current_element++;
    } else {
        current_element = 0;
    }

    elements[current_element].setAttribute("selected", "yeah");
}

// Not exactly decided if this looks good or not
// selectNextElement();
// setInterval(selectNextElement, 5000);