// 토스트 - 입력 오류
const submitButton = document.querySelector(".submit-button");

const toastName = document.getElementById("toast-name");
const toastNumber = document.getElementById("toast-number");
const toastEmail = document.getElementById("toast-email");
const toastPassword = document.getElementById("toast-password");

const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

// 이메일 검사
const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

// 전화번호 포맷팅
function formatPhoneNumber(input) {
    input.value = input.value
        .replace(/[^0-9]/g, '')
        .replace(/(^02|^01[0-9]|[0-9]{3})([0-9]+)?([0-9]{4})$/, '$1 $2 $3');
}

function showNameErrorToast() {
    toastName.classList.add("show");
    setTimeout(() => {
        toastName.classList.remove("show");
    }, 3000);
}
function showNumberErrorToast() {
    toastNumber.classList.add("show");
    setTimeout(() => {
        toastNumber.classList.remove("show");
    }, 3000);
}
function showEmailErrorToast() {
    toastEmail.classList.add("show");
    setTimeout(() => {
        toastEmail.classList.remove("show");
    }, 3000);
}
function showPasswordErrorToast() {
    toastPassword.classList.add("show");
    setTimeout(() => {
        toastPassword.classList.remove("show");
    }, 3000);
}


submitButton.addEventListener("click", (e) => {
    if (inputName.value.length === 0 || inputName.value == null) {
        showNameErrorToast();
    } else if (inputNumber.value.length === 0 || inputNumber.value == null || inputNumber.value.trim().length < 13) {
        showNumberErrorToast();
    } else if (inputEmail.value.length === 0 || inputEmail.value == null || !isValidEmail(inputEmail.value)) {
        showEmailErrorToast();
    } else if (inputPassword.value.length === 0 || inputPassword.value == null || inputPassword.value.trim().length < 4) {
        showPasswordErrorToast();
    }
});