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

// 사업자 번호 더보기/접기
const toggleBtn = document.querySelector(".sidebar-business-toggle");
const businessSection = toggleBtn.closest(".sidebar-business");

toggleBtn.addEventListener("click", () => {
    businessSection.classList.toggle("expanded");

    if (businessSection.classList.contains("expanded")) {
        toggleBtn.textContent = "접기";
    } else {
        toggleBtn.textContent = "더보기";
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
const alarmWrap = document.querySelector(".setting-modal-alarm-wrap");
const rightLists = document.querySelectorAll(".setting-modal-right-list-wrap");
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
