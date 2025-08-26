# FE: A front-end repository of project 별빛다리

### 👩🏻‍💻 프론트엔드 규칙

**✔︎ 코드 스타일 Ts로 통일**

---

#### 1. Git Branch

- Git Flow 방식 사용
- 브랜치 네이밍 규칙: `feat/페이지이름`
  - ex) `feat/login` -> `develop` 브랜치로 merge
- `feature`: 기능 개발 브랜치
- `develop`: 각 기능들의 개발을 완료하고 병합하는 브랜치
- `main`: default 브랜치, 최종적으로 배포하는 브랜치
- `hotfix`: 배포 후 오류 발생 시 사용하는 브랜치
- `feature > develop > main` 순으로 merge

---

**2. Commit 컨벤션**

- "**태그: 커밋 메시지**" 형식
- 태그는 영어 소문자, 커밋 메시지는 한글로 작성
- ex)
  - **feat**: 새로운 기능 추가
  - **fix**: 오류(버그) 수정
  - **style**: 코드 포맷팅, 주석 수정, 세미콜론 수정 등의 스타일 수정
  - **docs**: README 문서 수정
  - **merge**: 브랜치 합병
  - **chore**: 빌드 관련 수정
  - **refactor**: 코드 리팩토링

