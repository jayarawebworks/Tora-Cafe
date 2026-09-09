/* =========================================================
   TORRA CAFÉ — MAIN JAVASCRIPT
   Designed by Jayara Web Works
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.querySelector(".torra-menu-toggle");

    const mobileMenu =
        document.querySelector(".torra-mobile-menu");

    const mobileLinks =
        document.querySelectorAll(
            ".torra-mobile-links a"
        );


    /* Make sure elements exist */

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mobileMenu.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            /* Accessibility */

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            mobileMenu.setAttribute(
                "aria-hidden",
                isOpen ? "false" : "true"
            );


            /* Prevent background scrolling */

            document.body.style.overflow =
                isOpen ? "hidden" : "";

        });


        /* Close menu when navigation link is clicked */

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

                document.body.style.overflow = "";

            });

        });

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".torra-navbar");


    if (navbar) {

        const updateNavbar = () => {

            if (window.scrollY > 40) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        };


        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );


        updateNavbar();

    }


});
