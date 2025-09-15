const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};
const inputEmail = document.getElementById('input-email');
const toastEmail = document.getElementById('toast-email');
const buttonSubmit = document.querySelector('.btn-submit');
// 이메일 오류 토스트
function showEmailErrorToast() {
    toastEmail.classList.add("show");
    setTimeout(() => {
        toastEmail.classList.remove("show");
    }, 3000);
}

inputEmail.addEventListener("input", (e) => {
    if (isValidEmail(e.target.value)) {
        buttonSubmit.classList.remove('inactive');
    } else {
        buttonSubmit.classList.add('inactive');
    }
});

buttonSubmit.addEventListener("click", (e) => {
    if (!isValidEmail(inputEmail.value) || inputEmail.value < 1) {
        showEmailErrorToast();
    }
});