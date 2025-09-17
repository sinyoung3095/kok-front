HTMLCollection.prototype.forEach = Array.prototype.forEach;

const report = document.getElementsByClassName("report-1");
const btn = document.getElementsByClassName("post-28");
const modal = document.getElementsByClassName("report-7")[0];
const cancle = document.getElementsByClassName("report-19")[0];

// 각 버튼에 클릭 이벤트 추가
btn.forEach((bt, i) => {
    bt.addEventListener("click", (e) => {
        if (
            report[i].style.display === "none" ||
            report[i].style.display === ""
        ) {
            report[i].style.display = "flex";
        } else {
            report[i].style.display = "none";
        }
    });
});
// 신고하기
report.forEach((bt, i) => {
    bt.addEventListener("click", (e) => {
        report.forEach((re) => {
            re.style.display = "none";
        });

        modal.style.display = "flex";
    });
});
// 신고하기 끄기
cancle.addEventListener("click", (e) => {
    modal.style.display = "none";
});

// 글쓰기
const write = document.getElementById("write");
const m_write = document.getElementsByClassName("hide-1")[0];
const setting = document.getElementsByClassName("setting")[0];
const close = document.getElementById("close");
const text = document.getElementById("text");
const count = document.getElementById("count");
const etc = document.getElementsByClassName("etc")[0];

write.addEventListener("click", (e) => {
    setting.style.display = "flex";
});

m_write.addEventListener("click", (e) => {
    setting.style.display = "flex";
    m_write.style.display = "none";
});

close.addEventListener("click", (e) => {
    setting.style.display = "none";
    if (etc.style.display === "none !important") {
        m_write.style.display = "flex";
    }
});

text.addEventListener("keyup", (e) => {
    count.innerText = text.value.length;
});

// 댓글
const down = document.getElementById("down");
const detail = document.getElementsByClassName("reply")[0];
const replys = document.getElementsByClassName("replys");

replys.forEach((reply) => {
    reply.addEventListener("click", (e) => {
        detail.style.display = "flex";
    });
});
down.addEventListener("click", (e) => {
    detail.style.display = "none";
});
