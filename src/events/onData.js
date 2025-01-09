import { config } from "../config/config.js";
import { MAX_MESSAGE_LENGTH } from "../constants/env.js";
import { PACKET_TYPE } from "../constants/header.js";
import { getHandlerById } from "../handlers/initial.handler.js";
import { packetParser } from "../utils/parser/packetParser.js";

export const onData = (socket) => async (data) => {
    //socket의 버퍼를 만들어 두고 이 안에다 다른 값들을 게속 집어 넣는다.
    //전체 길이보다 짧은 값이 들어오고 있을 때 그 값들을 계속 스택처럼 쌓는 느낌
    socket.buffer = Buffer.concat([socket.buffer, data]);

    const totalheaderLength = config.packet.totalLength + config.packet.packetTypeLength;


    while (socket.buffer.length >= totalheaderLength) {
        const length = socket.buffer.readUInt32BE(0);

        //패킷 타입 정보 수신
        const packetType = socket.buffer.readUInt8(config.packet.totalLength);


        if (socket.buffer.length >= length) {
            console.log(`length : ${length}, packettype : ${packetType}`);

            const packet = socket.buffer.subarray(totalheaderLength, length);
            socket.buffer = socket.buffer.subarray(length);


            console.log(`length `)
            console.log(`${packet}`);

            try {
                switch (packetType) {
                    case PACKET_TYPE.PING:
                        break;
                    case PACKET_TYPE.NORMAL:
                        const { handlerId, sequence, payload, userId } = packetParser(packet);

                        const user = getUserById(userId);
                        // 유저가 접속해 있는 상황에서 시퀀스 검증
                        if (user && user.sequence !== sequence) {
                            throw new CustomError(ErrorCodes.INVALID_SEQUENCE, '잘못된 호출 값입니다. ');
                        }

                        const handler = getHandlerById(handlerId);
                        await handler({
                            socket,
                            userId,
                            payload,
                        });
                }
            } catch (error) {
                handleError(socket, error);
            }


        }
        else {
            break;
        }
    }
}