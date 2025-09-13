HTMLCollection.prototype.forEach = Array.prototype.forEach;
const first = document.getElementsByClassName("first");
const second = document.getElementsByClassName("second");
const list = document.getElementsByClassName("post-1");
const close = document.getElementById("close");
const setting = document.getElementsByClassName("setting")[0];
const set = document.getElementsByClassName("set")[0];
const submit = document.getElementsByClassName("setting-40")[0];
const profile = document.getElementsByClassName("profile")[0];
const profileset = document.getElementsByClassName("setting-16")[0];
const label = document.getElementsByClassName("label")[0];
const background = document.getElementById("background");
const lists = document.getElementsByClassName("list");
const remove = document.getElementsByClassName("remove");
const del = document.getElementsByClassName("del")[0];
const cancle = document.getElementsByClassName("del-12")[0];

label.addEventListener("click", (e) => {
    background.click();
});
// console.log(set);
// 프로필 편집 열기
set.addEventListener("click", (e) => {
    setting.style.display = "flex";
});
// 프로필 편집 닫기
close.addEventListener("click", (e) => {
    setting.style.display = "none";
});
// 프로필 편집 완료
submit.addEventListener("click", (e) => {
    setting.style.display = "none";
});
// 프로필 사진 변경
profileset.addEventListener("click", (e) => {
    profile.style.display = "flex";
});

// 내 게시물
first.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.classList.add("active");
        second.forEach((sec) => {
            sec.classList.remove("active");
        });
        list[0].classList.add("active");
        list[1].classList.remove("active");
    });
});
// 게시물 삭제 버튼
remove.forEach((remove) => {
    remove.addEventListener("click", (e) => {
        del.style.display = "flex";
    });
});
cancle.addEventListener("click", (e) => {
    del.style.display = "none";
});

// 저장한 공고 목록
second.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.classList.add("active");
        first.forEach((fir) => {
            fir.classList.remove("active");
        });
        list[1].classList.add("active");
        list[0].classList.remove("active");
    });
});
let count = 0;
// 체험 공고 list
lists.forEach((list) => {
    count++;
    const experience = document.getElementById("experience");
    const employ = document.getElementById("employ");
    list.addEventListener("click", (e) => {
        lists.forEach((all) => {
            const allNotice = all.getElementsByClassName("notice")[0];
            allNotice.classList.remove("active");
        });
        const notice = list.getElementsByClassName("notice")[0];
        notice.classList.add("active");

        if (list === lists[0]) {
            experience.style.display = "contents";
            employ.style.display = "none";
        } else {
            experience.style.display = "none";
            employ.style.display = "contents";
        }
    });
});
