// Generator 함수
// 제네레이터 함수는 함수의 실행을 나누어서 할 수 있는 함수
// 제네레이터 함수는 제네레이터 객체를 반환
// yield 키워드를 통해서 함수 실행의 흐름을 양보
function* generatorFunc() {
    try {
        console.log('제네레이터 함수 수행 a');
        yield 1;
        console.log('제네레이터 함수 수행 b');
        yield 2;
        console.log('제네레이터 함수 수행 c');
        yield 3;
        console.log('제네레이터 함수 수행 d');
    } catch (err) {
        console.log(err);
    }
}

// 제네레이터 객체 생성
const generator = generatorFunc();
// next 호출시 값과 제네레이터 함수 완료 여부를 가진 객체를 반환
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
// return 호출시 return의 인자값과 제네레이터 함수 완료 여부를 가진 객체를 반환
// console.log(generator.return('실행 완료')); // { value: '실행 완료', done: true }

// throw 호출시 에러를 발생시키고 undefined와 제네레이터 함수 완료 여부를 가진 객체를 반환
console.log(generator.throw('에러 발생')); // 에러 발생 { value: undefined, done: true }

// async / await
// node 환경에서 fetch 함수를 사용하려면 node-fetch 를 설치해야함
// npm 권한 없을시 Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
// 터미널 > npm install node-fetch@2 --save-dev

// node-fetch 임포트
const fetch = require('node-fetch');
async function fetchTodo() {
    const url = 'http://jsonplaceholder.typicode.com/todos/1';
    // fetch 작업이 끝난 후 response 에 저장
    const response = await fetch(url);
    // response.json() 작업이 끝난 후 todo에 저장
    const todo = await response.json();
    console.log(todo);
        
}
fetchTodo(); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }