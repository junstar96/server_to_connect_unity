import { HANDLER_IDS } from "../constants/handlerids.js";

 
export const getHandlerById = (handlerid) => {
    if(!handlers[handlerid])
    {
        console.error(`핸들 아이디 못 찾음, ${handlerid}`)
    }

    return handlers[handlerid].handler;
}

export const getProtoTypeNameByHandlerId = (handlerid) =>{
    if(!handlers[handlerid])
    {
        console.error(`핸들 아이디 못 찾음, ${handlerid}`)
    }

    return handlers[handlerid].prototype;
}

const handlers = {
   [HANDLER_IDS.INITIAL] : {
    handler : getHandlerById,
    prototype : 'initial.InitialPacket'
   }
};


