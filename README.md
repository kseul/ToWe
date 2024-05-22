# 33기 1차 프로젝트 6팀 ToWe

![KakaoTalk_Photo_2022-05-28-22-53-59 001](https://user-images.githubusercontent.com/93895746/172115466-3caf6857-746e-4436-9184-a49d6006a035.png)




## 프로젝트 선정이유

- 깔끔하고 아기자기한 UI로 보기 좋게 레이아웃을 잡고, 기능 구현에 중점을 두어 개발할 수 있다.
- 커머스 사이트로써 기본적인 페이지 구성이 잘 되어 있다.

<br><br>

## 프로젝트 소개

한정된 기간동안 기획과 디자인보다는 개발에 집중하기 위해서 일부를 (무직타이거)을 참조하여 학습목적으로 제작하였습니다. <br>
코드 및 이미지를 남용 및 악용할 경우 법적으로 문제될 수 있습니다. <br>
이 프로젝트에서 사용되고 있는 로고 및 배너는 해당 프로젝트 팀 소유이므로 외부인이 허가없이 사용할 수 없습니다.

<br><br>

## 1. 프로젝트 기간 및 인원

**프로젝트 기간**
22.05.23 ~ 22.06.03 (약2주)

<br><br>

## 2. 개발 인원

#### Front-end : 김형석, 김슬비, 김정준, 노해리, 유지후

#### Back-end : 정치영, 정병휘

<br><br>

## 3. 구현 항목

### 필수구현

#### 회원가입 / 로그인, 메인페이지, 상품 리스트, 상품 상세, 장바구니, Nav / Footer, 마이페이지

### 추가 구현

#### 베스트10, 주문하기(포인트결제), 리뷰 / 게시판

<br><br>

## 4. 기술 스택

### Front-end

: HTML/CSS, JavaScript, React.js, React-Router, Sass

### Back-end

: Python, Django

<br><br>

## 5. 협업도구

### (1) Trello

![](https://velog.velcdn.com/images/seul06/post/278a77fb-8985-45c4-b809-763545d0b289/image.png)

- 팀원간 프로젝트 협업도구로는 Trello를 활용했다.

<br>

### (2)Slack

![스크린샷 2022-06-06 오후 4 44 42](https://user-images.githubusercontent.com/93895746/172118267-98978164-f17e-44ae-b36d-ef1fed4518f4.png)

<br>
<br>

## Front-end 기능 구현
✍️ [프로젝트 회고](https://velog.io/@seul06/towe-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0) <br>
✍️ [메인페이지 애니메이션 구현 기록](https://velog.io/@seul06/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)

### 메인 페이지
```
• 메인 페이지 상단 자동 무한 캐러셀 애니메이션
• 메인 페이지 하단 무한 슬라이더 애니메이션
• 스크롤 이벤트 애니메이션
• 메인화면 레이아웃 작업
```

### 주문관리 페이지

```
• GET 호출을 통해서 백엔드로부터 데이터를 받아온 뒤 여러개의 데이터를 setState 함수를 통해 렌더링 작업
• POST 호출을 통해 로그인시 발급받은 토큰을 localStorage에서 가져와 headers에 담아서 보낸뒤 페이지 이동
```

### 베스트10 페이지

```
• 컴포넌트 재사용, 폼에 맞도록 조정
• fetch()를 통해 DB로 부터 이미지 데이터를 받아온 뒤 렌더링 작업
```


