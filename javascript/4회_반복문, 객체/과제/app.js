/**
 * 1. 배열생성
 * 2. 배열에 값 할당 및 값 가져오기(set, get)
 * 3. 반복문
 * 4. 함수 선언 및 호출
 * 5. 함수 값 반환
 * 6. 값으로써의 함수
 *
 * 4회차까지 배웠던 모든 개념의 이해를 필요로 하는 문제다.
 * 정답을 맞추는데 초점을 맞추지 말고 1~6까지의 내용을 스스로가 정확히 인지하고 있는가에 초점을 맞춰서 풀어보자.
 */

var numbers = [1, 2, 3, 4, 5];

var ff = filter(numbers, function(v) {
    return v > 3;
});
console.log(ff); // [4, 5]

var ff2 = filter(numbers, function(v) {
    return v > 2;
});
console.log(ff2); // [3, 4, 5]

var m = map(numbers, function(v){
    return v + 10;
});
console.log(m); // [11, 12, 13, 14, 15]

var m2 = map(numbers, function(v) {
    return v * 2;
});
console.log(m2) // [2, 4, 6, 8, 10]