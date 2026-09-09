/* =========================================================
   TORRA CAFÉ — MOBILE MENU
   Jayara Web Works
========================================================= */

(function () {

    function initTorraMenu() {

        /* =================================================
           ELEMENTS
        ================================================= */

        const openButton =
            document.getElementById("torraMenuToggle");

        const closeButton =
            document.getElementById("torraMobileClose");

        const menu =
            document.getElementById("torraMobileMenu");


        /* =================================================
           DEBUG
        ================================================= */

        console.log(
            "TORRA OPEN BUTTON:",
            openButton
        );

        console.log(
            "TORRA CLOSE BUTTON:",
            closeButton
        );

        console.log(
            "TORRA MOBILE MENU:",
            menu
        );


        /* =================================================
           CHECK ELEMENTS
        ================================================= */

        if (!openButton || !menu) {

            console.error(
                "TORRA MOBILE MENU ELEMENTS NOT FOUND"
            );

            return;
        }


        /* =================================================
           OPEN MENU
        ================================================= */

        function openMenu() {

            menu.classList.add("active");

            openButton.classList.add("active");

            openButton.setAttribute(
                "aria-expanded",
                "true"
            );

            menu.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow = "hidden";

            console.log(
                "TORRA MENU OPENED"
            );

        }


        /* =================================================
           CLOSE MENU
        ================================================= */

        function closeMenu() {

            menu.classList.remove("active");

            openButton.classList.remove("active");

            openButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menu.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow = "";

            console.log(
                "TORRA MENU CLOSED"
            );

        }


        /* =================================================
           HAMBURGER BUTTON
        ================================================= */

        openButton.addEventListener(
            "click",
            function () {

                console.log(
                    "TORRA HAMBURGER CLICKED"
                );

                if (
                    menu.classList.contains("active")
                ) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );


        /* =================================================
           CLOSE BUTTON ×
        ================================================= */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function () {

                    console.log(
                        "TORRA CLOSE BUTTON CLICKED"
                    );

                    closeMenu();

                }
            );

        }


        /* =================================================
           MOBILE NAVIGATION LINKS
        ================================================= */

        const links =
            menu.querySelectorAll(
                ".torra-mobile-links a"
            );


        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                    }
                );

            }
        );


        /* =================================================
           ESC KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    menu.classList.contains("active")
                ) {

                    closeMenu();

                }

            }
        );


    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initTorraMenu
        );

    } else {

        initTorraMenu();

    }

})();
