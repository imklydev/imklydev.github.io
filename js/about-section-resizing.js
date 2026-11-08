const about_section_text = document.querySelector(".about-section .body .text");
const about_section_body = document.querySelector(".about-section .body");

function fitText()
{
    about_section_body.style.maxHeight = about_section_text.getBoundingClientRect().height + 45 + "px";
}

fitText();
new ResizeObserver(fitText).observe(about_section_body)