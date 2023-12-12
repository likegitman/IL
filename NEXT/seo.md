# SEO
SEO (검색 엔진 최적화)는 인터넷의 트래픽에서 상당한 비중을 차지하고 있기에 모든 웹 사이트에서 다루어야하는

중요한 개념이다. 검색엔진에 잘 노출돼있고 위 쪽에 위치한 웹사이트가 많은 트래픽을 확보하기 때문이다.

SEO는 Search Engine Optimization의 약자로 웹사이트의 검색 엔진 결과 페이지에서 높은 순위를 차지하도록

웹사이트를 최적화하는 과정이다. 구글, 네이버, 다음 같은 검색 엔진의 동작에 적합하게 맞추어 관련 정보를

검색할 때 웹 사이트 노출이 더 잘 되게 만드는 작업이라고 할 수 있다. 당연히 서비스는 사용자들에게 노출되어야 한다.

SEO 처리를 잘 한 웹 사이트가 검색 결과 상단에 위치할 확률이 높다.

## <meta>
html의 meta 태그로 SEO 최적화를 할 수 있다. meta는 웹 페이지가 담고 있는 내용이 아닌 웹 사이트의 정보를 명시하기 위한

용도의 태그이다. meta는 head 태그 안 쪽에 위치한다. 그래서 사용자들이 보는 웹 패이지에 전혀 영향을 주지 않지만

검색 엔진들이 웹 페이지를 읽어야 할 때는 중요한 역할을한다.

### title
HTML에서 쉽게 사용할 수 있는 title 태그이다. title 태그에 작성하는 글은 웹 사이트의 파비콘 아이콘 옆에 있는 글자이다.

이러한 글자가 너무 길어지면 당연히 가독성 면에서도 떨어지고 한글은 20자, 영문은 40자를 넘지 않는 것이 권장된다.

title은 SEO를 최적화 하는 대표적인 방법 중 하나이다.

### meta
웹 사이트의 제목은 title 태그로 작성하고 나머지 내용은 meta 태그를 이용해서 작성할 수 있다. meta 태그를 사용할 때

name과 content라는 속성을 이용해 웹 사이트의 정보를 명시할 수 있다. 대표적인 예시로
```html
<meta
  name="description"
  content="example"
/>
```
name으로 description을 적고 content로 title 태그로 담지 못했던 나의 웹 사이트에 대한 설명을 작성할 수 있다.

이것도 권장 글자 수가 있는데 한글은 80자, 영문은 160자 이내로 작성하는 게 권장된다.

### OG(Open Graph)
웹 사이트가 소셜 미디어에 공유될 때 미리보기에 사용되는 meta data를 정의하기 위한 태그이다. 사이트 URL을 공유하면

해당 웹 사이트의 이미지나 글을 미리볼 수 있을 것이다. op 태그를 사용했을 때 이러한 내용을 보여줄 수 있다.

property 속성을 사용하여 meta data의 이름을 지정한다. property 작성법은 `og:example` 식으로 사용된다.

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="example" />
<meta property="og:description" content="example"  />
<meta property="og:url" content="https://example.com" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:url" content="https://example.png" />
```
og 태그에서는 위 예시들이 가장 많이 쓰이는 SEO 최적화 방법이다.

## meta는 더 이상 SEO에 의미가 없다
위에서 다양한 SEO 방법을 설명했지만 지금은 의미가 없게 됐다. 이유는 검색엔진의 목적은 사용자가 검색한 정보와

관련있는 정보를 제공하는 것인데 웹 사이트를 상단에 노출시키기 위해 키워드를 마음대로 지정해버리게 되면서 검색엔진이

사용자가 원하는 정보를 제공하지 못하게 되었기 때문이다.

## 다양한 방법들
### SSR
meta 태그를 사용하지 못하면 SSR 방법을 사용할 수 있다. SSR은 서버에서 미리 완성된 HTML을 받아 pre-rendering을 하기에

SEO 최적화가 잘 되어있다. 그래서 Next.js를 사용하는 가장 큰 이유 중하나가 이것 때문이다.

### 시멘틱 태그
시멘틱 태그를 잘 사용하면 SEO 최적화를 높일 수 있다. 시멘틱 태그를 잘 사용한다면 검색 엔진은 페이지의 내용을

잘 이해할 수 있다. article, main, header, footer, nav 등이 시멘틱 태그들의 예시이다.

### alt
검색 엔진은 이미지를 인식하기 어려워한다. 이때 이미지 태그에 alt 속성을 설정해 이미지의 내용을

검색 엔진이 이해할 수 있게 해주는 것이 좋다.
