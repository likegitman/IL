CSR, SSR은 페이지 단위로 렌더링한다.  
하지만 RSC가 등장한 덕에 컴포넌트 단에서 렌더링 환경을 구분할 수 있게 되었다.

# 렌더링 환경
애플리케이션 코드를 렌더링할 수 있는 환경은 2가지다.  

1. 클라이언트
어플리케이션 코드에 대한 요청을 서버로 보내는 유저의 디바이스 브라우저이다. ( Chrom, Safari )  
그 다음 서버에서 응답을 받아 사용자와 상호작용 가능한 인터페이스로 변환한다.

3. 서버
어플리케이션 코드를 저장하고 클라이언트의 요청을 수신하고 일부 computation을 수행한 후에
적절한 응답을 보내주는 data center의 컴퓨터이다.

React 18 이전까진 React 컴포넌트를 렌더링하는 환경이 클라이언트에 집중되어 있었다.  
Next.js는 기본적으로 SSR을 지원한다고는 하지만 초기 HTML만 서버에서 렌더링한 후에  
클라이언트에서 하이드레이션 과정을 거치기 때문에 서버보다 클라이언트 비중이 더 높다고 할 수 있다.  
결국, 초기 HTML아 사용자와 상호작용이 가능해지려면 JS를 필요로하기 때문이다.

## Server Component

### 초기 페이지 로드
서버에서 초기 HTML을 생성하여 클라이언트로 빠르게 전송되며    
JS 다운로드와 파싱을 하지 않고 사용자에게 바로 보여진다.  
Next.js 페이지 라우팅에서 HTML만 있는 컴포넌트도 JS가 포함됐는데  
서버 컴포넌트에서는 그런 작업 없이 바로 보여지는 특징이 있다.  
* 다만, RCC와 같이 사용된다면 JS 다운과 파싱은 페이지에서 일어나긴 한다.

### 번들 사이즈
RSC는 클라이언트 JS 번들에 영향을 미치는 의존성들을 처리하고 보낸다.  
처리된 결과만을 클라이언트에 전달하여 JS 번들을 다운로드할 필요가 없어졌다.  

### 스트리밍
RSC는 렌더링 작업을 청크 단위로 쪼개고 준비가 완료되면 클라이언트로 스트리밍한다.  
그래서 페이지가 서버에서 렌더 되는 것을 기다릴 필요없이 페이지의 일부분을 볼 수 있다.

## 데이터 페칭
서버에서 렌더링되는 것 뿐만 아니라 서버 단에서 데이터 페칭을 진행할 수 있는데  
클라이언트에서 요청하는 것이 아니기 때문에 기본적으로 페칭이 빠르며 민감한 정보가  
클라이언트에서 보이지 않기 때문에 보안 강화에 유용하다. ( API Key 등등 )

서버 컴포넌트는 JS 코드가 없는거나 마찬가지라고 했는데 데이터 페칭이 가능한 이유는  
환경이 Node.js 환경이기 때문에 순수 자바스크립트 기능인 fetch를 사용할 수 있고  
map, filter 등의 메서드도 사용이 가능하다!  
그래서 JS 코드가 없는 것보다는 React Hook을 사용할 수 없다.  
hook을 사용하는 순간 그 컴포넌트는 서버 컴포넌트가 아니라 클라이언트 컴포넌트로 지정해야한다.  
이벤트 핸들러인 onClick, onChange 같은 류도 포함하면 안 된다.

## 캐싱
서버에서 렌더링 되어 후속 요청과 유저 전반에 걸쳐서 재사용이 가능하다.

SSR과 비슷하게 미리 데이터를 페칭하고 컴포넌트를 렌더링하여 로딩 없이 사용자에게  
보여져 사용자 경험도 향상된다.

## 한계
서버 컴포넌트는 분명히 여러 이점이 존재하지만 한계는 있다.  
위에서 설명한 것처럼 React의 생명주기나 상태를 이용할 수 없고 이벤트 핸들러 또한 존재해선 안 된다.  
form 같은 경우에는 서버 액션이 존재하기에 어느정도 대체할 수 있지만 hooks는 아예 사용이 불가하다.

# 혼합
RSC에 대해 설명할 때 RCC와 같이 사용할 수 있다고 하였다.  
두 개를 같이 사용할 수 있는데 2가지 방법이 존재한다.

1. RSC에서 RCC를 import해서 사용
```tsx
// ServerComponent.js (RSC)
import ClientComponent from './ClientComponent'

export default function ServerComponent() {
  return (
    <div>
      <h1>서버 컴포넌트</h1>
      <ClientComponent />
    </div>
  )
}

// ClientComponent.js (RCC)
'use client'

import { useState } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  )
}
```

2. RCC의 child나 props로 RSC 전달 ( RCC에서 RSC import 불가 )
```tsx
// Page.js (RSC)
import ClientWrapper from './ClientWrapper'
import ServerContent from './ServerContent'

export default function Page() {
  return (
    <ClientWrapper>
      <ServerContent />
    </ClientWrapper>
  )
}

// ClientWrapper.js (RCC)
'use client'

import { useState } from 'react'

export default function ClientWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(true)
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '숨기기' : '보이기'}
      </button>
      {isVisible && children}
    </div>
  )
}

// ServerContent.js (RSC)
export default function ServerContent() {
  return <p>이 내용은 서버에서 렌더링됩니다.</p>
}
```

# 지시어
Next.js 13 이상부터 모든 컴포넌트는 기본적으로 RSC이다.  
그래서 RSC와 RCC를 구분할 수 있는 방법이 존재한다.

### use client
그냥 컴포넌트에 hooks, 이벤트 핸들러를 사용하면 Next.js는 'use client'를 붙이라고 말한다.  
'use client'는 해당 컴포넌트는 클라이언트에서 실행된다고 말해주는 것이라고 생각하면 된다.  
파일의 최상단에 위치해야 한다.

#### ❌
```tsx
import { useState } from 'react';

const ClientComponent = () => {
  const [state, setState] = useState(0);
}
```

#### ✅
```tsx
'use client'

import { useState } from 'react';

const ClientComponent = () => {
  const [state, setState] = useState(0);

  return (...);
}
```

### use server
기본적으로 RSC라고 말했었는데 그래서 컴포넌트에선 'use server' 지시어를 작성할 필요는 없다.  
'user server'의 목적은 서버 측에서 실행될 함수를 표시하는 것이다.  
그래서 서버 함수만 있는 파일의 최상단에 선언하거나 RCC에서 함수 단에서 선언하는 방식이 있다.  
* RSC에서는 'use server' 없이도 서버 함수를 생성할 수 있다.

#### 파일
```js
'use server';

export async function createUser(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  
  const result = await db.users.create({ name, email });
  return result;
}

export async function updateUserProfile(userId, data) {
  const updatedUser = await db.users.update(userId, data);
  return updatedUser;
}
```

#### RCC에서 생성
```tsx
'use client';

import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  async function fetchUserData(userId) {
    'use server';

    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  }

  async function handleFetchUser() {
    const userId = '123';
    const userData = await fetchUserData(userId);
    setUser(userData);
  }

  return (...)
}
```

# SSR과 RSC의 차이
서버에서 실행된다는 공통점 때문에 헷갈릴 수 있지만 두 개념은 완전히 다르다.  
## SSR
- 서버에서 완전한 HTML을 생성한다.
- 클라이언트 HTML을 즉시 표시한다.
- JS를 로드해 사용자와 상호작용이 가능하게 하는 하이드레이션이 일어난다.

## RSC
- 서버에서 컴포넌트를 실행해 그 결과를 직렬화(flat)한다.
- 직렬화된 데이터를 클라이언트로 전송한다.
- 클라이언트가 직렬화 된 데이터를 해석한 후 초기 렌더링을 수행한다.

위에서 말하는 직렬화 된 데이터란 HTML이 아니며 JSON과 유사한  
React Element 트리를 나타내는 특별한 형식이다. ( RSC paylod라고 부름 )
