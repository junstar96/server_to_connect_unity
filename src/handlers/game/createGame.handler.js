import { v4 as uuidv4 } from 'uuid';
import { addGameSession } from '../../session/game.session.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerids.js';
import { getUserById } from '../../session/user.session.js';
import CustomError from '../../utils/error/customError.js';
import { ErrorCodes } from '../../utils/error/errorCodes.js';

const createGameHandler = ({ socket, userId, payload }) => {
  try {
    const gameId = uuidv4();
    const gameSession = addGameSession(gameId);

    console.log("게임 쪽 생성")

    const user = getUserById(userId);
    if (!user) {
      throw new CustomError(ErrorCodes.USER_NOT_FOUND, '유저를 찾을 수 없습니다.');
    }
    gameSession.addUser(user);

    const createGameResponse = createResponse(
      HANDLER_IDS.CREATE_GAME,
      RESPONSE_SUCCESS_CODE,
      { gameId, message: '게임이 생성되었습니다.' },
      userId,
    );
    console.log("게임 쪽 생성 확인1");
    console.log("createGameResponse : ", createGameResponse);
    socket.write(createGameResponse);
  } catch (error) {
    handleError(socket, error);
  }
};

export default createGameHandler;