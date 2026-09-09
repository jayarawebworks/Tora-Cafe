/* =========================================================
   TORRA CAFÉ
   MAIN JAVASCRIPT
   Jayara Web Works
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.querySelector(
        ".torra-menu-toggle"
    );

    const mobileMenu = document.querySelector(
        ".torra-mobile-menu"
    );


    console.log("TORRA MENU BUTTON:", menuButton);
    console.log("TORRA MOBILE MENU:", mobileMenu);


    /* Check if elements exist */

    if (!menuButton) {

        console.error(
            "TORRA ERROR: .torra-menu-toggle not found"
        );

        return;
    }


    if (!mobileMenu) {

        console.error(
            "TORRA ERROR: .torra-mobile-menu not found"
        );

        return;
    }


    /* =====================================================
       OPEN / CLOSE MENU
    ===================================================== */

    menuButton.addEventListener("click", function () {

        console.log("TORRA MENU CLICKED");

        const menuIsOpen =
            mobileMenu.classList.contains("active");


        if (menuIsOpen) {

            /* CLOSE */

            mobileMenu.classList.remove("active");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenu.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow = "";


        } else {

            /* OPEN */

            mobileMenu.classList.add("active");

            menuButton.classList.add("active");

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            mobileMenu.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow = "hidden";

        }

    });


    /* =====================================================
       MOBILE MENU LINKS
    ===================================================== */

    const mobileLinks = document.querySelectorAll(
        ".torra-mobile-links a"
    );


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            menuButton.classList.remove("active");

            menuButton.setAttribute(
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


    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar = document.querySelector(
        ".torra-navbar"
    );


    if (navbar) {

        function updateNavbar() {

            if (window.scrollY > 40) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        }


        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );


        updateNavbar();

    }


});
