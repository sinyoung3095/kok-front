// 드롭다운 옵션 버튼 클릭 시 active 클래스 토글 및 전체 선택 상태 업데이트
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

// 드롭다운 열기/닫기, 전체 선택, 적용 버튼 이벤트
let isAllSelected = false;
dropdown.forEach((box) => {
    const dropdownOpenBtns = box.querySelectorAll(".dropdown-open-btn");
    const dropdownBtns = box.querySelectorAll(".dropdown-btn");
    const selectAllBtn = box.querySelector(".select-all-btn");
    const applyBtn = box.querySelector(".apply-btn");

    // 드롭다운 열기/닫기 버튼 클릭 시 active 클래스 토글
    dropdownOpenBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const isActive = btn.classList.contains("active");

            dropdown.forEach((otherBox) => {
                const otherBtns =
                    otherBox.querySelectorAll(".dropdown-open-btn");
                otherBtns.forEach((b) => b.classList.remove("active"));
            });

            if (!isActive) {
                btn.classList.add("active");
            }
        });
    });

    // 전체 선택 버튼 클릭 시 모든 옵션 선택 또는 선택 해제
    selectAllBtn.addEventListener("click", () => {
        if (!isAllSelected) {
            dropdownBtns.forEach((btn) => btn.classList.add("active"));
            isAllSelected = true;
        } else {
            dropdownBtns.forEach((btn) => btn.classList.remove("active"));
            isAllSelected = false;
        }
    });

    // 적용 버튼 클릭 시 드롭다운 닫기 및 선택된 옵션에 따라 드롭다운 열기 버튼 텍스트 변경
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

        // 선택된 옵션에 따라 드롭다운 열기 버튼 텍스트 변경
        if (count === 0) {
            dropdownOpenBtns.forEach((btn) => (btn.textContent = "전체"));
        } else if (count === 1) {
            dropdownOpenBtns.forEach((btn) => (btn.textContent = firstText));
        } else {
            dropdownOpenBtns.forEach(
                (btn) => (btn.textContent = `${firstText} 외 ${count - 1} 개`)
            );
        }

        // 드롭다운 닫기
        dropdownOpenBtns.forEach((btn) => btn.classList.remove("active"));
    });
});

// 드롭다운 외부 클릭 시 드롭다운 닫기
document.addEventListener("click", (e) => {
    dropdown.forEach((box) => {
        if (!box.contains(e.target)) {
            const openBtns = box.querySelectorAll(".dropdown-open-btn");
            openBtns.forEach((btn) => btn.classList.remove("active"));
        }
    });
});

// 필터 버튼 클릭 시 active 클래스 토글
const sortBtns = document.querySelectorAll(".sort-options .sort-btn");
sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sortBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// 키워드 입력 시 50자 초과하면 토스트 메시지 노출
const keywordInput = document.querySelector("#keyword-input");
const toastKeyword = document.querySelector("#toast-keyword");
function checkKeywordLength() {
    if (keywordInput && toastKeyword) {
        if (keywordInput.value.length > 50) {
            toastKeyword.classList.add("show");

            setTimeout(() => {
                toastKeyword.classList.remove("show");
            }, 2000);
        } else {
            toastKeyword.classList.remove("show");
        }
    }
}

// 검색 버튼 클릭 시 토스트 메시지 체크
const searchButton = document.querySelector(".search-button");
if (searchButton) {
    searchButton.addEventListener("click", () => {
        checkKeywordLength();
    });
}

// 채용 공고 저장/저장 취소 버튼 클릭 시 토스트 메시지 노출
const saveToast = document.querySelector("#toast-save");
const saveBtn = document.querySelector(".detail-save-btn");

let saved = false; // 저장 상태
let showingToast = false; // 연타방지

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        if (showingToast) return; // 토스트 떠 있으면 무시

        const textBox = saveToast.querySelector("p");

        if (!saved) {
            saved = true;
            if (textBox) textBox.textContent = "채용 공고를 저장했어요.";
        } else {
            saved = false;
            if (textBox) textBox.textContent = "채용 공고 저장을 취소했어요.";
        }

        // 토스트 띄우기
        saveToast.classList.add("show");
        showingToast = true;

        setTimeout(() => {
            saveToast.classList.remove("show");
            showingToast = false;
        }, 2000);
    });
}

const shareToast = document.querySelector("#toast-share");
const shareBtn = document.querySelector(".detail-share-btn");

if (shareBtn) {
    shareBtn.addEventListener("click", () => {
        if (showingToast) return; // 토스트 떠 있으면 무시
        // 토스트 띄우기
        shareToast.classList.add("show");
        showingToast = true;
        setTimeout(() => {
            shareToast.classList.remove("show");
            showingToast = false;
        }, 2000);
    });
}
