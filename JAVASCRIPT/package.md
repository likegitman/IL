# package.json
> 현재 프로젝트에 관한 정보와 `package manager(npm, yarn, pnpm..)`을 통해 설치한 `module`등의
> 의존성을 관리하는 파일이다. 확장자명처럼 `JSON`형식으로 이루어져있다. `npm init, yarn init` 등의
> 명령어를 치면 생성된다. 기본 형태는 `name`, `version`, `description`, `author`, `license` 등을 입력할 수 있다.
```js
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## version 관리
> `npm instal, yarn add`등의 명령어로 의존성 `module`을 설치하게 되면 `dependencies`안에 해당 모듈의
> 이름과 버전이 추가된다.기본은 버전의 소수점으로 표시되는데 특이하게 표시되는 것들이 있다.
### Tilde
`"react": "~17.0.2"`
마이너 버전이 표시되어있고 패치버전만 변경하며 버전을 적용한다. 위 예시같이 되어있다면 17.0.9까지 버전을 갱신한다.

### Caret
`"react": "^17.0.2"`
정식버전에서 마이너 버전과 패치버전을 변경하며 버전을 적용한다. 위 예시는 17.9.9까지 갱신한다.

### Example
```js
{
  "name": "example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "react": "17.0.2",
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
