
/* =========================================================
   TORRA NAVBAR
========================================================= */

const torraNavbar = document.querySelector(".torra-navbar");

const torraMenuToggle =
    document.querySelector(".torra-menu-toggle");

const torraMobileMenu =
    document.querySelector(".torra-mobile-menu");

const torraMobileLinks =
    document.querySelectorAll(".torra-mobile-links a");


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

function updateTorraNavbar() {

    if (window.scrollY > 40) {

        torraNavbar.classList.add("scrolled");

    } else {

        torraNavbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateTorraNavbar,
    { passive: true }
);

updateTorraNavbar();


/* ===============================
   MOBILE MENU
================================ */

function toggleTorraMenu() {

    const isOpen =
        torraMobileMenu.classList.toggle("active");

    torraMenuToggle.classList.toggle(
        "active",
        isOpen
    );

    torraMenuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    document.body.style.overflow =
        isOpen ? "hidden" : "";

}


torraMenuToggle.addEventListener(
    "click",
    toggleTorraMenu
);


/* ===============================
   CLOSE MOBILE MENU
================================ */

torraMobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        torraMobileMenu.classList.remove("active");

        torraMenuToggle.classList.remove("active");

        torraMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.style.overflow = "";

    });

});
