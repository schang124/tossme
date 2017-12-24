## 토스 송금 Front End 웹 구현
토스 송금 경험을 조금 더 구현해 보고자 송금페이지와 토스 첫 페이지를 구현했습니다.

React-router 를 사용하여 

* '/' 토스 홈
* '/transfer' 송금 페이지

의 주소를 각각 할당했습니다.

### 사용된 라이브러리
- hammerJS
- react-router
- styled-components


### 프로젝트 테스트 방법
weppack dev server 를 실행하여 테스트 가능합니다.

1. git 에서 프로젝트 import (https://github.com/schang124/tossme.git)
2. `yarn install`
3. `yarn start`
4. http://localhost:3030 접속 

## 송금 UX
1. 홈에서 **송금할 금액 입력** 클릭
2. 송금 페이지 이동
3. **송금할 금액** 과 **계좌** 선택
4. **송금 조건 만족시** 보내기 버튼 활성화
5. 보내기 버튼 클릭
6. 개발자 도구 콘솔에서 Payload 확인
