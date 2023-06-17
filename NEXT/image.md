# Image
> 이미지를 최적화하지 않은 채로 배포시 원본 이미지의 크기와 유형이 그대로 불러와 사용하기 때문에 배포시에는 적합하지 않다.  
> 하지만 `next/image`의 `Image`컴포넌트를 사용하면 이미지를 최적화 할 수 있다

## 장점
### 1. 이미지를 Lazy Loading한다.
> 이미지를 로드하는 시점을 필요할 때까지 지연시키는 기술이다. 스크린 밖에 있는 이미지들은 로딩을 지연시키고  
> 스크린 안에 있는 이미지만을 로드해서, 불필요한 요청을 줄이고 필요한 이미지만 빠르게 로드할 수 있도록 하는 것이다.

### 2. 이미지 사이즈를 최적화한다.
> NextJS가 요청이 들어올 때마다 각 디바이스와 브라우저에 최적화된 이미지를 생성하여 응답으로 전달해준다.
> 디바이스 크기 별로  srcSet을 미리 지정해두고, 사용자의 디바이스에 맞는 이미지를 다운로드할 수 있게 지원한다.
> 디바이스마다 적절한 사이즈의 이미지를 전달하고, Chrom 브라우저의 경우 이미지를 webp포맷으로 변경하여 전달해준다.

### 3. placeholder를 제공한다.
> 이미지가 로드되기 전 해당 영역의 너비가 0이었다가 로드된 이후 이미지가 너비를 차지하게 되어서 레이아웃이 흔들리게 되는
> CLS현상이 발생하지 않도록 placeholder를 제공한다. 이 말은 이미지가 로드되기 전 이미지 높이만큼 영역을 미리 표시하여
> 이미지가 로드된 후에 레이아웃이 흔들리지 않도록 해준다는 것이다.
> 빈 영역 또는 blur 이미지(로컬 이미지의 경우 build 타임에 생성, 리모트 이미지의 경우에는 base64로 인코딩된 data url을 지정)로
> 적용할 수도 있고 커스텀 하게 설정할 수도 있다.

## Example

### local image
```js
import Image from 'next/image';
import exampleImage from '../public/examole.png';

export default function Home() {
  return (
    <Image
      src={examoleImage}
      alt="대체 텍스"
      placeholder="blur"
    />
  );
}
```
> local image의 경우 build 타임에 import된 이미지 파일을 기준으로 자동 width, height를 지정하고 base64로 인코딩된
> blur 이미지가 생성되어 별도의 작업 없이 placeholder를 사용할 수 있다.

### remote image

```js
module.exports = {
  images: {
    domains: ["your-cdn-image-domain],
  },
};
```
> remote image의 경우 NextJS의 서버에서 이미지를 가지고 있는 remote 서버에 직접 요청을 하기 때문에
> 모든 url에 대한 접근을 허용할 경우 공격을 받을 가능성이 있다. 그래서 이미지를 서빙하는 서버가
> 안전한 서버란느 것을 NextJS에게 알려줘야 하기 때문에 next.config.js 파일에 CDN의 host를 명시해 주어야한다.

```js
import Image from 'next/image';

export default function Home() {
  return (
    <Image 
      src="/example.png"
      alt="대체 텍스트" 
      width={가로 너비} 
      height={세로 너비} 
    />;
  );
}
```
> remote image의 경우 이미지 파일을 import 하는 대신에 src에 이미지의 경로를 작성하면 된다. local image와 달리
> build 타임에 이미지 파일에 접근하는 것이 불가능하기 때문에 width, height의 정보를 지정해주어야하고 blur 이미지도 생성되지 않는다.
> 이미지가 로드되기 전 placeholder로 blur 이미지를 적용하고 싶다면 별도로 blurDataURL 속성에 base64로 인코딩 된 이미지 데이터를
> 작성해주어야한다.

### Outer path
```js
import Image from 'next/image';

export default function Home() {
  return (
    <Image 
      src="https://domain-name.com/image.png"
      alt="대체 텍스트" 
      width={가로 너비} 
      height={세로 너비} 
    />;
  );
}
```
> 값으로 외부의 이미지 파일 절대 경로를 작성할 수 있다. 그리고 next.config.js 파일에서 따로 사용되는 domain 이름을 작성해 주어야한다.
> remote image처럼 build시에는 해당 경로에 접근하지 않기 때문에 width, height 값을 필수로 작성해주어야하고 blur 이미지도
> 생성해주지 않기 때문에 따로 bulrDataURL 속성 값으로 blur 이미지를 base64로 인코딩 된 값을 작성해주어야한다.

