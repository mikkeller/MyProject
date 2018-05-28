// 0부터 시작하여 숫자를 1씩 증가시키는 up 함수와
// 1씩 감소 시키는 down 함수를 작성하라

//var number = 0; // 다른외부에서 접근이 가능한 전역변수이기 때문에 사이드이펙트 가능성이 큼

function counter() {
    var number = 0;
    function up() {
        return ++number;
    }
    function down() {
        return --number;
    }
    //클로져 사용으로 인해

    return {
        up : up,
        down : down
    }
}
