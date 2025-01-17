import { HANDLER_IDS } from "../../constants/handlerids.js";
import { createUser, findUserByDeviceID, updateUserlogin } from "../../db/user/user.db.js";
import { userSessions } from "../../session/sessions.js";
import { addUser } from "../../session/user.session.js";

const handlers = {
   0 : HANDLER_IDS
};

export const initialHandler = async ({socket, userId, payload}) => {
    const {deviceId} = payload;
    addUser(userId,socket);

    let user = await findUserByDeviceID(deviceId);

    if(!user)
    {
        user = await createUser(deviceId);
    }
    else
    {
        await updateUserlogin(user.id);
    }

    //처리가 끝났을 때 보내기. emit
    socket.write("");
}
