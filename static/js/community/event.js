HTMLCollection.prototype.forEach = Array.prototype.forEach;

const report = document.getElementsByClassName("report-1");
const btn = document.getElementsByClassName("btn");
const modals = document.getElementsByClassName("report-7")[0];
const cancle = document.getElementsByClassName("report-19")[0];
// 글쓰기
const hide = document.getElementsByClassName("hide-1")[0];
const popup = document.getElementById("post-write-popup");
if (popup.style.display === "none") {
    hide.style.display = "flex";
}

// 각 버튼에 클릭 이벤트 추가
btn.forEach((bt, i) => {
    bt.addEventListener("click", (e) => {
        if (
            report[i].style.display === "none" ||
            report[i].style.display === ""
        ) {
            if (bt === e.target) {
                report[i].style.display = "flex";
            } else {
                report[i].style.display = "none";
            }
        } else {
            report[i].style.display = "none";
        }
    });
});

// 신고하기
report.forEach((but) => {
    but.addEventListener("click", (e) => {
        report.forEach((rep) => {
            rep.style.display = "none";
        });
        modals.style.display = "flex";
    });
});

// 신고하기 끄기
cancle.addEventListener("click", (e) => {
    modals.style.display = "none";
});

// 댓글
const down = document.getElementById("down");
const detail = document.getElementsByClassName("reply")[0];
const replys = document.getElementsByClassName("replys");
const back = document.getElementById("back");

replys.forEach((reply) => {
    reply.addEventListener("click", (e) => {
        detail.style.display = "flex";
    });
});
down.addEventListener("click", (e) => {
    detail.style.display = "none";
});

back.addEventListener("click", (e) => {
    detail.style.display = "none";
});
// 댓글 삭제
const delet = document.getElementsByClassName("report-1");
const del = document.getElementsByClassName("del")[0];
const delbtn = document.getElementsByClassName("delbtn");
const delreport = document.getElementsByClassName("delbtn-1");

// 샌드위치 버튼 작동
delbtn.forEach((bt, i) => {
    bt.addEventListener("click", (e) => {
        if (
            delreport[i].style.display === "none" ||
            delreport[i].style.display === ""
        ) {
            if (bt === e.target) {
                delreport[i].style.display = "flex";
            } else {
                delreport[i].style.display = "none";
            }
        } else {
            delreport[i].style.display = "none";
        }
    });
});

// 삭제 버튼 클릭시 경고창
delreport.forEach((but) => {
    but.addEventListener("click", (e) => {
        delreport.forEach((rep) => {
            rep.style.display = "none";
        });
        del.style.display = "flex";
    });
});

const dlecancle = document.getElementsByClassName("del-12")[0];
dlecancle.addEventListener("click", (e) => {
    del.style.display = "none";
});
