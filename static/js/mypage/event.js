HTMLCollection.prototype.forEach = Array.prototype.forEach;
const first = document.getElementsByClassName("first");
const second = document.getElementsByClassName("second");
const list = document.getElementsByClassName("post-1");

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
