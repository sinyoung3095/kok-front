// 로그인 방법 선택
const generalMember = document.querySelector('.general-member');
const companyMember = document.querySelector('.company-member');
companyMember.classList.add('unselected');
companyMember.classList.remove('select-login-type');

generalMember.addEventListener("click", (e) => {
    generalMember.classList.add('select-login-type');
    generalMember.classList.remove('unselected');
    companyMember.classList.remove('select-login-type');
    companyMember.classList.add('unselected');
});

companyMember.addEventListener("click", (e) => {
    generalMember.classList.remove('select-login-type');
    generalMember.classList.add('unselected');
    companyMember.classList.add('select-login-type');
    companyMember.classList.remove('unselected');
});


// 로그인 버튼 활성화/비활성화
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

emailInput.addEventListener("keyup", (e) => {
    if (emailInput.value.length > 0 && passwordInput.value.length > 0) {
        loginButton.classList.remove('login-disabled'); 
    } else if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
        loginButton.classList.add('login-disabled');
    }
});

passwordInput.addEventListener("keyup", (e) => {
    if (emailInput.value.length > 0 && passwordInput.value.length > 0) {
        loginButton.classList.remove('login-disabled');
    } else if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
        loginButton.classList.add('login-disabled');
    }
});


// 토스트 - 로그인 오류(이메일)
const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};
const toastLogin = document.querySelector("#toast-login");
const toastEmail = document.querySelector("#toast-email");

function showLoginErrorToast() {
    toastLogin.classList.add("show");

    // 3초 후에 토스트 메시지 숨기기
    setTimeout(() => {
        toastLogin.classList.remove("show");
    }, 3000);
}

loginButton.addEventListener("click", (e) => {
    if (!isValidEmail(emailInput.value)) {
        showLoginErrorToast();
    }   // 이메일 형식이 올바르지 않을 때
});

toastLogin.addEventListener("mouseover", (e) => {
    toastEmail.classList.add("show-red");
});     // 로그인 오류 토스트에 마우스 오버 시 이메일 오류 토스트 표시

toastLogin.addEventListener("mouseout", (e) => {
    toastEmail.classList.remove("show-red");
});     // 로그인 오류 토스트에서 마우스 아웃 시 이메일 오류 토스트 숨김

