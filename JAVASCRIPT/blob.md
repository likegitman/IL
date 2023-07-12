# Blob
> `Binary Large Objects`의 약자이다. 단순한 텍스트가 아닌 이미지나 사운드, 동영상 등의
> 대용량 binary data를 담을 수 있다. 주로 데이터의 크기 및 `MIME type`을 알아내거나
> 데이터 송수신 작업에 사용된다.

## Constructor
`let exelBlob = new Blob(array, options);`
> Blob 생성자는 두 개의 매개변수를 받는다. 첫 번째로 받는 배열(array)인자에는
> `ArrayBuffer`, `ArrayBufferView`, `Blob`, `DOMString`중의 하나로 데이터의 배열을 전달한다.
> 두 번째로 받는 options인자로는 `{type: ..., endings: ...}`의 형태를 가지고 있는데
> `type`은 contents의 MIME Type, `endings`는 `native`(사용중인 OS에 맞춰 줄바꿈 문자를 사용)와
> `transparent`(사용하던 줄바꿈 문자를 그대로 사용 DEFAULT)로 구성되어있다.

```js
let htmlCode = ['<!Doctype html>', Hello, world'];
let htmlBlob = new Blob(htmlCode, {
  type: 'text/html',
  endings: transparent
});
```
## Method 
`Blob.slice([start, [, end[, contentType]]]);`
> `start`는 시작하는 바이트의 위치이다(기본값은 0), `end`는 마지막 바이트의 위치이고
> `contetntType은 return될 새 Blob객체의 contetentType`을 설정한다.
