function a(a, b, c) {
    console.log(this); // window
    console.log(a, b, c);
    
    //console.log(arguments);
    
    for(var i = 0; i < arguments.length; i++) {
        var obj =  arguments[i];
        //console.log(obj);
    }
    return this;
}

var obj = {
    b: function() {
        console.log(this);
    }
}
//obj.b(); // 내 함수가 있는 객체를 가리킨다.

var obj2 = {
    c: a
};
//obj2.c(); // 위의 a()에서는 window를 가리켰지만, 이때의 실행 함수가 어떻게 실행됐느냐에 따라 this는 달라진다.

//a() === a()는 true다.
//new a() === new a()는 false다. new 생성자는 나에 의해서 새로운 객체를 만드는 것이다.

//this 호출 방법
//a.call({name: 123123}, 1, 2, 3);
//a.apply({name: 'apply'}, [1, 2, 3]);
a = a.bind({name: 'bind'});
a();