import { onData } from "./onData.js";
import { onEnd } from "./onEnd.js";
import { onError } from "./OnError.js";

export const onConnection = (socket) => {
    //기본에는 소켓 통신을 통해 연결을 했으니 여기도 소켓을 받자.
    console.log(`connected : ${socket.remoteAddress}:${socket.remotePort}`);

    //각 클라이언트마다 고유 버퍼를 유지하기 위함
    socket.buffer = Buffer.alloc(0);

    //데이터를 집어 넣는다는 의미
    socket.on('data', onData(socket));
    //연결 끊겼을 때
    socket.on('end', onEnd)

    socket.on('error', onError(socket))
}