const about_section_text = document.querySelector(".about-section .body .text");
const about_section_body = document.querySelector(".about-section .body");
const about_section_line_numbers = document.querySelector(".about-section .body .line-numbers");

function fitText()
{
    about_section_line_numbers.style.height = about_section_text.getBoundingClientRect().height + 20 + "px";
    // about_section_body.style.maxHeight = about_section_text.getBoundingClientRect().height + 45 + "px";
}

fitText();
new ResizeObserver(fitText).observe(about_section_text)