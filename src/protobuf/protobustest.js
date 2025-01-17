import protobuf from 'protobufjs';

//시퀀스 값을 이게 몇 번째 데이터인가를 저장하는 것. 
//시퀀스 값이 순차적이지 않을 경우 등을 검수할 수 있다.

protobuf.load("person.proto").then(root => {
  // 'person.proto' 파일을 로드합니다.

  const Person = root.lookupType("Person");
  // 'Person' 메시지 타입을 'root' 객체에서 찾습니다. 이는 person.proto 파일에서 정의한 메시지 타입입니다.

  const message = Person.create({ name: "John Doe", id: 123, email: "johndoe@example.com" });
  // 'Person' 메시지 타입을 사용하여 새로운 메시지 객체를 생성합니다. 여기서는 name, id, email 필드를 설정합니다.

  const buffer = Person.encode(message).finish();
  // 생성된 메시지 객체를 바이너리 형식으로 인코딩합니다. 'finish' 메서드는 최종 인코딩된 버퍼를 반환합니다.

  const decodedMessage = Person.decode(buffer);
  // 인코딩된 버퍼를 다시 메시지 객체로 디코딩합니다.

  console.log("Original message:", message);
  // 원래 생성된 메시지 객체를 콘솔에 출력합니다.

  console.log("Encoded buffer:", buffer);
  // 인코딩된 바이너리 버퍼를 콘솔에 출력합니다.

  console.log("Decoded message:", decodedMessage);
  // 디코딩된 메시지 객체를 콘솔에 출력합니다.

})