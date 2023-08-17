# 주영님을 위한 간단 가이드

어떻게 개발을 진행하면 되는지 간단하게 요약해서 설명드리겠습니다. 이 문서에 적혀있는 대로 따라하면 되는데, 막히는 부분이 있다면 알려주세요. 

## 1. 개발 환경 설정

- 리포지토리를 fork합니다.
    - 리포지토리에 fork 버튼이 있을 것입니다. 그러면 주영님 계정에 리포지토리의 복사본이 생깁니다. 
- fork한 리포지토리를 clone합니다.
    - 주영님 계정에 생긴 리포지토리의 주소를 복사해서, 원하는 디렉토리의 터미널에 `git clone <주소>`를 입력합니다. 그럼 파일이 다운될거에요.
- clone한 리포지토리에서 `npm install`을 실행합니다.
    - `npm install`을 실행하면 `package.json`에 적혀있는 모듈들이 설치됩니다. 

## 2. 세팅

`npm install`을 하면 많은 모듈들이 다운로드 될 것입니다. 제가 어떤 모듈을 설치했고, 이 모듈들은 어떤 역할을 하는지 간단히 설명드릴게요. 

1. eslint
2. prettier
3. react-router-dom
4. redux
5. webpack
6. styled-components

### 2-1. eslint

eslint는 자바스크립트 문법을 검사해주는 도구입니다. 자바스크립트는 문법이 느슨해서, 개발자가 실수를 하기 쉽습니다. 그래서 eslint를 사용해서 문법을 검사하고, 실수를 방지합니다.

### 2-2. prettier

prettier는 코드의 포맷을 통일시켜주는 도구입니다. .prettierrc 파일에 코드 포맷의 규칙이 적혀있습니다. `ctrl`+`s`로 저장하면 설정된 규칠에 따라 자동으로 포맷팅이 됩니다. 

### 2-3. react-router-dom

react-router-dom은 리액트에서 라우팅을 도와주는 도구입니다. 라우팅이란, 사용자가 어떤 주소로 들어왔을 때, 그에 맞는 페이지를 보여주는 것을 말합니다. 예를 들어, 사용자가 `localhost:3000`으로 들어왔을 때는 메인 페이지를 보여주고, `localhost:3000/about`으로 들어왔을 때는 소개 페이지를 보여준다고 가정해봅시다. 이런 경우에 react-router-dom을 사용하면 편리합니다.

### 2-4. redux

redux는 상태 관리 도구입니다. 리액트에서는 상태를 관리하기 위해 state라는 것을 사용합니다. state는 컴포넌트의 상태를 의미합니다. 예를 들어, 사용자가 로그인을 했는지 안했는지를 state로 관리할 수 있습니다. 그런데, state는 컴포넌트마다 따로 관리되기 때문에, 컴포넌트 간에 state를 공유하기가 어렵습니다. 그래서 redux를 사용하면, 컴포넌트 간에 state를 공유할 수 있습니다.

### 2-5. webpack

webpack은 모듈 번들러입니다. 모듈 번들러란, 여러 개의 자바스크립트 파일을 하나의 파일로 합쳐주는 도구입니다. 예를 들어, `import`를 사용해서 다른 자바스크립트 파일을 불러올 수 있습니다. 그런데, 이렇게 불러온 자바스크립트 파일들을 하나의 파일로 합쳐주는 것이 webpack의 역할입니다.

### 2-6. styled-components

styled-components는 자바스크립트 파일 안에서 CSS를 작성할 수 있게 해주는 도구입니다. CSS를 작성할 때, 클래스 이름을 지정하고, 그 클래스 이름을 HTML 태그의 `class` 속성에 넣어줘야 합니다. 그런데, styled-components를 사용하면 이런 과정을 생략할 수 있습니다. 자바스크립트 파일 안에서 CSS를 작성하면, 그 CSS가 HTML 태그에 자동으로 적용됩니다.

# 3. Git branch 전략

- main branch: 최종 릴리즈 버전
- develop branch: 개발 버전
- feature branch: 기능 개발 버전 (ex. feature/login)

# 4. Git commit message 규칙


| Emoji | Message          | Description                                                      |
| :---: | ---------------- | ---------------------------------------------------------------- |
|  ✨   | Feat             | 새로운 기능 추가, 기존 기능을 요구 사항에 맞추어 수정            |
|   🛠   | Fix              | 기능에 대한 버그를 고친 경우                                     |
|  🎨   | Design           | 사용자 UI 디자인 변경                                            |
|   ⚠   | !BREAKING_CHANGE | 커다란 API 변경                                                  |
|  ❗   | !HOTFIX          | 긴급 수정                                                        |
|  🩹   | Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우, 오타 수정 |
|   ⚖   | Refactor         | 프로덕션 코드 리팩토링                                           |
|  👀   | Comment          | 필요한 주석 추가 및 변경                                         |
|  📃   | Docs             | 문서 수정                                                        |
|  📚   | Chore            | 패키지 매니저 설정                                               |
|  📂   | Rename           | 파일 혹은 폴더명을 수정하거나 옮긴 경우                          |
|   🗑   | Remove           | 파일을 삭제하는 경우                                             |
|   ⚙   | Setting          | 초기 세팅 혹은 세팅 수정                                         |
|  🔨   | Test             | 테스트 코드 추가 및 수정                                         |
|  🎊   | Release          | 버전 릴리즈                                                      |
|  🔀   | Branch           | 브랜치 추가 및 병합                                              |

# 5. Directory Structure

### 📌 Directory Rules

```
└─ src
 ├─ assets              이미지, 폰트
 ├─ components          재사용 공통 컴포넌트
 ├─ config              초기 설정 및 구성 정보
 ├─ constants           공통 상수
 ├─ layouts             공통 UI 레이아웃
 ├─ pages               페이지 컴포넌트
 ├─ api (= services)    api 관련 로직 모듈, auth 인증 관련 모듈
 ├─ store               전역 상태 관리 (redux)
 ├─ styles              UI 디자인 스타일 (styled-component)
 ├─ utils               정규표현식 패턴, 공통 함수
 ├─ App.js
```