## 모노레포 등장 배경
모노레포 이전에는 모듈화 하지 않고 하나의 레포지토리에 모든 것을 넣었던 모놀리식과  
모놀리식은 관심 분리가 어렵고 작은 기능의 추가가 제품 모두에 영향을 끼칠 수 있는 단점이 있다.  
이로 인해 나온 것이 멀티 레포이다. 멀티 레포는 소스 코드를 모듈화하고 각 모듈에 독자적인 영역을 부여하고  
버전 관리를 통해서 관심을 분리하는 것이 가능했다. 이로 인해 제품 모두에 영향을 주는 것을 방지했는데  
각각의 레포가 다르기에 재사용성과 빌드 및 배포 과정이 어려웠다.

## 모노레포
모노레포는 단일 레포지토리에 여러 서브 프로젝트가 존재하는 방식이다.  
때문에 여러 프로젝트가 동일한 컨벤션을 가지도록 하기 유용하고 여러 프로젝트에 동일하게 사용되는  
공통 자원을 따로 모아둬 쉽게 가져다 쓸 수 있다. 또한 빌드, 배포 등의 작업을 한 번에 병렬로 처리할 수도 있다.

# Turborepo
Vercel 인수한 것으로 js, ts 베이스의 모노레포를 위한 고성능 빌드 시스템이다.  
Vercel, AWS, Miro, PayPal, Discord, LINE+ 등의 거대 서비스들에서 프로덕션 단계로 사용되고 있다고 한다.  
지금도 개발이 활발하게 진행 중이다.
모노레포 환경에서 **조금 더 쉽고 빠르게** 개발할 수 있도록 빌드 도구를 개발자에게 제공하는 것이 목표이다.  
(Turborepo 같은 도구의 도움을 받지 않으면 원래 맨 처음부터 개발자가 서비스에 맞게 모노레포 환경을 세팅해야한다.)  
자동으로 세팅해주는 것부터 엄청난데 고급 빌드 시스템을 구축하는 복잡한 과정을 TUrborepo가 대신해주기에 개발자는  
오로지 개발에만 집중할 수 있다. 또한 캐싱도 제공하여 한 번 수행한 작업을 다시 수행하지 않는다.  
이 말은 같은 작업을 두 번째 실행할 때에는 이전에 캐싱해 놓은 로그를 다시 보여준다.

## 1. Incremental builds
작업 진행을 캐싱해 이미 계산 된 내용은 건너뛴다는 의미이다.  
즉, 빌드는 딱 한 번만 하는 것을 목표로 한다.

## 2. Content-aware hasing
타임 스앰프가 아니라 콘텐츠를 인식하는 방식으로 해싱을 지원한다.  
이를 통해 모든 파일을 다시 빌드한 게 아니라 변경 된 파일만 변경할 수 있도록 해준다.  

## 3. Cloud caching
클라우드 빌드 캐시를 팀원 CI/CD와 공유한다. 로컬 환경을 넘어 클라우드 환경에서도 빠른 빌드를 제공한다.

## 4. Parallel execution
모든 코어를 사용하는 병렬 실행을 목표로 한다. 
지정 된 태스크 단위로 의존성을 판단해 최대한 병렬적으로 진행한다.
![image](https://github.com/user-attachments/assets/ec2fa4e2-6b3f-4edf-8db6-6c6fb4046709)

## 5. Task Pipelines
태스크 간의 연결을 정의해서 빌드를 언제 어떻게 실행할 지 판단해 최적화 한다.

## 6. Zero Runtime Overhead
런타임 코드와 소스 맵을 다루지 않아 런타임 단계에서 파악하지 못 한 리스크가 불거질 위험이 없다.

## 7. Pruned subsets
빌드에 필요한 요소만으로 모노레포의 하위 집합을 생성해 PaaS 배포 속도를 높인다.

## 8. JSON configuration
별도의 코드 작업 없이 JSON 설정으로 터보를 사용할 수 있다.

## 9. Profile in browser
빌드 프로필로 빌드 과정을 시각화하면 병목 지점을 쉽게 찾을 수 있다.

// Turborepo 분석 추가