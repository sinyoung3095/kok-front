// 검색창 모달 열고 닫기
const openSearchBtn = document.querySelector(".sidebar-search");
const searchModal = document.querySelector(".search-modal-wrap");
const searchModalContent = document.querySelector(".search-modal");
const searchCloseBtn = document.querySelector(".close-search-modal");

openSearchBtn.addEventListener("click", () => {
    searchModal.classList.add("active");
});

searchCloseBtn.addEventListener("click", () => {
    searchModal.classList.remove("active");
});

searchModal.addEventListener("click", (e) => {
    if (!searchModalContent.contains(e.target)) {
        searchModal.classList.remove("active");
    }
});

// 사이드바 카테고리
document.querySelectorAll(".sidebar-menu .start-line a").forEach((link) => {
    link.addEventListener("click", function (e) {
        // 임시 페이지 이동 막기
        // 서버 구상 시 제외하시면 됩니다
        e.preventDefault();

        document.querySelectorAll(".sidebar-item-active").forEach((el) => {
            el.classList.replace("sidebar-item-active", "sidebar-item");
        });
        document.querySelectorAll(".sidebar-item-icon-active").forEach((el) => {
            el.classList.replace(
                "sidebar-item-icon-active",
                "sidebar-item-icon"
            );
        });

        const item = this.querySelector(".sidebar-item, .sidebar-item-active");
        const icon = this.querySelector(
            ".sidebar-item-icon, .sidebar-item-icon-active"
        );

        if (item) item.classList.replace("sidebar-item", "sidebar-item-active");
        if (icon)
            icon.classList.replace(
                "sidebar-item-icon",
                "sidebar-item-icon-active"
            );
    });
});

// 사업자 번호 더보기/접기
const businessToggleBtn = document.querySelector(".sidebar-business-toggle");
const businessSection = businessToggleBtn.closest(".sidebar-business");

businessToggleBtn.addEventListener("click", () => {
    businessSection.classList.toggle("expanded");

    if (businessSection.classList.contains("expanded")) {
        businessToggleBtn.textContent = "접기";
    } else {
        businessToggleBtn.textContent = "더보기";
    }
});

// 모달창 카테고리 선택
const groupSections = document.querySelectorAll(
    ".search-modal-group-section, .search-modal-group-section-active"
);
const bodyWraps = document.querySelectorAll(".search-modal-body-wrap");

groupSections.forEach((section) => {
    section.addEventListener("click", () => {
        const selectedText = section.textContent.trim();

        groupSections.forEach((s) => {
            s.classList.remove("search-modal-group-section-active");
            s.classList.add("search-modal-group-section");

            const p = s.querySelector("p");
            if (p) {
                p.classList.remove("search-modal-group-context-active");
                p.classList.add("search-modal-group-context");
            }
        });

        section.classList.remove("search-modal-group-section");
        section.classList.add("search-modal-group-section-active");

        const p = section.querySelector("p");
        if (p) {
            p.classList.remove("search-modal-group-context");
            p.classList.add("search-modal-group-context-active");
        }

        bodyWraps.forEach((body) => {
            const activeSection = body.querySelector(
                ".search-modal-group-section-active p"
            );
            if (
                activeSection &&
                activeSection.textContent.trim() === selectedText
            ) {
                body.style.display = "flex";
            } else {
                body.style.display = "none";
            }
        });
    });
});

// 사이드바 설정 모달
const settingBtn = document.querySelector(".sidebar-setting");
const settingModal = document.querySelector(".sidebar-setting-modal");
const settingCloseBtn = document.querySelector(
    ".sidebar-setting-modal-close-button"
);

if (settingBtn && settingModal) {
    settingBtn.addEventListener("click", () => {
        console.log("asdasdasda");

        settingModal.style.display = "flex";
    });
}

if (settingCloseBtn && settingModal) {
    settingCloseBtn.addEventListener("click", (e) => {
        settingModal.style.display = "none";
    });
}

if (settingModal) {
    settingModal.addEventListener("click", (e) => {
        if (e.target === settingModal) {
            settingModal.style.display = "none";
        }
    });
}

// 알림 설정 토글
document.querySelectorAll(".setting-modal-alarm-button").forEach((button) => {
    const check = button.querySelector(".setting-modal-alarm-button-check");

    button.addEventListener("click", () => {
        button.classList.toggle("off");
        check.classList.toggle("off");
    });
});

const profileWrap = document.querySelector(
    ".setting-modal-member-profile-wrap"
);
if (profileWrap) {
    const alarmWrap = document.querySelector(".setting-modal-alarm-wrap");
    const rightLists = document.querySelectorAll(
        ".setting-modal-right-list-wrap"
    );
    const profileRightList = rightLists[0];
    const alarmRightList = rightLists[1];
    const activeBg = "rgba(86, 105, 143, 0.08)";
    const inactiveBg = "transparent";

    profileRightList.style.display = "block";
    alarmRightList.style.display = "none";
    profileWrap.style.background = activeBg;
    alarmWrap.style.background = inactiveBg;

    profileWrap.addEventListener("click", () => {
        profileRightList.style.display = "block";
        alarmRightList.style.display = "none";

        profileWrap.style.background = activeBg;
        alarmWrap.style.background = inactiveBg;
    });

    alarmWrap.addEventListener("click", () => {
        alarmRightList.style.display = "block";
        profileRightList.style.display = "none";

        alarmWrap.style.background = activeBg;
        profileWrap.style.background = inactiveBg;
    });
}

// 고객지원창
const supportButton = document.querySelector(".sidebar-support-wrap");
const supportModal = document.getElementById("crisp-chatbox-chat");
const closeButton = document.querySelector(
    ".customer-support-top-close-button"
);

if (supportButton && supportModal && closeButton) {
    supportButton.addEventListener("click", () => {
        supportModal.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        supportModal.classList.remove("active");
    });
}

// 고객지원 상세창
const faqItems = document.querySelectorAll(".customer-support-list-section");
const detailModal = document.getElementById("crisp-chatbox-chat-detail");
const detailCloseBtn = document.querySelector(".detail-top-close-button");
const detailBackBtn = document.querySelector(".detail-back-wrap");
const supportTab = document.querySelector(".detail-top-title-section2");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (detailModal) detailModal.classList.add("active");
    });
});

if (detailCloseBtn) {
    detailCloseBtn.addEventListener("click", () => {
        if (detailModal) detailModal.classList.remove("active");
        if (supportModal) supportModal.classList.remove("active");
    });
}

if (detailBackBtn) {
    detailBackBtn.addEventListener("click", () => {
        if (detailModal) detailModal.classList.remove("active");
    });
}

if (supportTab) {
    supportTab.addEventListener("click", () => {
        if (detailModal) detailModal.classList.remove("active");
    });
}
