'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM = {
    app: '#app'
};

// 선택자가 바뀐다면 위의 객체에서 값만 바꿔주면 되겠다.

$(DOM.app).append('<div id="count">0</div>');
$(DOM.app).append('<button id="btn-up">up</button>');
$(DOM.app).append('<button id="btn-down">down</button>');

var sum = function sum(a, b) {
    return a + b;
};
var aaa = 1;

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
        this.hp = 100;
        this.space = [];
    }

    _createClass(Person, [{
        key: 'eat',
        value: function eat(food) {
            this.space.push(food);
            this.hp++;
        }
    }]);

    return Person;
}();
/*
const p1 = new Person('wook');
const p2 = new Person('kim');
p1.eat({name: '사과'});
p2.eat({name: '똥'});
p2.eat({name: '똥'});
console.log(p1);
console.log(p2);
*/

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name) {
        _classCallCheck(this, Student);

        return _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name));
    }

    _createClass(Student, [{
        key: 'study',
        value: function study() {
            this.hp--;
        }
    }, {
        key: 'eat',
        value: function eat(food) {
            //부모 클래스에 있는 걸 자식 클래스가 재정의하는 것을 오버라이드 라고 한다.
            console.log('선생님 눈치 보며 먹는다');
            _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'eat', this).call(this, food); //super 나의 부모라고 보면 된다.
        }
    }]);

    return Student;
}(Person);

var s1 = new Student('wook');
s1.study();
s1.study();
s1.study();
s1.eat({ name: '포도' });
console.log(s1);

var Father = function (_Person2) {
    _inherits(Father, _Person2);

    function Father(name) {
        _classCallCheck(this, Father);

        return _possibleConstructorReturn(this, (Father.__proto__ || Object.getPrototypeOf(Father)).call(this, name));
    }

    _createClass(Father, [{
        key: 'work',
        value: function work() {
            this.hp--;
        }
    }, {
        key: 'eat',
        value: function eat(food) {
            console.log('와이프 눈치보며 먹는다');
            _get(Father.prototype.__proto__ || Object.getPrototypeOf(Father.prototype), 'eat', this).call(this, food);
        }
    }]);

    return Father;
}(Person);

var f1 = new Father('kko');
f1.work();
f1.eat({ name: '사과' });
f1.eat({ name: '사과' });
f1.eat({ name: '사과' });
console.log(f1);