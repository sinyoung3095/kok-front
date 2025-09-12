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


// 토스트 - 로그인 오류
const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};
const toastLogin = document.querySelector("#toast-login");
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
    }
});

// 토스트 - 이메일 입력 오류
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