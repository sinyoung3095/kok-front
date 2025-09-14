// 헤더 프로필 아이콘
const profileIcon = document.querySelector(".account-info-popover");
const profileModal = document.querySelector(".profile-modal");

profileIcon.addEventListener("click", (e) => {
    const isVisible = profileModal.style.display === "flex";
    profileModal.style.display = isVisible ? "none" : "flex";
});

document.addEventListener("click", (e) => {
    if (!profileModal.contains(e.target) && e.target !== profileIcon) {
        profileModal.style.display = "none";
    }
});

// 사이드바 설정 모달
const settingBtn = document.querySelector(
    ".profile-modal-list-section-setting"
);
const settingModal = document.querySelector(".sidebar-setting-modal");
const settingCloseBtn = document.querySelector(
    ".sidebar-setting-modal-close-button"
);

if (settingBtn && settingModal) {
    settingBtn.addEventListener("click", () => {
        if (profileModal) profileModal.style.display = "none";
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

// 지원 내역 모달
const historyBtn = document.querySelector(
    ".profile-modal-list-section-history"
);
const historyModal = document.querySelector(".history-modal-background");
const historyCloseBtn = document.querySelector(".history-modal-close-button");

if (historyBtn && historyModal) {
    historyBtn.addEventListener("click", () => {
        if (profileModal) profileModal.style.display = "none";
        if (settingModal) settingModal.style.display = "none";

        historyModal.style.display = "flex";
    });
}

if (historyCloseBtn && historyModal) {
    historyCloseBtn.addEventListener("click", () => {
        historyModal.style.display = "none";
    });
}

if (historyModal) {
    historyModal.addEventListener("click", (e) => {
        if (e.target === historyModal) {
            historyModal.style.display = "none";
        }
    });
}

const experienceTab = document.querySelector(
    ".history-modal-top-section-active"
);
const experienceText = experienceTab.querySelector("p");
const employmentTab = document.querySelector(".history-modal-top-section");
const employmentText = employmentTab.querySelector("p");

experienceTab.addEventListener("click", () => {
    experienceTab.classList.add("history-modal-top-section-active");
    experienceTab.classList.remove("history-modal-top-section");
    experienceText.classList.add("history-modal-top-section-text-active");
    experienceText.classList.remove("history-modal-top-section-text");

    employmentTab.classList.remove("history-modal-top-section-active");
    employmentTab.classList.add("history-modal-top-section");
    employmentText.classList.remove("history-modal-top-section-text-active");
    employmentText.classList.add("history-modal-top-section-text");
});

employmentTab.addEventListener("click", () => {
    employmentTab.classList.add("history-modal-top-section-active");
    employmentTab.classList.remove("history-modal-top-section");
    employmentText.classList.add("history-modal-top-section-text-active");
    employmentText.classList.remove("history-modal-top-section-text");

    experienceTab.classList.remove("history-modal-top-section-active");
    experienceTab.classList.add("history-modal-top-section");
    experienceText.classList.remove("history-modal-top-section-text-active");
    experienceText.classList.add("history-modal-top-section-text");
});
