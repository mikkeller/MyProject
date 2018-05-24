function other() {
    return 'other!!!!!';
}

module.exports = other; 
// 외부 어딘가에서 파일 자체를 모듈로 가져와서 사용할 수 있게 해준다.
// node.js는 각 파일마다 자신의 컨텍스트를 갖고 있기 때문에 모듈화 시켜주지 않으면 다른 녀석을 참조하지 못한다.
// module 하기 전에는 other.js와 main.js는 서로 다른 세계에 있는 것이다.