document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edit-btn");
    const cancelBtn = document.getElementById("cancle-btn");
    const buttonWrap = document.querySelector(".button-wrap");
    const explainHide1 = document.getElementById("explain-hide1");
    const explainHide2 = document.getElementById("explain-hide2");
    let saveBtn = null;

    editBtn.addEventListener("click", function () {
        // 취소 버튼 보이기
        cancelBtn.style.display = "block";
        // 편집 버튼 숨기기
        editBtn.style.display = "none";
        // p태그 보이기
        explainHide1.style.display = "block";
        explainHide2.style.display = "block";

        // 저장 버튼 만들기
        if (!saveBtn) {
            saveBtn = document.createElement("button");
            saveBtn.className = "save-button";
            saveBtn.id = "save-btn";
            saveBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="edit-icon"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
                저장
            `;
            buttonWrap.appendChild(saveBtn);

            saveBtn.addEventListener("click", function () {
                // 취소 버튼 숨기기
                cancelBtn.style.display = "none";
                // 저장 버튼 지우기
                if (saveBtn) {
                    buttonWrap.removeChild(saveBtn);
                    saveBtn = null;
                }
                // p태그 숨기기
                explainHide1.style.display = "none";
                explainHide2.style.display = "none";
                // 편집 버튼 보이기
                editBtn.style.display = "";
            });
        }
    });
});
