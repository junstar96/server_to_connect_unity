import { HANDLER_IDS } from "../constants/handlerids.js";
import { addUser } from "../session/user.session.js";

const handlers = {
   0 : HANDLER_IDS
};

export const getHandlerById = (handlerid) => {
    if(!handlers[handlerid])
    {
        console.error(`핸들 아이디 못 찾음, ${handlerid}`)
    }

    return handlers[handlerid];
}

export const getProtoTypeNameByHandlerId = (handlerid) =>{
    if(!handlers[handlerid])
    {

    }
}

export const initialHandler = ({socket, userid, payload}) => {
    const {deviceid} = payload;
    addUser(socket,deviceid);

    //처리가 끝났을 때 보내기. emit
    socket.write("");
}
