# CI / CD
> Continuous Integration / Continuous Delivery의 약자다. 지속적인 통합 및 지속적인 서비스를 제공하는 방법이다.

## CI
> 개발자를 위한 자동화 프로세스인 지속적인 통합을 의미한다. 기존의 코드에 새로운 코드를 성공적으로 통합할 경우에  
> Application에 대한 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트가 된다. 이렇게 되면 공유 레포지토리에  
> 통합돼 여러 개발자가 동시에 Application 개발을 문제없이 진행할 수 있게된다. 예시로 여러 개발자가 git tool을  
> 이용한다면 각각의 commit이 계속해서 쌓이게 된다. 이렇게 된다면 build와 test, merge를 하려면 많은 에러가 발생한다.  
> `CI`는 이럴 때 자동화된 build와 test는 소스코드의 충돌을 막아주는 역할을 한다.

## CD
> 사용자를 위한 지속적인 서비스 제공 및 지속적인 배포를 의미한다. __D__ 는 `Delivery` 또는 `Deployment`로 사용된다.
> 개발을 끝냈더라도 배포하지 않으면 사용자에게 서비스가 도달할 수 없다.

### Continuous Delivery
> 개발자들이 test를 거쳐서 적용한 변경 사항이 자동으로 레포지토리에 업로드되는 것을 말한다. 운영팀은 이 레포지토리에
> Application을 배포한다. `Continuous Delivery`는 최소한의 노력으로 새로운 코드를 배포하는 것을 목적으로 한다.

### Continuous Deployment
> 개발자들의 변경 사항을 레포지토리에서 고객이 사용하던 production 환경까지 자동으로 releaze하는 것을 말한다.
> `Continuous Deployment`는 파이프라인의 다음 단계를 자동화 함으로써 장점을 최대로 활용한다.
