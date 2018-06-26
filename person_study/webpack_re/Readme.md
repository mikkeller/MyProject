# webpack 복습

* npm init -y 로 package.json 만들고 시작
* npm i -D babel babel-cli babel-loader babel-preset-env webpack webpack-cli   로 설치한다.
* root에 .babelrc 파일 생성(babel사용) 아래와 같이 파일 내용을 타이핑 해준다.

~~~
{
    "presets": [
        ["env"]
    ]
}
~~~

* root에 .webpack.config.js 파일 생성(webpack사용) 아래와 같이 파일 내용을 타이핑 해준다.

~~~
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};
~~~

* src 폴더에 있는 index.js를 index.bundle.js로 번들시킬 거니까 src 폴더도 만들어주고 index.js도 만들어줍니다.
* package.json에 script를 추가해줍니다. npm run start를 입력하면, 이제 webpack을 watch 시킬 수 있습니다.

~~~
"start": "webpack --mode=development --watch",
~~~