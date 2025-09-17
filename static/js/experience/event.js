// 서치 드롭다운 옵션 버튼 클릭 시 active 클래스 토글 및 전체 선택 상태 업데이트
function searchDropdownFn() {
    let isAllSelected = false;
    const dropdown = document.querySelectorAll(".dropdown-container");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    if (!dropdown) return;

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
                dropdownOpenBtns.forEach(
                    (btn) => (btn.textContent = firstText)
                );
            } else {
                dropdownOpenBtns.forEach(
                    (btn) =>
                        (btn.textContent = `${firstText} 외 ${count - 1} 개`)
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
}
searchDropdownFn();

// 접합순, 인기순, 최신순 - 필터 버튼 클릭 시 active 클래스 토글
function sortBtnFn() {
    const sortBtns = document.querySelectorAll(".sort-options .sort-btn");

    if (!sortBtns) return;

    sortBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            sortBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}
sortBtnFn();

// 키워드 입력 시 50자 초과하면 토스트 메시지 노출
function keywordInputValidate() {
    const keywordInput = document.querySelector("#keyword-input");
    const toast = document.querySelector("#toast-red");
    const deleteBtn = document.querySelector(".keyword-delete");

    if (!keywordInput) return;

    function checkKeywordLength() {
        if (keywordInput && toast) {
            if (keywordInput.value.length > 50) {
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            } else {
                toast.classList.remove("show");
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

    // 엔터 입력 시 체크
    keywordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            checkKeywordLength();
        }
    });

    // 모바일 인풋 삭제
    deleteBtn.style.display = "none";

    keywordInput.addEventListener("input", () => {
        if (keywordInput.value.trim() !== "") {
            deleteBtn.style.display = "inline-block"; // 보이게
        } else {
            deleteBtn.style.display = "none"; // 숨기기
        }
    });

    // 삭제 버튼 클릭 시 인풋 비우고 버튼 숨기기
    deleteBtn.addEventListener("click", () => {
        keywordInput.value = "";
        deleteBtn.style.display = "none";
        keywordInput.focus(); // 다시 입력할 수 있게 포커스 주기
    });
}
keywordInputValidate();

// 채용상세페이지 - 레이아웃
function layoutDetail() {
    const listItemBtns = document.querySelectorAll(".list-item-btn");
    const contentDetail = document.querySelector(".content-detail");
    const contentSide = document.querySelector(".content-side");
    const detailArrowBtn = document.querySelector(".detail-arrow-btn");
    const listItemMetas = document.querySelectorAll(".list-item-meta");
    const contentMain = document.querySelector(".content-main");
    const searchContainer = document.querySelector(".search-container");

    listItemBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            contentSide.style.display = "none";
            contentDetail.style.display = "block";
            requestAnimationFrame(() => {
                contentDetail.classList.add("active");
            });
            listItemMetas.forEach((meta) => {
                meta.style.display = "none";
            });

            if (window.matchMedia("(max-width: 1023px)").matches) {
                contentMain.style.display = "none";
                searchContainer.style.display = "none";
            }
        });
    });

    detailArrowBtn.addEventListener("click", () => {
        contentDetail.style.display = "none";
        contentSide.style.display = "flex";
        requestAnimationFrame(() => {
            contentSide.classList.add("active");
        });

        listItemMetas.forEach((meta) => {
            meta.style.display = "flex";
        });

        if (window.matchMedia("(max-width: 1023px)").matches) {
            contentMain.style.display = "";
            searchContainer.style.display = "";
        }
    });
}
layoutDetail();

// 채용 - 공고 저장/저장 취소, 공유하기  버튼 클릭 시 토스트 메시지 노출
function toastPopupFn() {
    const saveToast = document.querySelector("#toast-white");
    const saveBtn = document.querySelector(".detail-save-btn");

    let saved = false; // 저장 상태
    let showingToast = false; // 연타방지

    // 공고 저장/저장 취소
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            if (showingToast) return; // 토스트 떠 있으면 무시

            const textBox = saveToast.querySelector("p");

            if (!saved) {
                saved = true;
                if (textBox) textBox.textContent = "채용 공고를 저장했어요.";
            } else {
                saved = false;
                if (textBox)
                    textBox.textContent = "채용 공고 저장을 취소했어요.";
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

    // 공유하기
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
}
toastPopupFn();

// 인풋 파일 등록
function fileInputFn() {
    const fileInput = document.getElementById("file-input");
    const formFileLabel = document.querySelector(".form-file-label");

    if (!fileInput) return;

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            formFileLabel.textContent = fileInput.files[0].name;
        } else {
            formFileLabel.textContent = "파일";
        }
    });
}
fileInputFn();

// 팝업
function popupFn() {
    const triggers = document.querySelectorAll(".popup-trigger");
    const popups = document.querySelectorAll(".popup-container");
    const dropdowns = document.querySelectorAll(".option-menu");

    if (!triggers) return;

    // 팝업 - from 안의 버튼 submit 막기
    document.addEventListener(
        "submit",
        (e) => {
            if (e.target.closest(".popup-container")) {
                e.preventDefault();
            }
        },
        true
    );

    // 팝업 열기
    triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const target = trigger.getAttribute("data-target");
            const popup = document.querySelector(target);

            // 드롭다운도 전부 닫기
            dropdowns.forEach((menu) => menu.classList.remove("active"));

            // 다른 팝업 닫기 (data-sticky가 붙어있는 팝업 제외)
            popups.forEach((pop) => {
                if (!pop.hasAttribute("data-sticky")) {
                    pop.classList.remove("active");
                }
            });

            // 현재(부모) 팝업 닫기 - 스티키면 유지
            const parentPopup = trigger.closest(".popup-container");
            if (parentPopup && !parentPopup.hasAttribute("data-sticky")) {
                parentPopup.classList.remove("active");
            }

            // 해당 팝업 열기
            if (popup) {
                popup.classList.add("active");
            }
        });
    });

    // 팝업 닫기 버튼
    const popupRemoves = document.querySelectorAll(".popup-remove");
    popupRemoves.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
            const popup = closeBtn.closest(".popup-container");
            if (popup) {
                popup.classList.remove("active");
            }
        });
    });

    // 바깥 클릭 시 닫기
    // document.addEventListener("click", (e) => {
    //     document
    //         .querySelectorAll(".popup-container.active")
    //         .forEach((popup) => {
    //             if (
    //                 !e.target.closest(".popup-inner") &&
    //                 !e.target.closest(".popup-trigger")
    //             ) {
    //                 popup.classList.remove("active");
    //             }
    //         });
    // });
}
popupFn();

// 드롭다운
function dropdownFn() {
    const triggers = document.querySelectorAll(".dropdown-trigger");
    const menus = document.querySelectorAll(".option-menu");

    if (!triggers) return;

    // 드롭다운 열기
    triggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();

            // 다른 드롭다운 닫기
            menus.forEach((menu) => menu.classList.remove("active"));

            const target = trigger.getAttribute("data-target");
            const menu = document.querySelector(target);

            if (menu) {
                menu.classList.add("active");
            }
        });
    });

    // 옵션 클릭 시 input에 값 반영 + 닫기
    document.querySelectorAll(".option-item").forEach((item) => {
        item.addEventListener("click", () => {
            const dropdown = item.closest(".form-field-dropdown");
            const input = dropdown.querySelector(".dropdown-trigger");
            const target = input.getAttribute("data-target");
            const menu = document.querySelector(target);

            // 직접 입력
            if (item.classList.contains("option-input")) {
                dropdown.classList.add("is-manual");
                if (input) {
                    input.readOnly = false;
                    input.value = "";
                    input.focus();
                }
                menu.classList.remove("active");
                return;
            }

            // 일반 옵션
            const text = item.innerText.trim();
            if (input && input.tagName === "INPUT") {
                input.value = text;
                input.readOnly = true;
                dropdown.classList.remove("is-manual");
            }
            menu.classList.remove("active");
        });
    });

    // 바깥 클릭 시 닫기
    // document.addEventListener("click", () => {
    //     menus.forEach((menu) => menu.classList.remove("active"));
    // });
}
dropdownFn();

// 보관함 유효성 검사 - 파일 추가
function checkPopupLibrary() {
    const applyBtn = document.querySelector("#popup3 #pop-apply");
    const form = document.querySelector("#popup3 form");
    const libraryToast = document.querySelector("#toast-library");
    const typeInput = document.querySelector("#popup3 #type-input");
    const fileInput = document.querySelector("#popup3 #file-input");
    const fileLabel = document.querySelector("#popup3 .form-file-label");

    if (!applyBtn || !form) return;

    // 유효성 검사
    const validate = () => {
        if (typeInput.value.trim() === "") {
            libraryToast.classList.add("show");
            setTimeout(() => {
                libraryToast.classList.remove("show");
                showingToast = false;
            }, 2000);

            typeInput.focus();
            return false;
        }
        if (!fileInput.files || fileInput.files.length === 0) {
            libraryToast.classList.add("show");
            setTimeout(() => {
                libraryToast.classList.remove("show");
                showingToast = false;
            }, 2000);

            return false;
        }
        return true;
    };

    // 버튼 클릭일 때만 검사
    applyBtn.addEventListener("click", () => {
        if (!validate()) return;
        document.getElementById("popup3").classList.remove("active");

        // 초기화
        if (typeInput) typeInput.value = "";
        if (fileInput) fileInput.value = "";
        if (fileLabel) fileLabel.textContent = "파일";
    });
}
checkPopupLibrary();

// 보관함 유효성 검사 - url 추가
function checkPopupLibraryUrl() {
    const applyBtn = document.querySelector("#popup4 #pop-apply");
    const form = document.querySelector("#popup4 form");
    const libraryToast = document.querySelector("#toast-library");
    const toastSubText = libraryToast.querySelector(".toast-subText");
    const typeInput = document.querySelector("#popup4 #type-input");
    const urlInput = document.querySelector("#popup4 #url-input");
    if (!applyBtn || !form) return;

    // 유효성 검사
    const validate = () => {
        if (typeInput.value.trim() === "") {
            libraryToast.classList.add("show");
            setTimeout(() => {
                libraryToast.classList.remove("show");
            }, 2000);

            typeInput.focus();
            return false;
        }
        if (urlInput.value.trim() === "") {
            toastSubText.textContent = "URL을 입력해주세요.";

            libraryToast.classList.add("show");
            setTimeout(() => {
                libraryToast.classList.remove("show");
            }, 2000);

            urlInput.focus();
            return false;
        }
        return true;
    };

    // 버튼 클릭일 때만 검사
    applyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!validate()) return;

        // 팝업 닫기
        document.getElementById("popup4").classList.remove("active");

        // 초기화
        if (typeInput) typeInput.value = "";
        if (urlInput) urlInput.value = "";
    });
}
checkPopupLibraryUrl();

// 보관함 닫기 공통: 닫기 클릭시 확인 팝업 띄우기
function popupLibraryClose(popupId, inputSelectors) {
    const popup = document.getElementById(popupId);
    const closeBtn = popup.querySelector(".popup-library-close");
    const popup5 = document.getElementById("popup5");

    if (!popup || !closeBtn) return;

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // 입력값 체크
        let hasValue = false;
        inputSelectors.forEach((sel) => {
            const input = popup.querySelector(sel);
            if (!input) return;

            if (input.type === "file") {
                if (input.files && input.files.length > 0) hasValue = true;
            } else {
                if (input.value && input.value.trim() !== "") hasValue = true;
            }
        });

        if (hasValue) {
            // 값이 하나라도 있으면 확인 팝업(#popup5) 열기
            popup5.classList.add("active");
        } else {
            // 값이 없으면 그냥 닫기
            popup.classList.remove("active");
        }
    });
}
popupLibraryClose("popup3", ["#type-input", "#file-input"]);
popupLibraryClose("popup4", ["#type-input", "#url-input"]);

// 이력서 팝업 이전 버튼 클릭시
function setupPopupPrev() {
    const prevBtn = document.querySelector("#popup2 .popup-prev");
    const popup1 = document.getElementById("popup1");
    const popup2 = document.getElementById("popup2");
    if (!prevBtn || !popup1 || !popup2) return;

    // 혹시 모를 제출 방지
    prevBtn.type = "button";

    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        // 열려있던 드롭다운 있으면 닫기(선택)
        document
            .querySelectorAll(".option-menu.active")
            .forEach((m) => m.classList.remove("active"));

        // 팝업 전환
        popup2.classList.remove("active");
        popup1.classList.add("active");
    });
}
setupPopupPrev();

// 간편지원하기 팝업
function checkPopup1() {
    const popup = document.getElementById("popup1");
    if (!popup) return;

    const submitBtn = popup.querySelector(".popup-action .btn-primary");
    const toast = document.getElementById("toast-red");
    const toastText = toast.querySelector(".toast-text");

    const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
    const isPhone = (v) => {
        const d = v.replace(/[^\d]/g, "");
        return d.length >= 9 && d.length <= 11; // 국내 9~11자리 간단 체크
    };

    submitBtn.addEventListener("click", () => {
        const name = popup.querySelector("#name-input");
        const email = popup.querySelector("#email-input");
        const phone = popup.querySelector("#phone-input");
        const resume = popup.querySelector("#resume-value"); // ← 팝업2에서 채워줄 값

        // 이름을 입력안했을때
        if (!name.value.trim()) {
            if (toast) {
                toastText.textContent = "이름을 입력해주세요.";
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }
            name.focus();
            return;
        }

        // 이메일을 입력안했을때
        if (!email.value.trim()) {
            if (toast) {
                toastText.textContent = "이메일을 입력해주세요.";
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }
            name.focus();
            return;
        }

        // 이메일 형식이 맞지 않을때
        if (!isEmail(email.value)) {
            if (toast) {
                toastText.textContent = "올바른 이메일 형식이 아닙니다";
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }
            email.focus();
            return;
        }

        // 전화번호를 입력안했을때
        if (!phone.value.trim()) {
            if (toast) {
                toastText.textContent = "전화번호를 입력해주세요.";
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }
            name.focus();
            return;
        }

        // 전화번호 형식이 맞지 않을때
        if (!isPhone(phone.value)) {
            if (toast) {
                toastText.textContent = "전화번호 형식을 확인해 주세요.";
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }
            phone.focus();
            return;
        }

        // 이력서를 선택하지 않았을때
        if (!resume || !resume.value) {
            if (toast) {
                toastText.textContent = "이력서를 선택해주세요.";
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }
            popup.querySelector(".file-btn").focus();
            return;
        }

        popup.classList.remove("active");
    });
}
checkPopup1();

// 이력서선택 팝업
function setPopup2() {
    var popup2Box = document.getElementById("popup2");
    var popup1Box = document.getElementById("popup1");
    if (!popup2Box || !popup1Box) return;

    var doneBtn = popup2Box.querySelector("#file-select-btn");
    var allRadiobox = popup2Box.querySelectorAll('input[type="radio"]');
    if (!doneBtn) return;

    // 체크 - 버튼 활성/비활성
    function updateDoneBtn() {
        var anyChecked = popup2Box.querySelector('input[type="radio"]:checked');
        doneBtn.disabled = !anyChecked;
    }
    for (var i = 0; i < allRadiobox.length; i++) {
        allRadiobox[i].addEventListener("change", updateDoneBtn);
    }
    updateDoneBtn();

    // 선택 완료 클릭하면 popup1에 값 넣기
    doneBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var checkedBoxes = popup2Box.querySelectorAll(
            'input[type="radio"]:checked'
        );
        if (!checkedBoxes || checkedBoxes.length === 0) return;

        // 파일명/URL
        var nameList = [];
        for (var j = 0; j < checkedBoxes.length; j++) {
            var cb = checkedBoxes[j];
            var itemBox = cb.closest(".form-item");
            var fileName = itemBox.querySelector(".file-name");

            var text = fileName.textContent ? fileName.textContent.trim() : "";
            if (text) nameList.push(text);
        }
        var joinedValue = nameList.join(", ");

        // 숨김 input(#resume-value)에 값 저장
        var formPopup1 = popup1Box.querySelector("form");
        var resumeInput = popup1Box.querySelector("#resume-value");
        if (!resumeInput) {
            resumeInput = document.createElement("input");
            resumeInput.type = "hidden";
            resumeInput.id = "resume-value";
            resumeInput.name = "resume";
            if (formPopup1) formPopup1.appendChild(resumeInput);
        }
        resumeInput.value = joinedValue;

        // 표시용 버튼 텍스트 변경
        var fileButton = popup1Box.querySelector(".file-btn");
        if (fileButton) {
            fileButton.textContent = nameList[0];
        }

        // 팝업 전환
        popup2Box.classList.remove("active");
        popup1Box.classList.add("active");

        // 다음 열 때 초기화
        for (var k = 0; k < checkedBoxes.length; k++) {
            checkedBoxes[k].checked = false;
        }
        updateDoneBtn();
    });
}
setPopup2();

// 팝업 전체 닫기
function popAllClose() {
    const popupAllCloses = document.querySelector(".popup-all-close");
    if (!popupAllCloses) return;

    function closeAllPopups() {
        document
            .querySelectorAll(".popup-container")
            .forEach((popup) => popup.classList.remove("active"));
    }

    popupAllCloses.addEventListener("click", closeAllPopups);
}
popAllClose();
