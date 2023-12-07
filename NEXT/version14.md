# Next.js 14
- Turbopack: App & Pages Router에 대한 5,000개의 테스트 통과
  - 53% 더 빠른 로컬 서버 시작
  - 빠른 새로 고침으로 94% 더 빠른 코드 업데이트
- 서버 작업: 점진적으로 향상된 mutation
  - 통합된 캐싱 및 재검증
  - 간단한 함수 호출 또는 기본적으로 form에서 작동
- 부분 pre-rendering: 빠른 초기 정적 응답 + 스트리밍 동적 컨텐츠

## 1. Next.js 컴파일러 성능 향상
version 13부터 페이지와 앱 라우터 모두에서 로컬 개발 성능을 개선했는데 이전 버전에서는 성능 향상을 위해

next dev와 Next.js의 다른 part들을 재정비 하였고 이번 14에서는 모든 기능 성능 향상에 대해 초점을 맞췄고

Rust 기반 컴파일러가 안정성을 가져다 줄 것이다. Rust 엔진 Turbopack의 next dev 검증을 위한 5,000개의 통합 테스트는

통과 중에 있으며 이 테스트에는 7년간의 버그 수정과 재현이 포함되어 있다. 로컬 서버 구동 속도 53%, 코드 업데이트 94% 향상

이 벤치마크는 대규모 애플리케이션에서 기대할 수 있는 성능 개선에 대한 실질적인 결과이다. next dev가 90% 통과했으며

next dev -turbo를 사용하면 더 빠르고 안정적인 성능을 경험할 수 있다.

## 2. Forms and Mutations
version 9에서는 프론트엔드 코드와 함께 백엔드 엔드 포인트를 빠르게 빌드하는 방법인 API Router가 도입되었다.

예를들어 api/ 디렉토리에 아래와 같은 새 파일을 생성할 수 있다.

#### pages/api/submit.ts
```ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res NextApiResponse,
) {
  const data = req.body;
  const id = await createItem(data);
  res.status(200).json({id});
}
```

다음으로 클라이언트 측에서 React와 onSUbmit과 같은 이벤트 핸들러를 사용해 API Router로 fetch를 만들 수 있다.

```ts
import { FormEvent } from 'react';
 
export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
 
    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
 
    const data = await response.json();
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```
version 14를 통해 data mutations를 작성하는 개발자 경험을 간소화할 것이고 저성능 디바이스와 느린 네트워크에서

발생하는 사용자 경험을 개선할 것이다.

### Server Action 안정화
만약 API Route를 수동으로 생성할 필요가 없다면? 대신 서버에서 보안적으로 실행되는 함수를 정의하고

React 컴포넌트에서 직접 호출할 수 있다. App Router는 새로운 기능을 채택하기에 안정적인 React Canary 채널에 구축됐다.

version 14는 안정적인 Server Action을 포함하는 최신 React Canary 채널로 업그레이드되었다.

위에서 작성한 코드를 한 파일로 간소화 시킬 수 있다.

```ts
export default function Page() {
  async functino create(formData: FormData) {
    'use server';
    const id = await createItem(formData);
  }

  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Server Action은 이전에 서버 중심 프레임워크를 사용해 본적이 있는 개발자에게는 친숙하게 느껴질 것이다.

Form과 FormData Web API같은 웹 기본 사항을 기반으로 구축되었다.

## 3. Partial Prerendering
빠른 초기 정적 응답을 가진 동적 컨텐츠를 위한 컴파일러 최적화를 version 14에 적용하는 작업을 진행 중이다.

Next.js가 처음 페이지를 불러올 때 정적인 컨텐츠를 미리 제공하는 방식이다. Partial Prerendering은 SSR, SSG

ISR에 대한 수십 년의 연구와 개발을 기반으로 한다.

### Build on React Suspense
Partial Prerendering은 Suspense 경계의 의해 정의된다.
```js
export default function Page() {
  return (
    <main>
      <header>
        <h1>My Store</h1>
        <Suspense fallback={<CartSkeleton />}>
          <ShoppingCart />
        </Suspense>
      </header>
      <Banner />
      <Suspense fallback={<ProductListSkeleton />}>
        <Recommendations />
      </Suspense>
      <NewProducts />
    </main>
  );
}
```
Partial Prerendering이 활성화되면 이 페이지는 <Suspense /> 경계를 기반으로 정적인 shell을 생성한다.

React Suspense의 fallback은 pre-rendering 된다.

요청이 발생하면 아래와 같은 정적 HTML shell이 즉시 제공된다.
```html
<main>
  <header>
    <h1>My Store</h1>
    <div class="cart-skeleton">
      // ...
    </div>
  </header>
  <div class="banner" />
  <div class="product-list-skeleton">
    // ...
  </div>
  <section class="new-products" />
</main>
```
위에서 사용한 <ShppingCart />가 사용자 세션을 확인하기 위해 Cookie를 읽기 때문에 이 컴포넌트는

정적 shell과 동일한 HTTP 요청의 일부로 스트리밍된다. 추가적은 Network 왕복이 필요하지 않다.

가장 세분화된 정적 shell을 사용하려면 Suspense를 추가해야 될 수 있지만 이미 loading.js 파일을 사용한다면

Suspense를 추가할 필요가 없다. loading.js은 암묵적인 Suspense 이므로 정적 shell을 생성하는데 추가 변경이 필요치않다.

### Metadata Improvements
서버에서 페이지 컨텐츠를 스트리밍하기 전에 viewport, 색 구성표 및 테마에 대한 중요한 metadata를 먼저 브라우저로

전송해야 된다. 이런 meta 태그들이 초기 페이지 컨텐츠와 함께 전송되도록 하면 부드러운 사용자 경험을 제공한다.

만약 theme 색상 변경으로 인해 페이지가 깜빡이거나 viewport 변경으로 인한 layout 이동을 막는다.

version 14는 blocking metadata와 none blocking metadata를 분리한다. 일부 metadata 옵션만 blocking하며

none blocking metadata가 사전 렌더링 된 페이지가 정적shell을 제공하는 데 방해가 되지 않도록 하고자 한다.

1. viewport: viewport의 초기 확대/축소 및 기타 속성을 설정한다.
2. colorScheme: viewport의 지원 모드를 설정한다. (라이트/ 다크)
3. themeColor: viewport 주변의 chrom이 렌더링할 색상을 설정한다.
위 metadata 옵션은 
