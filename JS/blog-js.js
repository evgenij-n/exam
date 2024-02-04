document.addEventListener("DOMContentLoaded", () => {
    let to_top_btn = document.querySelector(".scroll");

    window.onscroll = function () {
        if (window.scrollY > 580) {
            to_top_btn.style.display = "block"
        } else {
            to_top_btn.style.display = "none"
        }
    }

    to_top_btn.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});

