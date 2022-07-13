# 🎬 프리온보딩 2차 영화 정보 웹사이트(sheep-play) 개발

1. [프로젝트 소개](#1-프로젝트-소개)
2. [구현 기능](#2-구현-기능)
3. [프로젝트 구조](#3-프로젝트-구조)
4. [역할](#4-역할)
5. [프로젝트 제작 과정](#5-프로젝트-제작-과정)
6. [프로젝트 설치 및 실행](#6-프로젝트-설치-및-실행)

<br/>

[🌍 배포 링크]()

<br />

## 1. 프로젝트 소개
- 개요: 원티드 프리온보딩 5기 1주차 2번째 팀 과제
- 주제: 영화 정보 웹사이트 개발
- 기간: 2022.07.07 ~ 2022.07.13 (주말 제외)

<br />

## 2. 구현 기능
### 🔥 과제 요구 기능
**영화 검색 페이지**   
- [x] 초기화면은 검색 탭에서 시작
  - [x] 상단 `검색 입력 input`, `검색 button` 요소 추가
  - [x] 처음 검색 결과 영역에 전체 영화 목록 표시
- [x] 검색어 입력 후 검색 클릭 시 아래 검색 결과 노출
  - [x] 검색 결과가 없는 경우 `검색 결과가 없습니다.` 노출
  - [x] 검색 결과의 가장 하단으로 내려온 경우 `infinity scroll`을 활용하여 추가 데이터 요청
  - [x] 입력된 문자에 따라 추천 검색어 표시
  - [x] `debounce`를 활용해 API 호출 최소화
  - [x] `fuzzy string matching 지원
  - [x] 매 호출마다 `console.log`를 통해 얼마나 호출되는지 파악 가능하도록 구현

**영화 선택 모달**
- [x] 출력된 영화 리스트 중 하나 클릭 시 나오는 모달
  - [x] 각 영화의 간단한 설명 표시
  - [x] 즐겨찾기 버튼
  - [x] 즐겨찾기 다시 누를 시 `즐겨찾기 취소` 텍스트 표시

**영화 즐겨찾기 페이지**   
- [x] 즐겨찾기 탭 클릭 시 즐겨찾기된 영화 목록 표시

---

### ✨ 추가 구현 기능
```plaintext
 🔅 이 부분은 기본 구현 목록 외 필요하다고 생각해 구현한 기능입니다.
```
**영화 검색 페이지**
- [x] 이미지가 없는 영화는 기본 이미지(`No Image`)가 보이도록 설정
- [x] 사용자의 흥미를 위해 데이터가 존재하지 않을 경우 `lottie animation` 설정
- [x] 여러 개의 데이터를 보여줄 수 있도록 한 줄에 `10`개씩 슬라이드로 목록 확인하도록 구현
- [x] 추천 검색어 방향키로 이동하며 검색할 수 있도록 구현

**영화 선택 모달**
- [x] 이미지가 없는 영화는 기본 이미지(`No Image`)가 보이도록 설정
- [x] `176m -> 2h 56m`으로 보이도록 시간 포맷 변경
- [x] 영화 설명이 존재하지 않는 데이터의 경우 구글 검색 하이퍼링크 설정

**영화 즐겨찾기 페이지** 
- [x] 사용자의 흥미를 위해 데이터가 존재하지 않을 경우 `lottie animation` 설정

<br />

## 3. 프로젝트 구조
```
📁 public
└── data
    └── feed.json

📁 src
├── api
│   └── api
├── assets
│   └── images
│        └── InstagramLogo
├── components
│   ├── Feed
│   ├── LoginForm
│   ├── LoginInput
│   └── NavigationBar
├── context
│   └── AuthContext
├── hooks
│   └── useFeed
├── pages
│   ├── Login
│   └── Main
├── styles
│   └── GlobalStyle
├── util
│   └── validation
│
├── App.js
└── index.js
```
<br />

## 4. 역할
| 이름                                       | 담당 역할                                                      |
|--------------------------------------------|----------------------------------------------------------------|
| [ 양아름 ](https://github.com/areumsheep)  | 디자인, theme 세팅, lottie animation 컴포넌트 구현, 모달 컴포넌트 구현, 모바일 반응형 대응                  |
| [ 최창열 ](https://github.com/pinkdumbbel) | 웹팩 초기 세팅, Nav바 개발, icon 컴포넌트 구현, 페이지 구현, 병합 작업 진행, Context 세팅, 모바일 반응형 대응 |
| [ 최중재 ](https://github.com/joong8812)   | data fetching module 개발, 검색 컴포넌트 구현, fuzzy search 기능 구현, 모바일 반응형 대응                                       |
| [ 조현호 ](https://github.com/hajun2)      | 슬라이드 컴포넌트 개발, 무한 스크롤 기능 구현, 모바일 반응형 대응                                   |
| [ 이정민 ](https://github.com/dlwjdals22)      | 무한 스크롤 기능 구현, 폰트 적용, 모바일 반응형 대응                                       |
<br />

## 5. 프로젝트 제작 과정

### [1] 컨벤션은 협의하여 아래와 같이 정의하였습니다 🥳
| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 💩 chore   | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/wanted-running-sheep/sheep-play/issues/1)에서 확인해주세요!

### [2] 각자 원하는 컴포넌트 개발을 진행한 뒤 병합 작업을 진행하였습니다 🏃
- 원하는 컴포넌트 기능 개발로 새로운 경험을 하며 실력을 키울 수 있었습니다!
- 서로 진행된 작업까지의 PR을 날리고 코멘트를 받는 경험을 통해 더 나은 코드란 무엇일지, 다른 사람이 더 쉽게 이해할 수 있는 변수, 함수명을 고민할 수 있었습니다.

### [3] 각 기능별로 구현이 완료된 뒤 페이지에 들어갈 기능별로 팀을 나눠 페이지를 완성하였습니다🔥
- [진행한 PR은 여기를 확인해주세요!](https://github.com/wanted-running-sheep/sheep-play/pulls?q=is%3Apr+is%3Aclosed)
- 각 팀의 인원은 최소화하여 의견 취합에 문제가 없도록 하였습니다.
- 각자의 생각으로 진행된 내용을 기반으로 페이지 하나에 합치는 작업을 페어 프로그래밍이라는 방법을 통해 더 빠르게 진행할 수 있었습니다.

<br/>

## 6. 프로젝트 설치 및 실행
1. Git Clone
```command
$ git clone
```

2. 프로젝트 실행
```command
$ npm install
$ npm run start
```
