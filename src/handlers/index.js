import { HANDLER_IDS } from "../constants/handlerids.js";
import createGameHandler from "./game/createGame.handler.js";
import joinGameHandler from "./game/joinGame.handler.js";
import { initialHandler } from "./user/initial.handler.js";
import { ErrorCodes } from "../utils/error/errorCodes.js";
import CustomError from "../utils/error/customError.js";


export const getHandlerById = (handlerId) => {
   if (!handlers[handlerId]) {
     throw new CustomError(
       ErrorCodes.UNKNOWN_HANDLER_ID,
       `핸들러를 찾을 수 없습니다: ID ${handlerId}`,
     );
   }
   return handlers[handlerId].handler;
 };
 
 export const getProtoTypeNameByHandlerId = (handlerId) => {
   if (!handlers[handlerId]) {
    console.log([HANDLER_IDS.INITIAL]);
    console.log(handlerId);
     // packetParser 체크하고 있지만 그냥 추가합니다.
     throw new CustomError(
       ErrorCodes.UNKNOWN_HANDLER_ID,
       `핸들러를 찾을 수 없습니다: ID ${handlerId}`,
     );
   }
   return handlers[handlerId].protoType;
 };
const handlers = {
   [HANDLER_IDS.INITIAL] : {
    handler : initialHandler,
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


