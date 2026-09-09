/* =========================================================
   TORRA CAFÉ — MOBILE MENU
   FINAL WORKING VERSION
========================================================= */

(function () {

    function initTorraMenu() {

        const openButton =
            document.getElementById("torraMenuToggle");

        const menu =
            document.getElementById("torraMobileMenu");

        if (!openButton || !menu) {
            console.error("TORRA MENU: elements not found");
            return;
        }


        /* =================================================
           CREATE CLOSE BUTTON AUTOMATICALLY
        ================================================= */

        let closeButton =
            document.getElementById("torraAutoClose");


        if (!closeButton) {

            closeButton =
                document.createElement("button");

            closeButton.id =
                "torraAutoClose";

            closeButton.type =
                "button";

            closeButton.setAttribute(
                "aria-label",
                "Close navigation menu"
            );


            /* X */

            closeButton.innerHTML =
                "<span></span><span></span>";


            /* =================================================
               BUTTON STYLE
            ================================================= */

            closeButton.style.position =
                "absolute";

            closeButton.style.top =
                "18px";

            closeButton.style.right =
                "24px";

            closeButton.style.width =
                "44px";

            closeButton.style.height =
                "44px";

            closeButton.style.display =
                "flex";

            closeButton.style.alignItems =
                "center";

            closeButton.style.justifyContent =
                "center";

            closeButton.style.padding =
                "0";

            closeButton.style.margin =
                "0";

            closeButton.style.background =
                "transparent";

            closeButton.style.border =
                "1px solid rgba(238,233,223,0.35)";

            closeButton.style.cursor =
                "pointer";

            closeButton.style.zIndex =
                "999999";

            closeButton.style.pointerEvents =
                "auto";


            /* =================================================
               X LINES
            ================================================= */

            const lines =
                closeButton.querySelectorAll("span");


            lines.forEach(function (line) {

                line.style.position =
                    "absolute";

                line.style.width =
                    "18px";

                line.style.height =
                    "1px";

                line.style.background =
                    "#eee9df";

                line.style.display =
                    "block";

            });


            lines[0].style.transform =
                "rotate(45deg)";

            lines[1].style.transform =
                "rotate(-45deg)";


            /* Put button inside menu */

            menu.insertBefore(
                closeButton,
                menu.firstChild
            );

        }


        /* =================================================
           OPEN
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

            document.body.style.overflow =
                "hidden";

        }


        /* =================================================
           CLOSE
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

            document.body.style.overflow =
                "";

        }


        /* =================================================
           HAMBURGER
        ================================================= */

        openButton.onclick = function () {

            if (
                menu.classList.contains("active")
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        };


        /* =================================================
           × CLOSE BUTTON
        ================================================= */

        closeButton.onclick = function (event) {

            event.preventDefault();

            event.stopPropagation();

            closeMenu();

        };


        /* =================================================
           MOBILE LINKS
        ================================================= */

        const links =
            menu.querySelectorAll(
                ".torra-mobile-links a"
            );


        links.forEach(function (link) {

            link.onclick = function () {

                closeMenu();

            };

        });


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
       START
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
