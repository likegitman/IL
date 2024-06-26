# cherry-pick
git을 이용하다보면 다른 브랜치에 커밋을 하는 경우가 종종 발생한다.  
또는 다른 사람의 커밋 일부를 내 브랜치에 가져와야 하는 경우도 생긴다.  
이럴 때 이 명령어를 사용하면 편하게 커밋을 현재 내 브랜치로 가져올 수 있다.

commit은 각각 hash 번호를 갖고 있다.  
커밋한 브랜치에서 `git log`를 치면 현재 브랜치 커밋 내역이 나오고 hash 또한 같이 나온다.   
이제 가져오고 싶은 commit의 번호를 알았다면  
`git cherry-pick <commit_hash>`를 사용하면 된다.

하나하나 할 수도 있고 아니면  
`git cherry-pick <commit_hash> <commit_hash> <commit_hash>`  
hash를 나열해서 한 번에 가져올 수도 있다.

## Conflict
가끔 cherry-pick을 진행하다 conflict가 날 수도 있다.  
다른 코드를 가져오는 거니 pull, merge와 같이 나는 것이다.  

#### 1. 해결 후 cherry-pick
하던 대로 conflict를 해결하고 add한 후  
`git cherry-pick --continue`  
위 명령어를 사용하면 계속해서 cherry-pick이 진행된다.

#### 2. 중단
만약 아예 cherry-pick을 하기 전으로 돌아가고 싶다면  
`git cherry-pick --abort`
위 명령어를 사용해 cherry-pick 이전으로 돌아갈 수 있다.

## merge
예외로 merge한 커밋을 가져올 수도 있다.  
`git cherry-pick -m 1 <merge_commit_hash>`

# 정리
1. git log로 commit hash 번호 알아내기
2. git checkout으로 commit을 가져오고 싶은 브랜치로 이동
3. git cherry-pick 명령어로 commit 가져오기

cherry-pick은 같은 커밋이 여러 개 생기는 명령어이다.  
때문에 권장되지 않은 방법이나 긴급하거나 어쩔 수 없이 사용해야 하는 상황이 생길 때 사용하면 굉장히 유용하다.
