# Git Hooks
> 만약 프로젝트를 할 때 팀원 모두가 개발 문화와 정책을 논의할 때 개발 프로세스만 잘 확립해도  
> 개발, 테스트 및 배포까지 손쉽게 흘러가고 오류의 발생도도 크게 줄어든다. 하지만 현실은  
> `코딩 스타일`, `테스트 코드 잘 못 작성`, `master 브랜치 밀어넣기` 등등 실수들로 규칙을 지키지 못하는  
> 일들이 발생한다. 이러한 실수들을 미리 **사전에 방지**할 수 있는 방법이 있다면 당연히 좋을 것이다.  
> 이때 `Git`을 사용한다면 `Git Hooks`를 활용하여 쉽고 간단하게 규칙을 **강제**할 수 있다.  
> `Git`과 관련된 어떤 작업이 있을 때 특정 **스크립트**를 실행할 수 있도록 하는 기능이다.  
> 클라이언트 훅과 서버 훅으로 나뉘는데 클라이언트 훅은 `commit`, `merge`, 'push'가 발생하기 전에  
> 클라이언트에서 실행하는 훅이고 서버는 `git repository`로 `push`가 발생하였을 때 발생하는 훅이다.  
> 또 클라이언트 훅은 `commit wolkflow hook`, `email wolkflow hook`, 기타 `hook`으로 나뉜다.  

|분류|훅|설명|
|------|---|---|
|커밋 워크플로 훅|pre-commit|commit을 실행하기 전에 실행|
||prepare-commit-msg|commit 메시지를 생성하고 편집기를 실행하기 전에 실행|
||commit-msg|commit 메시지를 완성한 후 commit을 최종 완료하기 전에 실행|
||post-commit|commit을 완료한 후 실행|
|이메일 워크플로 훅|applypatch-msg|git am 명령 실행 시 가장 먼저 실행|
||pre-applypatch|patch 적용 후 실행하며 patch를 중단시킬 수 있음|
||post-applypatch|git am 명령에서 마지막으로 실행하며 patch를 중단시킬 수 없음|
|기타 훅|pre-rebase|Rebase하기 전에 실행|
||post-rewrite|git commit -amend, git rebase 같이 commit을 변경하는 명령을 실행한 후에 실행|
||post-merge|Merge가 끝나고 나서 실행|
||pre-push|git push 명령 실행 시 동작하며 remote 정보를 업데이트 하고 난 후에 remote로 데이터를 전송하기 전에 실행 및 push를 중단시킬 수 있음|

## husky
> `Git hooks`를 보다 쉽게 적용할 수 있는 `npm` 모듈이다. 심지어 `Git hooks`에 대해 자세히 알지
> 못 해도 `commit`, `push` 정책을 관리하고 공유할 수 있다.

### install
`npm install --save-dev husky`



