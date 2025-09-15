const homeButton = document.getElementById("menu-home");
const payButton = document.getElementById("menu-payment");
const sideMenuButtons = document.querySelectorAll(".menu-btn");
const sideSubLists = document.querySelectorAll(".menu-sub-list");
const sideSubLinks = document.querySelectorAll(".kok-link");
const icons = document.querySelectorAll(".icon-wrapper i");
const tabNameItems = document.querySelectorAll(".tab-name-list .tab-name");
const allMenus = document.querySelectorAll("#kok-side .menu-item");

// 홈 버튼 클릭
homeButton.addEventListener("click", (e) => {
    // js 확인용 a태그 이동 방지
    e.preventDefault();
    sideMenuButtons.forEach((menuBtn) => menuBtn.classList.remove("current"));
    homeButton.classList.add("current");

    sideSubLists.forEach((list) => list.classList.remove("show"));
    sideSubLinks.forEach((link) => link.classList.remove("active"));
    icons.forEach((icon) => {
        icon.classList.remove("mdi-chevron-down");
        icon.classList.add("mdi-chevron-right");
    });

    tabNameItems.forEach((tab) => tab.classList.remove("active"));
});

// 결제 버튼 클릭
payButton.addEventListener("click", (e) => {
    // js 확인용 a태그 이동 방지
    e.preventDefault();
    sideMenuButtons.forEach((menuBtn) => menuBtn.classList.remove("current"));

    payButton.classList.add("current");

    sideSubLists.forEach((list) => list.classList.remove("show"));

    sideSubLinks.forEach((link) => link.classList.remove("active"));

    icons.forEach((icon) => {
        icon.classList.remove("mdi-chevron-down");
        icon.classList.add("mdi-chevron-right");
    });

    tabNameItems.forEach((tab) => tab.classList.remove("active"));
});

// 사이드바 클릭
sideMenuButtons.forEach((menu) => {
    menu.addEventListener("click", function () {
        const submenu = this.nextElementSibling;
        const icon = this.querySelector(".icon-wrapper i");
        if (submenu && submenu.classList.contains("menu-sub-list")) {
            submenu.classList.toggle("show");
            if (submenu.classList.contains("show")) {
                icon.classList.remove("mdi-chevron-right");
                icon.classList.add("mdi-chevron-down");
            } else {
                icon.classList.remove("mdi-chevron-down");
                icon.classList.add("mdi-chevron-right");
            }
        }
    });
});

// 사이드 서브 메뉴 클릭 시 탭 동기화
sideSubLinks.forEach((submenu) => {
    submenu.addEventListener("click", (e) => {
        // js 확인용 a태그 이동 방지
        e.preventDefault();
        const parentMenu = submenu.closest("li.menu");

        allMenus.forEach((menu) => {
            if (menu !== parentMenu) {
                menu.querySelectorAll(".menu-sub-list").forEach((sub) =>
                    sub.classList.remove("show")
                );
                menu.querySelectorAll(".kok-link").forEach((link) =>
                    link.classList.remove("active")
                );
                const icon = menu.querySelector(".icon-wrapper i");
                if (icon) {
                    icon.classList.remove("mdi-chevron-down");
                    icon.classList.add("mdi-chevron-right");
                }
            }
        });

        submenu.classList.add("active");

        if (parentMenu) {
            sideMenuButtons.forEach((btn) => btn.classList.remove("current"));
            parentMenu.querySelector(".menu-btn").classList.add("current");

            const icon = parentMenu.querySelector(".icon-wrapper i");
            if (icon) {
                icon.classList.remove("mdi-chevron-right");
                icon.classList.add("mdi-chevron-down");
            }

            const sublist = parentMenu.querySelector(".menu-sub-list");
            if (sublist) sublist.classList.add("show");
        }

        const clickedText = submenu.textContent.trim().replace("-", "").trim();
        tabNameItems.forEach((tab) => {
            tab.classList.remove("active");
            if (
                tab.textContent.trim().replace(" ", "") ===
                clickedText.replace(" ", "")
            ) {
                tab.classList.add("active");
            }
        });
    });
});

// 탭 클릭 시 사이드 메뉴 동기화
tabNameItems.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const clickedText = tab.textContent.trim();

        tabNameItems.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        allMenus.forEach((menu) => {
            menu.querySelectorAll(".menu-sub-list").forEach((sub) =>
                sub.classList.remove("show")
            );
            menu.querySelectorAll(".kok-link").forEach((link) =>
                link.classList.remove("active")
            );
            const icon = menu.querySelector(".icon-wrapper i");
            if (icon) {
                icon.classList.remove("mdi-chevron-down");
                icon.classList.add("mdi-chevron-right");
            }
        });

        sideSubLinks.forEach((link) => {
            const linkText = link.textContent.trim().replace("-", "").trim();
            if (linkText === clickedText.replace(" ", "")) {
                link.classList.add("active");

                const parentMenu = link.closest("li.menu");
                if (parentMenu) {
                    sideMenuButtons.forEach((btn) =>
                        btn.classList.remove("current")
                    );
                    parentMenu
                        .querySelector(".menu-btn")
                        .classList.add("current");

                    const sublist = parentMenu.querySelector(".menu-sub-list");
                    if (sublist) sublist.classList.add("show");

                    const icon = parentMenu.querySelector(".icon-wrapper i");
                    if (icon) {
                        icon.classList.remove("mdi-chevron-right");
                        icon.classList.add("mdi-chevron-down");
                    }
                }
            }
        });
    });
});
