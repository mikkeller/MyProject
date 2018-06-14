const $ = require('jquery');
const DOM = {
    app: '#app'
};
// 선택자가 바뀐다면 위의 객체에서 값만 바꿔주면 되겠다.

$(DOM.app).append('<div id="count">0</div>');
$(DOM.app).append('<button id="btn-up">up</button>');
$(DOM.app).append('<button id="btn-down">down</button>');

$('#btn-up').on('click',() => {

});
$('#btn-down').on('click',() => {
    console.log('test2');
});

const sum = (a, b) => a + b;
let aaa = 1;
class Person {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.space = [];
    }
    eat(food) {
        this.space.push(food);
        this.hp++;
    }
}
/*
const p1 = new Person('wook');
const p2 = new Person('kim');
p1.eat({name: '사과'});
p2.eat({name: '똥'});
p2.eat({name: '똥'});
console.log(p1);
console.log(p2);
*/

class Student extends Person {
    constructor(name) {
        super(name);
    }
    study() {
        this.hp--;
    }
    eat(food) { //부모 클래스에 있는 걸 자식 클래스가 재정의하는 것을 오버라이드 라고 한다.
        console.log('선생님 눈치 보며 먹는다');
        super.eat(food); //super 나의 부모라고 보면 된다.
    }
}
const s1 = new Student('wook');
s1.study();
s1.study();
s1.study();
s1.eat({name: '포도'});
console.log(s1);

class Father extends Person {
    constructor(name) {
        super(name);
    }

    work() {
        this.hp--;
    }
    eat(food) {
        console.log('와이프 눈치보며 먹는다');
        super.eat(food);
    }
}
const f1 = new Father('kko');
f1.work();
f1.eat({name: '사과'});
f1.eat({name: '사과'});
f1.eat({name: '사과'});

console.log(f1);
console.log('test');
