import { HANDLER_IDS } from "../constants/handlerids.js";
import createGameHandler from "./game/createGame.handler.js";
import joinGameHandler from "./game/joinGame.handler.js";

export const getHandlerById = (handlerid) => {
   return handlers[handlerid].handler;
}

export const getProtoTypeNameByHandlerId = (handlerid) =>{

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


