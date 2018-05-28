// 응용문제 1 2 입니다.

function gugudan(n, m) {
    // 방어코드, 내가 2번째 인자 값을 지정하지 않았을 경우 구구단은 9까지로
    if (!m) {
        m = 9;
    }
    for (var i = 1, m; i <= m; i++ ) {
        console.log(n + ' * ' + i + ' = ' + (n * i));
    }
    //console.log('2 * ' + i + ' = ' + result);
    //console.log('2 * 2 = 4');
    //console.log('2 * 4 = 6');
}

//gugudan(2, 4);