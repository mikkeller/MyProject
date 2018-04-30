/**
 * 밖에서 sw가 접근 불가하도록
 * 즉시실행함수(IIFE라고 한다)로 실행
 * 클로저를 이용한 패턴
 */

/*
var sw = false;
function toggle() {
    sw = !sw;
    return sw;
}
*/


//클로저를 이용한 패턴
var toggle = (function() {
    var sw = false;
    return function() {
        sw = !sw
        return sw;
    };
})();