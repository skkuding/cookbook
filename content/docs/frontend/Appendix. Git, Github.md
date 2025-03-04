+++
title = "Appendix. Git & Github"
description = "코드의 버전 관리를 위해 Git과 Github를 사용해봅니다."
icon = "article"
date = "2023-09-11"
lastmod = "2023-10-05"
weight = 300
+++

스꾸딩은 프로젝트 관리를 위해 깃과 깃헙을 사용해요! 개인적으로 프로젝트를 관리할 때도 깃과 깃헙을 사용하면 정말 편하답니다. 이번 주차에는 깃과 깃헙을 사용하는 방법을 배워보아요!

> 해당 내용은 따로 정리 안해도 돼요. 다만 맨 아래 실습 프로젝트에 적용하기 부분은 꼭 참고해서 실습 프로젝트를 진행해 주세요!

## Git

깃은 버전 관리 시스템(VCS, Version Control System)이에요. 버전 관리 시스템은 코드의 변경 사항을 추적하고, 변경 사항을 저장할 수 있어요. 이렇게 하면 코드를 잃어버리거나, 잘못된 코드를 작성했을 때 이전 코드로 돌아갈 수 있어요. 또한, 여러 사람이 동시에 작업할 때 코드를 통합하는 것도 도와줘요.

- [Git 공식 사이트](https://git-scm.com/)
- [Git 간편 안내서](https://rogerdudler.github.io/git-guide/index.ko.html)

## Github

Github은 이름 그대로 git repository를 호스팅해 주는 서비스예요. 단순히 Repo를 호스팅해 주는 역할 이외로 github page를 통해 여러분의 Repo에 있는 파일들을 바탕으로 손쉽게 배포도 할 수 있어요.
밑에는 Github관련 강의 혹은 참고 사이트들이에요.

사실 Github같은 경우는 기본적인 것들만 알고 직접 사용하면서 배우는 것이 가장 좋아요! 밑에 링크 중에서 네번째 링크 강의는 2시간 가량 길이로 조금 길기는 하지만 전체적으로 훑어보기 좋습니다.

- [Github 공식 사이트](https://github.com/)
- [Github 간단 사용법 - 조코딩](https://www.youtube.com/watch?v=Fley6IFhlC8&ab_channel=%EC%A1%B0%EC%BD%94%EB%94%A9JoCoding)
- [Github Page - 생활코딩](https://www.youtube.com/watch?v=MN1g0490WAg&ab_channel=%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)
- [Github 전체강의 - 얄팍한 코딩사전](https://www.youtube.com/watch?v=1I3hMwQU6GU)

## [필수] 실습 프로젝트에 적용하기 🔥

실습 프로젝트는 개인으로 진행되기 때문에 협업 목적으로 깃과 깃헙을 사용하지는 않아요. 하지만, 깃과 깃헙을 사용하면 코드 관리가 편해지고 github page를 통해 배포도 할 수 있어요! 여러분들이 해야할 일은 다음과 같아요.

1. Github에 회원가입하기
2. Github에 Repository 만들기
   1. 퍼블릭으로 만들어요.
3. Github Repository > Settings > Pages > Branch main으로 설정하기
   1. 조금 기다리면 `https://<username>.github.io/<repository-name>`으로 배포가 되어요.

{{< figure src="../images/git.png" alt="Git" >}}

repository 폴더 구조를 위와 같이 주차 별로 나누어서 관리하면 `https://<username>.github.io/<repository-name>/<week>`으로 배포가 되기 때문에 주차 별로 배포가 가능해서 나중에 주차 별로 성장하는 모습을 볼 수 있어요!
