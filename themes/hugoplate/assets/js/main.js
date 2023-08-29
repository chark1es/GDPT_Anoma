// main script
(function () {
    "use strict";

    const navToggle = document.getElementById("nav-toggle");
    const showButton = document.getElementById("show-button");
    const hideButton = document.getElementById("hide-button");

    navToggle?.addEventListener("change", (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            showButton.style.display = "none";
            hideButton.style.display = "block";
        } else {
            showButton.style.display = "block";
            hideButton.style.display = "none";
        }
    });

    const dropdownMenuToggler = document.querySelectorAll(
        ".nav-dropdown > .nav-link"
    );

    dropdownMenuToggler.forEach((toggler) => {
        toggler?.addEventListener("click", (e) => {
            e.target.parentElement.classList.toggle("active");
        });
    });

    // ####################### Testimonial Slider #########################
    new Swiper(".testimonial-slider", {
        spaceBetween: 24,
        loop: true,
        pagination: {
            el: ".testimonial-slider-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
})();
