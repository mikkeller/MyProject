# 6day - node

## 현재 경로에서 들어갈 수 있는 폴더 살펴보기
- mac: ls
- window: dir

## directory in/out
- directory 안으로: cd directory
- directory 밖으로: cd ..

## package.json add
Node js는 Package.json이 있고, 아래 방법으로 터미널에서 생성한다.
package.json add 해보자
- npm init
- npm init -y (기본 설정으로 package.json 만들기)

node '파일명' 으로 터미널에서 계속 타이핑을 해줘야 반영이 된다.
이 방법은 매우 번거롭다, 그래서 저장을 함과 동시에 자동 반영되는 nodemon을 설치해보자
npm install -g nodemon  (nodemon 설치)
nodemon .src/server.js (자신이 서버를 만든 js file 경로에 맞게 설정)
이렇게 nodemon 셋팅해주면 저장할 때 마다 서버 껐다켰다 할 필요없이 사용 가능

Tip. 터미널에서 ifconfig 로 자신의 localhost number ip 확인 가능