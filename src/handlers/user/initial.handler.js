import { HANDLER_IDS } from "../../constants/handlerids.js";
import { createUser, findUserByDeviceID, updateUserlogin } from "../../db/user/user.db.js";
import { addUser } from "../../session/user.session.js";

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

export const initialHandler = async ({socket, userid, payload}) => {
    const {deviceid} = payload;
    addUser(socket,deviceid);

    let user = await findUserByDeviceID(deviceid);

    if(!user)
    {
        user = await createUser(deviceid);
    }
    else
    {
        await updateUserlogin(user.id);
    }

    //처리가 끝났을 때 보내기. emit
    socket.write("");
}
