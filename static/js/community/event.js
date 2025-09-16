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

report.forEach((bt, i) => {
    bt.addEventListener("click", (e) => {
        report.forEach((re) => {
            re.style.display = "none";
        });

        modal.style.display = "flex";
    });
});

cancle.addEventListener("click", (e) => {
    modal.style.display = "none";
});
