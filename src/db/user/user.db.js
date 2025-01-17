import pools from "../database.js"
import { v4 as uuidv4 } from "uuid";
import { SQL_OVERIES } from "./user.query.js"
import { toCamelCase } from "../../utils/transformFromCamel.js";

export const findUserByDeviceID = async (deviceid) => {
    const [rows] = await pools.USER_DB.query(SQL_OVERIES.FIND_USER_BY_DEVICE_ID, [deviceid]);
    return toCamelCase(rows[0]);
}

export const createUser = async (deviceid) => {
    const id = uuidv4();
    await pools.USER_DB.query(SQL_OVERIES.CREATE_USER,[id, deviceid]);
    return {id, deviceid};
}

export const updateUserlogin = async (id) => {
    await pools.USER_DB.query(SQL_OVERIES.UPDATE_USER_LOGIN, [id]);
}

