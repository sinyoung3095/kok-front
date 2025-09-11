const dropdown = document.querySelectorAll(".dropdown-container");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");

        let allActive = true;
        dropdownBtns.forEach((btn) => {
            if (!btn.classList.contains("active")) {
                allActive = false;
            }
        });

        isAllSelected = allActive;
    });
});

let isAllSelected = false;
dropdown.forEach((box) => {
    const dropdownOpenBtns = box.querySelectorAll(".dropdown-open-btn");
    const dropdownBtns = box.querySelectorAll(".dropdown-btn");
    const selectAllBtn = box.querySelector(".select-all-btn");
    const applyBtn = box.querySelector(".apply-btn");

    dropdownOpenBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            dropdown.forEach((otherBox) => {
                const otherBtns =
                    otherBox.querySelectorAll(".dropdown-open-btn");
                otherBtns.forEach((b) => b.classList.remove("active"));
            });

            btn.classList.toggle("active");
        });
    });

    selectAllBtn.addEventListener("click", () => {
        if (!isAllSelected) {
            dropdownBtns.forEach((btn) => btn.classList.add("active"));
            isAllSelected = true;
        } else {
            dropdownBtns.forEach((btn) => btn.classList.remove("active"));
            isAllSelected = false;
        }
    });

    applyBtn.addEventListener("click", () => {
        let firstText = null;
        let count = 0;

        dropdownBtns.forEach((btn) => {
            if (btn.classList.contains("active")) {
                count++;
                if (firstText === null) {
                    firstText = btn.textContent.trim();
                }
            }
        });

        if (count === 0) {
            dropdownOpenBtns.forEach((btn) => (btn.textContent = "전체"));
        } else if (count === 1) {
            dropdownOpenBtns.forEach((btn) => (btn.textContent = firstText));
        } else {
            dropdownOpenBtns.forEach(
                (btn) => (btn.textContent = `${firstText} 외 ${count - 1} 개`)
            );
        }

        dropdownOpenBtns.forEach((btn) => btn.classList.remove("active"));
    });
});

document.addEventListener("click", (e) => {
    dropdown.forEach((box) => {
        if (!box.contains(e.target)) {
            const openBtns = box.querySelectorAll(".dropdown-open-btn");
            openBtns.forEach((btn) => btn.classList.remove("active"));
        }
    });
});

const sortBtns = document.querySelectorAll(".sort-options .sort-btn");

// 필터 버튼 클릭 시 active 클래스 토글
sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sortBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
