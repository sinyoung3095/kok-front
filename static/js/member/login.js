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