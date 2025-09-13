const topLeftBtn = document.querySelector(".top-left");
const sidebar = document.querySelector(".sidebar");

const overlay = document.createElement("div");
overlay.classList.add("sidebar-overlay");
document.body.appendChild(overlay);

topLeftBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

const noticeDetail = document.querySelector(".sidebar-list-notice-detail");
const toggleBtn = noticeDetail.querySelector(".sidebar-list-text-button");
const extraText = noticeDetail.querySelector(".extra-text");

toggleBtn.addEventListener("click", () => {
    noticeDetail.classList.toggle("active");

    if (noticeDetail.classList.contains("active")) {
        extraText.style.display = "inline";
        toggleBtn.textContent = "접기";
    } else {
        extraText.style.display = "none";
        toggleBtn.textContent = "더보기";
    }
});
