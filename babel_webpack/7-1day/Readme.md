# 7-1day - Babel

## Babel 설치
- npm install --save-dev babel babel-cli 로 babel 설치
- npm i -D  babel babel-cli (위 내용과 똑같은 명령어의 약자)

Next) Package.json 에서 build 명령어 추가한다.<br>

"scripts": {
  "build": "babel src --out-dir lib", //src folder에 있는 내용을 lib folder로 빼내겠다는 뜻
  "test": "echo \"Error: no test specified\" && exit 1"
}

터미널에서 npm run build 하면 해당 명령어 실행이 된다.

Next) 터미널에서 npm i  -D babel-preset-env 설치한다. balbel과 함께 설치해줘야 한다.<br>
folder의 root에 .babelrc 라는 파일을 하나 생성해준다.
.babelrc의 내용은 하기 처럼 타이핑 해준다.

{
  "presets": [
    ["env"]
  ]
}

.babelrc 에 내용 작성 후 터미널에서 npm run build 쳐보자.

package.json scripts에 "build:watch": "babel src --out-dir lib --watch"를 추가 해준 후,<br>
터미널에서 npm build:watch 입력 실행하면 저장할 때마다 src에서 lib로 소스를 날려준다.

Tip. 작업 소스 -> 컴파일 -> 빌드된 소스(배포용 소스) -> 실서버 배포(브라우저)