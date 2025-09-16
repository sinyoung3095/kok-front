const homeButton = document.getElementById("menu-home");
const payButton = document.getElementById("menu-payment");
const experienceButton = document.getElementById("menu-experience");
const employButton = document.getElementById("menu-employ");
const sideMenuButtons = document.querySelectorAll(".menu-btn");
const sideSubLists = document.querySelectorAll(".menu-sub-list");
const sideSubLinks = document.querySelectorAll(".kok-link");
const icons = document.querySelectorAll(".icon-wrapper i");
const tabNameItems = document.querySelectorAll(".tab-name-list .tab-name");
const allMenus = document.querySelectorAll("#kok-side .menu-item");
const modal = document.querySelector(".member-modal");
const actionButtons = document.querySelectorAll(".action-btn");
const closeButtons = document.querySelectorAll(".close");
const closeFooterButton = document.querySelector(".btn-close");
const userMenuWrapper = document.querySelector(".user-menu-wrapper");
const userMenuContent = document.querySelector(".user-menu-content");
const btnGroup = document.querySelector(".btn-group");
const pageNums = document.querySelectorAll(".page-num");
const pageItemNums = document.querySelectorAll(".page-item-num");

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
});

// 체험 버튼 클릭
experienceButton.addEventListener("click", (e) => {
    // js 확인용 a태그 이동 방지
    e.preventDefault();
    sideMenuButtons.forEach((menuBtn) => menuBtn.classList.remove("current"));
    experienceButton.classList.add("current");

    sideSubLists.forEach((list) => list.classList.remove("show"));
    sideSubLinks.forEach((link) => link.classList.remove("active"));

    icons.forEach((icon) => {
        icon.classList.remove("mdi-chevron-down");
        icon.classList.add("mdi-chevron-right");
    });
});

// 인턴 버튼 클릭
employButton.addEventListener("click", (e) => {
    // js 확인용 a태그 이동 방지
    e.preventDefault();
    sideMenuButtons.forEach((menuBtn) => menuBtn.classList.remove("current"));

    employButton.classList.add("current");

    sideSubLists.forEach((list) => list.classList.remove("show"));

    sideSubLinks.forEach((link) => link.classList.remove("active"));

    icons.forEach((icon) => {
        icon.classList.remove("mdi-chevron-down");
        icon.classList.add("mdi-chevron-right");
    });
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

// 회원 상세 모달
actionButtons.forEach((actionButton) => {
    actionButton.addEventListener("click", (e) => {
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("show");
            modal.style.background = "rgba(0,0,0,0.5)";
            document.body.classList.add("modal-open");
        }, 100);
    });
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (e) => {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
        setTimeout(() => {
            modal.style.display = "none";
        }, 100);
    });
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
        setTimeout(() => {
            modal.style.display = "none";
        }, 100);
    }
});

closeFooterButton.addEventListener("click", (e) => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
        modal.style.display = "none";
    }, 100);
});

// 1주, 2주, 1개월 버튼 이벤트
if (btnGroup) {
    const buttons = btnGroup.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
}

// 관리자 이메일 이벤트
userMenuWrapper.addEventListener("click", (e) => {
    userMenuContent.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (
        !userMenuWrapper.contains(e.target) &&
        !userMenuContent.contains(e.target)
    ) {
        userMenuContent.classList.remove("show");
    }
});

// 페이지 번호
pageItemNums.forEach((pageItemNum) => {
    pageItemNum.addEventListener("click", (e) => {
        e.preventDefault();
        pageNums.forEach((pageNum) => {
            pageNum.classList.remove("active");
        });
        pageItemNum.parentElement.classList.add("active");
    });
});
