# 6day - node

### directory check
- mac: ls
- window: dir

### directory in/out
- directory 안으로: cd directory
- directory 밖으로: cd ..

### package.json add
Node js는 package.json이 있고, 아래 방법으로 터미널에서 생성한다.<br>
package.json add 해보자
- npm init
- npm init -y (기본 설정으로 내용 자동추가 package.json 만들기)

    node 'file name'으로 터미널에서 계속 타이핑을 해줘야 반영이 된다.<br>
    이 방법은 매우 번거로울 것이다, 그래서 저장과 동시 자동 반영되는 nodemon을 설치해보자
1. npm install -g nodemon  (nodemon 설치)
2. nodemon .src/server.js (자신이 서버를 만든 js file 경로에 맞게 설정)
3. nodemon 셋팅해주면 저장할 때 마다 서버 껐다켰다 할 필요없이 사용 가능

Tip. 터미널에서 ifconfig 로 자신의 localhost number ip 확인 가능