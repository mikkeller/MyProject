
/* changeColor, changeFontSize 함수는 스타일을 변경하는 함수이다.
 * 또 다른 스타일로 변경해야 하는 요구가 생길 경우 이런 비슷한 일을 하는 함수가 계속 작성 될 것만 같다.
 * 예: changeBackgroundColor, changeWidth, changeDisplay....이렇게 함수를 중복해서 작성하는 것 보다
 * 스타일을 변경하는 함수 하나를 만들어서 기존 코드를 수정하는게 유연한 확장성 측면에서도 더 좋을 것 같다.
 * 스타일 변경에 책임을 갖는 css 함수를 만들어라.
 * 스타일 변경에 책임을 갖는 css 함수를 만들어라.
 */

function abc(selector) {
    if ('id') {
        return 'getElementById'
    }
    if ('class') {
        return 'getElementsByClassName'
    }
}
function getElementById(id) {
    return document.getElementById(id);
}
function dg(selector) {
    return document[abc(selector)](selector);
}

getElementById('Btn').addEventListener('click', app);
getElementById('Input-color').addEventListener('change', function(e) {
    css('Content', 'color', e.target.value);
});
getElementById('Input-font-size').addEventListener('change', function(e) {
    css('Content', 'fontSize', e.target.value);
});
getElementById('Input-color-test').addEventListener('change', function(e) {
    css('Test', 'color', e.target.value);
});
function css(id, key, value) {
    getElementById(id).style[key] = value;
    //id, backgroundColor, red;
}

function isIPhone() {
    return navigator.userAgent.match(/iPhone/);
}
function isAndroid() {
    return navigator.userAgent.match(/Android/);
}

function app() {
    if (isIPhone()) {
        return draw('아이폰');
    }
    if (isAndroid()) {
        return draw('안드로이드');
    }

    return draw('기타');
}