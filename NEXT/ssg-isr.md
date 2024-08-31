# SSG
SSG는 Static Site Generation의 약자로 웹 페이지를 빌드 타임에 정적으로 생성하여  
미리 생성 된 HTML 파일을 보여주는 방식이다. 그런데 미리 생성 된 HTML을 제공한다는 건  
SSR과 유사하다. 둘 다 서버에서 미리 준비 된 파일을 주지만 그 시점이 다르다.  
SSG는 웹을 배포할 때만 페이지를 생성하고 SSR은 사용자가 페이지를 요청할 때마다 페이지를 재생성한다.  
그래서 SSR은 서버의 자원을 많이 소모하지만 SSG는 말 그대로 정적 파일을 제공하여 서버 자원 소모가 적고  
CDN을 통해 배포할 수 있다. SSR도 CDN을 활용할 수 있지만 정적 페이지만큼 효율적이진 못하다.

## SSG 구현 코드
```jsx
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post: { id: number }) => ({ id: post.id.toString() }));
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
```

## SSG 장점
### 1. 빠른 페이지 로딩 속도
빌드 타임에 미리 생성 된 HTML 파일을 제공하기 때문에 서버나 클라이언트에서 생성할 필요가 없다.  
이로 인해서 페이지 로딩 속도는 빠를 수밖에 없다. CDN을 통해 배포되어 어디에서도 빠르게 접근이 가능하다.

### 2. SEO 최적화
SSR도 미리 렌더링 된 HTML을 크롤러가 인식해 SEO 최적화가 가능했다.  
SSG는 요청의 경우가 다른것이지 미리 렌더링 된 파일을 준비하는 건 똑같기에 검색 엔진에 노출이 잘 된다.  

### 3. 서버 부하 감소
위에서도 말했듯이 서버에서 클라이언트의 요청마다 페이지를 생성하는 것은 아니기에 서버의 부하가 적다.

### 4. 보안 강화
서버 측 코드를 실행하지 않기 때문에 서버 사이드의 보안 취약점이 줄어들고 이외에 보안 공격에도 위험 부담이 적다.  
덤으로, 서버 뿐만 아니라 데이터 베이스 접근도 필요로하지 않기에 보안이 좋다.

### 5. 개발 및 배포 간소화
페이지를 빌드한 후에 정적 파일로 배포하기 때문에 따로 설정이 필요하지 않으며 Vercel, Netlify 등의  
무료 호스팅 서비스와도 잘 통합된다고 한다. 개발자가 build, deploy 하지 않으면 페이지의 내용이 변하지 않으니  
예측이 가능해 버전 관리가 용이하다.

## SSG 단점
지금까지 장점들을 설명했지만 읽다보니 단점이 눈에 잘 들어오기도 한다.

자주 갱신되는 데이터를 가진 페이지라면 데이터가 변경될 때마다 개발자가 일일이 빌드하고 배포해야한다는 이야기가 된다.  
예를 들어 실시간 채팅, 주식 같은 곳에서는 적합하지 않다. 매번 사이트를 수동으로 빌드해야 하는 것은 매우 비효율적이다.  
서버 데이터가 아니라 로컬 파일 기반 데이터도 변경된다면 배포해주어야 한다.

# ISR
빌드 타임에 정적으로 파일을 생성하고 제공해주는 것은 동일하나 SSG의 단점을 보완하기 위해 주기를 설정할 수 있다.  
이 주기를 설정하면 정기적으로 페이지를 재생성할 수 있도록 할 수 있다. SSR만큼은 아니지만 SSG의 이점을 챙기면서  
데이터의 빈번한 업데이트에 대응할 수 있는 렌더링 방식이다.

```jsx
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post: { id: number }) => ({ id: post.id.toString() }));
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const revalidate = 10;

export default PostPage;
```
**주의할 점은 revalidate를 설정하면 setInterval처럼 계속 실행되는 것이 아니라 사용자가 접속한 후에  
혹은 새로고침한 후에 revalidate로 지정한 시간이 지나면 페이지를 재생성하는 것이다.**

페이지 라우팅에서는 구현 방법이 다르다!
