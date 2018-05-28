/**
 * 1. text를 받아서 alert을 띄우는 popup 함수를 만들어라
 * 2. iPhone 일 때는 '아이폰' 이라는 문자열을 popup 해라
 * 3. Android 일 때는 '안드로이드' 라는 문자열을 popup 해라
 * 4. 둘다 아닐 때는 '기타'라는 문자열을 popup 해라
 */

/**
 * 1. deviceName를 받아서 div에 텍스트를 뿌려줘라
 * 2. iPhone 일 때는 '아이폰' 이라는 문자열을 draw 해라
 * 3. Android 일 때는 '안드로이드' 라는 문자열을 draw 해라
 * 4. 둘다 아닐 때는 '기타'라는 문자열을 draw 해라
 */

/**
 * 1. input의 value값이 change가 될 때 컬러, 폰트사이즈를 변경해줘라
 * 2. color 값에 따라 Content 값의 color를 변경
 * 3. fontSize 값에 따라 Contents 값의 font-size를 변경
 */

function getElementById(id) {
    //document.getElementById 중복을 하나의 함수로 정의
    return document.getElementById(id);

    //return document.['getElementById'](id); 
    //document 객체는 이미 정의되어 있기 때문에 []에 넣어 문자열로 뽑을 수도 있다.
    //ex) document.getElementById == ['document.getElementById']
}

getElementById('Btn').addEventListener('click', app);
getElementById('Input-color').addEventListener('change', function(e) {
    //console.log(e.target.value);
    changeColor('Content', e.target.value);
});
getElementById('Input-font-size').addEventListener('change', function(e) {
    changeFontSize(e.target.value);
});
getElementById('Input-color-test').addEventListener('change', function(e) {
    //console.log(e.target.value);
    changeColor('Test', e.target.value);
});

function popup(text) {
    alert(text);
}
function draw(deviceName) {
    getElementById('Content').innerText = deviceName;
}
function changeColor(id, color) {
    getElementById(id).style.color = color;
}
function changeFontSize(fontSize) {
    getElementById('Content').style.fontSize = fontSize;
}

function isIPhone() {
    return navigator.userAgent.match(/iPhone/);
}
function isAndroid() {
    return navigator.userAgent.match(/Android/);
}

function app() {
    /*if (isIPhone()) {
        return popup('아이폰');
    }
    if (isAndroid()) {
        return popup('안드로이드');
    }

    return popup('기타');*/

    if (isIPhone()) {
        return draw('아이폰');
    }
    if (isAndroid()) {
        return draw('안드로이드');
    }

    return draw('기타');
}
//app();


//리팩토링
//낮은 단계에서 중복되는 것을 찾아서 리팩토링
//하지만 중복되는 것을 찾는게 쉽지는 않다.
