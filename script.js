/* =========================================================
   TORRA CAFÉ — MOBILE MENU FINAL
========================================================= */

(function () {

    function initTorraMenu() {

        const button = document.getElementById("torraMenuToggle");
        const menu = document.getElementById("torraMobileMenu");

        console.log("TORRA BUTTON:", button);
        console.log("TORRA MENU:", menu);

        if (!button || !menu) {
            console.error("TORRA MOBILE MENU ELEMENTS NOT FOUND");
            return;
        }

        button.onclick = function () {

            console.log("TORRA HAMBURGER CLICKED");

            const isOpen = menu.classList.contains("active");

            if (isOpen) {

                menu.classList.remove("active");

                button.classList.remove("active");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.style.overflow = "";

            } else {

                menu.classList.add("active");

                button.classList.add("active");

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

                document.body.style.overflow = "hidden";

            }

        };


        /* CLOSE WHEN LINK IS CLICKED */

        const links = menu.querySelectorAll("a");

        links.forEach(function (link) {

            link.onclick = function () {

                menu.classList.remove("active");

                button.classList.remove("active");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.style.overflow = "";

            };

        });

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initTorraMenu
        );

    } else {

        initTorraMenu();

    }

})();
