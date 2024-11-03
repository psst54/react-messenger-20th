# 3 & 4주차 미션: React-Messenger

# 🌊 결과물

배포 링크 :
[https://react-messenger-20th.vercel.app/chat](https://react-messenger-20th.vercel.app/chat)

## 기능 구현

### /chat 페이지

- 대화를 클릭해 해당 대화 페이지로 이동할 수 있다.

### /chat/{id} 페이지

- 하단 입력창에서 메시지를 입력하고, 엔터 혹은 오른쪽 파란 전송 버튼을 통해 메시지 전송이 가능하다.
  - Shift + enter를 통해 빈 줄을 추가할 수 있다.
- 상단 navbar 프로필 사진 및 이름을 클릭하면 상대방<->나 유저 전환이 가능하다.
- 더블클릭을 통해 상대방의 메시지에 리액션을 보낼 수 있다.

# 🌊 Key Questions - 4주차

## React Router의 동적 라우팅(Dynamic Routing)이란 무엇이며, 언제 사용하나요?

- 동적 라우팅은 웹에서 URL 경로에 따라 다른 컴포넌트를 동적으로 렌더링하는 방식이다.
- React에서는 React Router 라이브러릴르 추가해 동적 라우팅을 간편하게 사용할 수 있다.

예시

- 사용자의 개별 페이지
  - `/profile/:id`처럼 사용해 id에 따라 각각 다른 사용자의 정보를 보여줄 수 있다.
- 검색 결과 페이지
  - `/search/:query` 경로를 이용하면 `query`에 따라 검색 결과를 보여줄 수 있다.

## 네트워크 속도가 느린 환경에서 사용자 경험을 개선하기 위해 사용할 수 있는 UI/UX 디자인 전략과 기술적 최적화 방법은 무엇인가요?

### 이미지 최적화

- 이미지를 압축하거나, 크기를 조절해 이미지의 용량을 줄인다.
- 웹에서는 webp 확장자를 주로 사용한다.

### code splitting

- 코드를 여러 개의 번들로 나누어 필요한 부분만 로드한다.
- 초기 로딩 시에도 모든 코드를 한 번에 불러오지 않고, 각 페이지별로 필요한 코드만 필요시에 로드한다.
- 불필요한 코드나 라이브러리는 로드하지 않는다.

## React에서 useState와 useReducer를 활용한 지역 상태 관리와 Context API 및 전역 상태 관리 라이브러리의 차이점을 설명하세요.

### useState

- 가장 기본적으로 사용되는 상태 관리 hook이다.
- 코드가 간결하고 직관적이다.
- 상태 변경 로직이 복잡한 경우, 코드 가독성을 해칠 수 있다.

### useReducer

- 상태와 상태 변경 로직을 분리해서 관리한다.
- 복잡한 상태 로직을 reducer 함수로 깔끔하게 관리할 수 있다.

&nbsp;

- useState나 useReducer는 하나의 컴포넌트 또는 컴포넌트의 트리에서 지역적으로 상태를 관리할 사용한다. 여러 컴포넌트에 걸쳐 관리되는 상태의 경우에는 props drilling 문제가 발생할 수 있으므로 다른 방법을 사용할 수 있다.

### context API 및. 전역 상태 관리 라이브러리

- 상태를 상위 컴포넌트에서 전달하지 않고도 하위 컴포넌트에서 접근할 수 있다.
- 예시) 테마, 시간대, 다국어 설정 등 여러 컴포넌트에서 공통적으로 사용되는 상태

# 🌊 Key Questions - 3주차

## 디자이너로부터 전달받은 피그마 링크, 피그마 캡처본, 디자이너와의 소통 tmi 등

- [피그마 링크](https://www.figma.com/design/UOmRWwpa4lobfHI11jIIMy/%EB%A9%94%EC%8B%A0%EC%A0%80-%EC%84%9C%EB%B9%84%EC%8A%A4-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8_%EC%A0%9C%EC%B6%9C?node-id=0-1&t=l1Ggohdqn2UCpvUS-1)
- 캡처본
- 소통 TMI
  - 디자이너님과 소통하면서 플젝을 하는게 꽤 오랜만이네용ㅎㅎㅎ,, 주어진 디자인을 잘 구현하는 것도 FE 개발자에게 중요한 역량이라고 생각하기 때문에 최대한 노력했는데 잘 됐는지 모르겠어요...!
  - 중간에 제가 "채팅 메시지 최대 길이 정해주면 좋을 것 같아요!"라고 말씀을 드렸는데, 알고 보니 피그마에 지정을 해 놓으셨더라구요! 정신 바짝 차리겠습니당,,🫠🫠
  - 사실 저는 css에서 단위를 px, pt보다는 rem을 선호하는 편이라 보통 root font size 16px에 0.25rem / 0.5rem / 0.75rem / 1rem 간격으로 사이즈를 조절했었는데요...! 이번 디자이너님은 5px, 6px, 7px, 8px,.... 25px 등 단위를 다양하게 사용하셔서 어떻게 구현할 지 고민이 됐었어요. 하필 이번에 tailwind를 써보자고 마음을 먹었는데 tailwind와 px 단위 디자인은 궁합이 잘 안 맞는 것 같더라고요...ㅎㅎ 만약 실제 플젝이었으면 디자인을 수정해주실 수 있는지 말씀드리거나 제가 기술 스택을 바꿨을텐데, 이번에는 간단한 과제이다보니 그냥 tailwind도 쓰면서 디자이너님의 디자인을 정말 충실히 구현해보자! 하는 기분으로 코딩했어요🥰🥰

## JSX, JS, TSX, TS 각각의 확장자 개념 사용이유와 차이점.

### JS

- JS는 프로그래밍 언어로, 웹 페이지를 만드는 데에 많이 사용된다. 꼭 웹 페이지에 한정된 것은 아니고, 비 브라우저 환경에서도 작동한다.
- 프로토타입 기만, 단일 스레드, 동적 언어로, 객체지향형, 명령형, 선언형 스타일을 지원한다.
- 웹 페이지에서는 보통 동적인 웹을 구축하는 역할을 맡는다.

### JSX

- JSX는 JS의 구문을 확장한 것으로, JS 파일 안에 HTML과 유사한 마크업을 작성할 수 있게 한 것이다.
- 기존에는 콘텐츠를 HTML, 디자인을 CSS, 로직을 JS 파일에 작성했다. 하지만 JSX를 이용하면 마크업과 렌더링 로직을 같은 파일에 작성할 수 있다!
- JSX element는 syntactic sugar로, JSX 코드는 JS 코드로 변환될 수 있다.

  - 따라서 아래와 같은 JSX 코드는

    ```jsx
    class Hello extends React.Component {
      render() {
        return <div>Hello {this.props.toWhat}</div>;
      }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Hello toWhat="World" />);
    ```

  - 이렇게 컴파일된다!

    ```jsx
    class Hello extends React.Component {
      render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
      }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(Hello, { toWhat: 'World' }, null));
    ```

### TS

- TypeScript는 JavaScript의 super set 프로그래밍 언어로, JS 코드로 변환될 수 있다.

### TSX

- TypeScript + JSX라고 이해하면 된다. JSX 문법과 TS의 타입 시스템을 동시에 사용할 수 있다.

## TypeScript를 사용하는 이유.

- JS로 만드는 프로그램의 규모가 점점 커지고, 방대한 코드를 타입 없이 작성하려니 타입 관련 오류와 오타가 많이 발생하게 되었다. TS는 타입 관련 오류와 오타를, 코드를 실행하기 전에 잡아주므로 실제로 코드를 실행했을 때 오류가 나는 경우가 많이 줄어들게 된다.

## SSR과 CSR 특성 및 차이점.

SSR(Server-Side Rendering)과 CSR(Client-Side Rendering)은 웹을 렌더링하는 두 방식이다.

### SSR(Server-Side Rendering)

- SSR은 화면의 렌더링이 서버에서 이루어지는 아키텍쳐이다.
- 첫 HTML 렌더링을 서버에서 처리하기 때문에, 사용자의 화면에 컨텐츠가 그려지는 데 걸리는 시간이 더 짧다.
- 별도의 서버가 필요 없는 CSR과는 달리 서버가 필요하다.
  -SSR은 요청에서 필요한 정보를 파악하고, 적절한 페이지 파일을 가져와 렌더링을 처리한 후, 완성된 HTML과 JS 번들을 돌려주어야 한다.

### CSR(Client-Side Rendering)

- CSR은 렌더링 프로세스가 클라이언트 측(일반적으로 사용자의 웹 브라우저)에서 발생하는 기술이다.
- 클라이언트가 서버에 추가 요청을 하지 않고도 UI를 업데이트할 수 있다. 따라서 부드럽고 반응이 빠른 사용자 경험을 제공한다.

## 참고

- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Introducing JSX: https://legacy.reactjs.org/docs/introducing-jsx.html
- JSX: https://facebook.github.io/jsx/
- Writing Markup with JSX: https://react.dev/learn/writing-markup-with-jsx
- Using TypeScript: https://react.dev/learn/typescript

- https://www.typescriptlang.org/
- TypeScript: https://github.com/microsoft/TypeScript
- JSX: https://www.typescriptlang.org/docs/handbook/jsx.html

- 타입스크립트 교과서

- SSR 서버 최적화로 비용 아끼기: https://toss.tech/article/ssr-server
- Understanding the Difference between CSR and SSR Rendering: https://ritikchourasiya.medium.com/understanding-the-difference-between-csr-and-ssr-rendering-d2fa0eee50e
