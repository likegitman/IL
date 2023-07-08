# swiper
> 스와이프 기능(슬라이더)를 구현할 수 있게 해주는 라이브러리이다.

## 추가적인 모듈
```
Virtual - 가상 slide 모듈
Keyboard - Keyboard 제어 모듈
Mousewheel - Mouse Wheel 제어 모듈
Navigation - Navigation 모듈
Pagination - Pagination 모듈
Scrollbar - Scrollbar 모듈
Parallax - 시차 모듈
FreeMode - 자유 모드 모듈
Grid - Grid 모듈
Manipulation - Slide 조작 모듈(Core 버전만 해당)
Zoom - Zoom 모듈
Controller - Controller 모듈
A11y - 접근성 모듈
History - History Navigation 모듈
HashNavigation - Hash Navigation 모듈
Autoplay - 자동 재생 모듈
EffectFade - Fade 효과 모듈
EffectCube - Cube 효과 모듈
EffectFlip - 뒤집기 효과 모듈
EffectCoverflow - Coverflow 효과 모듈
EffectCards - Card 효과 모듈
EffectCreative - Creative 효과 모듈
```

## style
```
swiper/css - 핵심 Swiper 스타일
swiper/css/a11y - A11y 모듈에 필요한 스타일
swiper/css/autoplay - 자동 재생 모듈에 필요한 스타일
swiper/css/controller - Controller 모듈에 필요한 스타일
swiper/css/effect-cards - Card 효과 모듈에 필요한 스타일
swiper/css/effect-coverflow - Coverflow Effect 모듈에 필요한 스타일
swiper/css/effect-creative - Creative Effect 모듈에 필요한 스타일
swiper/css/effect-cube - Cube Effect 모듈에 필요한 스타일
swiper/css/effect-fade - Fade 효과 모듈에 필요한 스타일
swiper/css/effect-flip - Flip Effect 모듈에 필요한 스타일
swiper/css/free-mode - 자유 모드 모듈에 필요한 스타일
swiper/css/grid - 그리드 모듈에 필요한 스타일
swiper/css/hash-navigation - Hash Navigation 모듈에 필요한 스타일
swiper/css/history - history 모듈에 필요한 스타일
swiper/css/keyboard - 키보드 모듈에 필요한 스타일
swiper/css/manipulation - 조작 모듈에 필요한 스타일
swiper/css/mousewheel - Mousewheel 모듈에 필요한 스타일
swiper/css/navigation - 탐색 모듈에 필요한 스타일
swiper/css/pagination - Pagination 모듈에 필요한 스타일
swiper/css/parallax - 시차 모듈에 필요한 스타일
swiper/css/scrollbar - Scrollbar 모듈에 필요한 스타일
swiper/css/thumbs - Thumbs 모듈에 필요한 스타일
swiper/css/virtual - 가상 모듈에 필요한 스타일
swiper/css/zoom - Zoom 모듈에 필요한 스타일
```

## install
### npm
`npm i swiper`

### yarn
`yarn add swiper`

## Example
```js
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slide({slides}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide)=>(
        <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
```
