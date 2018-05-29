# 7-2day - Webpack

## webpack 설치
1. npm i -D webpack webpack-cli (webpack 설치)
2. package.json에서 scripts에 "start": "webpack --mode=development" 명령어 추가 (개발모드)
3. babel을 사용안할 거니까 사용됐던 bulid를 webpack에 맞게 바꿔주자, "build": "webpack --mode=production”
4. folder root에 webpack.config.js 만들어주고 하기 내용 입력<br>
````
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            loader: "bable-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};
````
***
## babel add
- npm i -D babel-loader (바벨로더 설치)

Tip. 작업 소스 -> 컴파일(웹팩 <-> 바벨) -> 빌드된 소스(배포용 소스) -> 실서버 배포(브라우저)