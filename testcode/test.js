// const buffer = Buffer.from("Hello World");

// //버퍼를 리스트의 형태로 저장하고 있기 때문에 접근이 가능하다.
// console.log(buffer);
// buffer.forEach(element => {
//     const check = String.fromCharCode(element);
//     console.log(`${element} : ${check}`);
// });

let check = 'he llo w orld';
let alter = check.split('');
let reversed = alter.reverse().join('');
console.log(reversed);