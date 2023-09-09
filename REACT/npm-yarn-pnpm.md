# npm
> `npm`이 나타나기 전에는 프로젝트의 `dependencies`를 수동으로 다운로드하고 관리하였기에  
> 그 당시 `npm`의 등장은 정말 큰 변화였다. 그리고 메타데이터를 가지고 있는 `pakage.json`과 같은 개념,  
> `dependencies`를 `node_modules`라는 폴더에 설치한다는 개념, `custom script`, `public`,  
> `private` pakage 레지스트리와 같은 개념들 모두 `npm`에 의해 도입된 것이다.

# yarn
> `npm`이 가지던 일관성, 보안, 성능 문제등을 해결하기 위해 새로운 패키지 매니저를 만들기 위한 시도를 하였다.
> 그리고 마침내 `Yet Another Resource Negotiator`, `yarn`을 만들었다. 개념과 process는 대부분 npm을 기반으로
> 설계했지만 이외에 패키지 관리자 환경에 큰 영향을 미쳤다. `npm`과 대조적으로 `yarn`은 초기 `npm`의 문제점 중
> 하나였던 설치 속도를 올리기 위해 작업을 **병렬화**하였다. 그리고 개발자 경험, 보안 및 성능에 대한 기준을 높였으며
1. native monorepo 지원
2. cache-aware 설치
3. 오프라인 캐싱
4. lock files
> 등의 개념을 패키지 매니저에 도입했다. 현재는 `yarn berry`를 개발, 개선 중이다.

# pnpm
> `npm`과 `yarn`의 가장 큰 문제는 프로젝트 간에 사용되는 `dependencies`의 중복 저장이었다.
> `yarn`은 설치 속도는 빨랐지만 두 패키지 매니저 모두 `node_modules` 내부에 의존성 트리를 얕게 유지하기 위해
> `flat`하게 패키지를 설치(동일한 패키지에 flat하게 저장)하여 관리하였다. `pnpm`은 이러한 호이스트 방식보다는
> `다른 dependencies`를 해결하는 전략인 `content-addressable storage`를 사용하였다. 이것을 사용하면 home 폴더의
> 글로벌 저장소에 패키지를 저장하는 중첩된 `node_modules`가 생성된다. 따라서 모든 버전의 `dependencies`는
> 해당 폴더에 물리적으로 한 번만 저장되므로`single source of truth`(모든 데이터에 대해 하나의 출처를 사용)을 구성하고
> 상당한 디스크 공간을 절약할 수 있다. 
