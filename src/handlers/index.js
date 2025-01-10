import { HANDLER_IDS } from "../constants/handlerids.js";
import createGameHandler from "./game/createGame.handler.js";
import joinGameHandler from "./game/joinGame.handler.js";

export const getHandlerById = (handlerid) => {
   console.log("핸들 아이디 : ",handlerid)
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
   },
   [HANDLER_IDS.CREATE_GAME] : {
    handler : createGameHandler,
    prototype : 'game.CreateGamePayload'
   },
   [HANDLER_IDS.JOIN_GAME] : {
    handler : joinGameHandler,
    prototype : 'game.JoinGamePayload'
   },

};


