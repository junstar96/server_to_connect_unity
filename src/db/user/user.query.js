export const SQL_OVERIES = {
    FIND_USER_BY_DEVICE_ID : 'SELECT * FROM user where device_id = ?',
    CREATE_USER : 'INSERT INTO user (id, device_id) VALUES (?, ?)',
    UPDATE_USER_LOGIN : 'UPDATE user SET last_login = CURRENT_TIMESTAMP WHERE id = ?'
}