
## 📱 UI/UX 설계 및 클론코딩
<br><br>


### 벤치마킹

-   ‘로켓펀치’를 벤치마킹하여 **화면 구현 능력단위**에서 배운 기술들로 화면을 직접 구현했습니다.
-   **HTML**로 화면의 구조를 잡고 **CSS**를 이용하여 디자인을 만들었으며 **JavaScript**를 통해 이벤트를 주어 홈페이지를 구현했습니다.
-   클라이언트의 시선에서 필요한 UI/UX를 더 발전 시켰습니다.

  <br><br>

**예시 이미지**

<img width="1911" height="955" alt="image" src="https://github.com/user-attachments/assets/47e71c5f-a565-40d1-a082-ace8d48643da" />
  <br><br>

**실제 클론 코딩 이미지**<br>

▶ 마이페이지

<img width="1920" height="1342" alt="마이페이지-콕" src="https://github.com/user-attachments/assets/e6b5f412-eda9-4069-9aee-d3fb59f64b07" />

▶ 커뮤니티

<img width="1920" height="1440" alt="커뮤니티-콕" src="https://github.com/user-attachments/assets/b007c933-b685-4ad7-87a2-ddd312477811" />


---
  
### [front]

▶ 진행도


<img width="1010" height="250" alt="image" src="https://github.com/user-attachments/assets/8cc4e568-a662-49c3-b920-e964541fa9ca" />
 <br>  <br>


▶ 마이페이지

- 프로필 편집, 공유
- 내게시물
- 저장한 공고
- 지원내역
- 결제 내역
- 이력서 보관함
- 광고창



▶ 커뮤니티

- 커뮤니티 목록
- 댓글 및 답글 화면
- 신규 체험공고 목록
- 광고창
  
### 커뮤니티 화면 앱 전환

**통합 구현 능력단위**에서 배운 react-native와 webviw를 이용하여 모바일 환경에서도 볼 수 있는 커뮤니티 화면을 구현 하였습니다.

<img width="540" height="1200" alt="image" src="https://github.com/user-attachments/assets/38fe9159-86b6-401f-88f1-a46569b12f01" />

  <br><br>
### [Back]
<br>
▶ ERD (Entity Relationship Diagram) <br>

- **데이터베이스 구현 능력단위**에서 배운 **DDL** 문법을 이용하여 테이블을 설계하였고 테이블 간의 관계를 제약조건을 걸어 관계를 구성했습니다.
  관계 구성 시 정규화를 통해 데이터 중복을 최소화했습니다.
- **SQL 활용 능력단위**에서 배운 **DML(INSERT, UPDATE, DELETE, SELECT)** 문법을 사용하여 CRUD(추가·수정·삭제·조회)를 구현 할 수 있었습니다.

<img width="8866" height="6252" alt="image" src="https://github.com/user-attachments/assets/e7285cda-25af-4332-80f0-26e466395024" />


<br><br>
▶ 진행도
  <br>
<img width="1838" height="342" alt="image" src="https://github.com/user-attachments/assets/6f99fcc2-cfff-4a81-a765-686e88fe7055" />

<br><br>

▶ 회원가입(일반회원, 기업회원)

- 아이디, 이메일 중복 검사
- 아이디, 이메일, 이름, 휴대폰 입력 형식 검사
- 필수 정보 입력 여부 검사
- 조건 충족 시 회원가입
- 카카오 Oauth를 이용한 간편 회원가입
- 네이버 Oauth를 이용한 간편 회원가입
- 구글 Oauth를 이용한 간편 회원가입

▶ 로그인(일반회원, 기업회원)

- Jwt security를 이용한 보안 로그인 기능 구현
- 카카오 Oauth를 이용한 간편 로그인
- 네이버 Oauth를 이용한 간편 로그인
- 구글글 Oauth를 이용한 간편 로그인
- 로그아웃 기능 구현

▶ 아이디 찾기(일반회원, 기업회원)

- 사용자가 입력한 전화번호로 인증번호 전송
- 인증 코드가 일치할 경우 아이디 표시 페이지 이동

▶ 비밀번호 찾기(일반회원, 기업회원)

- 사용자가 입력한 이메일로 인증링크 전송
- 인증 코드가 일치할 경우 비밀번호 변경페이지 이동
- 비밀번호 변경 구현
<br><br>
 
▶ 헤더(일반회원, 기업회원)

- 일반 회원 지원내역 
- 로그아웃 구현

▶ 사이드바(일반회원, 기업회원)

- 알람 설정
- 프로필 정보 구현
- 통합 검색 구현
 <br><br><br>


## 오류 상황 및 해결

<h4>1. 📌Oauth 계정의 accessToken의 재발급 오류</h4>

🌩문제 상황🌩<br>
<img width="1139" height="579" alt="oauth_reflesh_re_오류" src="https://github.com/user-attachments/assets/5b8ab062-2de0-495b-a7d9-34ef2528d763" />
<br><br>
<img width="1662" height="163" alt="oauth_reflesh_re_오류_2" src="https://github.com/user-attachments/assets/00bfa29c-75b0-4344-bb77-81e7806ab7bf" />
sns 간편로그인을 할 경우, accessToken의 기간이 만료하여 삭제 됐을 때 쿠키에 있는 refreshToken을 redis에 있는 토큰과 검사하여 인증 정보가 같으면 발급 해야 하는데 인증 단계에서 오류가 생겼습니다.<br><br>
🚨문제 원인🚨 <br>
<img width="1673" height="381" alt="oauth_reflesh_re_원인" src="https://github.com/user-attachments/assets/50202100-8169-48e5-957b-13155aefd7a0" />

refreshToken을 재발급 하는 과정에서 Oauth계정과 일반 로그인 계정의 분리를 하지 않아서 redis의 토큰과 accessToken 토큰의 인증 정보가 달라졌습니다. <br><br>
🚀해결 방법🚀<br>
<img width="1660" height="636" alt="oauth_reflesh_re_해결" src="https://github.com/user-attachments/assets/2e4aa659-a1f3-4e53-86d9-ffd6994430a3" />

재발급하는 과정에서 provider 쿠키를 받아와서 일반 계정과 Oauth 계정의 차이를 구분하여 재발급하는 과정을 다르게 했습니다. 
<br><br><br>



<h4>2. 📌메인페이지 헤더와 사이드바의 객체 인식 오류</h4> <br>
🌩문제 상황🌩<br>

<img width="1919" height="916" alt="profile_오류-1" src="https://github.com/user-attachments/assets/3be08d42-a1fe-490f-8cf3-066de3dd1739" />

메인페이지의 헤더와 사이드바를 다른 페이지에 반영하는 과정에서 MemberDTO 객체의 인식이 안되는 문제가 있었습니다.<br><br>
🚨문제 원인🚨 <br>
반영되어지는 각 페이지의 memberDTO 객체가 Model 객체에 추가되어 헤더와 사이드바에 추가 되는 객체와 중복되어 문제가 생겼습니다. <br><br>
🚀해결 방법🚀<br>
<img width="1211" height="517" alt="image" src="https://github.com/user-attachments/assets/8680172a-c0a6-4175-8b6b-3dba94bc8882" />

intercepter를 이용해서 헤더와 사이드바가 들어가는 페이지에 동일한 객체를 전달하여 객체를 통일 시켰습니다.
<br><br><br>



<h4>3. 📌PostgreSql의 enumuration 오류</h4> <br>
🌩문제 상황🌩<br>
<img width="1254" height="933" alt="enum오류-1" src="https://github.com/user-attachments/assets/5a52a938-18e5-4f00-8897-e8f0a3bc96f0" />
Enum의 인식에 문제가 있었습니다.
<br><br>
🚨문제 원인🚨 <br>
<img width="1421" height="345" alt="enum오류-3" src="https://github.com/user-attachments/assets/b251d08d-bad1-4998-8a9f-c9271e0c8c80" />
MySql과는 다르게 PostgreSql은 enum을 객체로 인식하기 때문에 재정립하는 방법이 달랐습니다.
 <br><br>
🚀해결 방법🚀<br>
<img width="1394" height="561" alt="enum오류-해결" src="https://github.com/user-attachments/assets/10a4120d-624f-4fa4-bdec-63c2b6faa33a" />
핸들러에서 객체로 세팅해주어 인식의 오류를 해결했습니다.
<br>

## AWS Cloud 배포
![load-balancing](https://github.com/user-attachments/assets/0f57f6d3-c3cd-41fe-a1b0-78bc1c67b44a)


## 총평

<h4> 😅 어려웠던 부분</h4>
  📌jwt Security를 이용해서 보안을 높이고 사용하는데 있어서 다양한 오류를 직면 했고 전체 순환 구조를 이해하는데 힘들었고 <br>
  ✔ 단계가 익숙하지 않아 유지 보수가 어려웠지만, 구조를 익히고 수정하는 과정을 통해 파악을 더 잘할수 있게 되었습니다.<br><br>
<br>
<h4>🌟 기획: 완벽한 기획이란 없다.  </h4>
 기획을 하는 과정에서 충분하다고 생각하여 개발을 시작했으나 중간에 필요한 부분이 생기거나 아주 세세한 부분에서 문제가 생긴다는 것을 알게 됐습니다. 예로 user테이블에서 member테이블과 company테이블로 fk를 주었고 profile사진을 저장하는 중간 테이블이 user_profile테이블과 company_profile테이블로 나눠져서 서로 저장하는 위치가 헷갈려서 user_profile테이블에 전체 저장하는 팀원과 company_profile에 따로 저장하는 팀원이 생겨났습니다.

<h4>🌟 협업: 소통은 바로바로 해야한다. </h4>
 팀원들과의 소통에는 자신이 있었습니다. 그러나 사이의 원만함과 빈도수와는 별개로 프로젝트 진행 시 나의 작업 진행 상황과 오류 발생 부분, 백업을 어디까지 했는지 등 상세하고 자세하게 공유해야 한다는 것을 알게 되었습니다. 예를 들어 프로젝트 작업 중 깃허브에서 충돌이 발생하여 브랜치 생성 시 이 내용까지 공유하지 않으면, 다른 팀원들의 코드에도 영향을 미칠 수 있으며, 이 사실을 모르는 팀원이 직접 해결하기까지는 적지 않은 시간이 소요된다는 것을 알게 되었습니다.


<h4>🌟앞으로의 계획: 더욱 발전하는 개발자가 되자. </h4>
 이번 프로젝트에서는 처음 접해보는 Oauth와 Jwt Security를 구현해 보았습니다. 클라이언트가 모르는 뒷편에서 얼마나 많은 작업이 이루어지고 그 과정이 보안에 있어어 직접적으로 연결된다는 점을 이해하게 되었습니다. 물론 처음이라 어려웠지만, 주변의 도움과 코드 이해를 통하여 오류를 하나하나 해결해 갔고 끝에는 제대로 작동하게 만들어서 뿌듯함을 느낄수 있었습니다. 앞으로 더 많은 기술들을 접목해서 다양한 기능을 구현을 해보고싶다는 생각을 가지게 되었습니다. 
