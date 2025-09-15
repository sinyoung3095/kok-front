// 토스트 - 입력 오류
const submitButton = document.querySelector(".submit-button");

const toastName = document.getElementById("toast-name");
const toastNumber = document.getElementById("toast-number");
const toastEmail = document.getElementById("toast-email");
const toastPassword = document.getElementById("toast-password");
const toastCompanyNumber = document.getElementById("toast-company-number");

const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const inputCompanyNumber = document.getElementById("input-company-number");

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

// 사업자 번호 포맷팅
function formatBizNumber(input) {
    // 1) 숫자만 남기기, 10자리 제한
    input.value = input.value.replace(/\D/g, '').slice(0, 10);

    // 2) 자리수에 따라 점진적으로 하이픈 삽입
    if (input.value.length > 5) {
        // 3-2-나머지 (최대 5자리)
        input.value = input.value.replace(/^(\d{3})(\d{2})(\d+)/, '$1-$2-$3');
    } else if (input.value.length > 3) {
        // 3-나머지
        input.value = input.value.replace(/^(\d{3})(\d+)/, '$1-$2');
    }

    return input.value;
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
function showCompanyNumberErrorToast() {
    toastCompanyNumber.classList.add("show");
    setTimeout(() => {
        toastCompanyNumber.classList.remove("show");
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
    } else if (inputCompanyNumber.value.length === 0 || inputCompanyNumber.value == null || inputCompanyNumber.value.trim().length < 12) {
        showCompanyNumberErrorToast();
    }
});