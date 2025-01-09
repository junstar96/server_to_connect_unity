import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const HOST = process.env.HOST || 'localhost';

export const CLIENT_VERSION = process.env.CLEINT_VERSION || '1.0.0';

export const MAX_MESSAGE_LENGTH = 1024;

export const DATA_LENGTH_SIZE = 4;

export const HANDLE_ID_SIZE = 2; 

export const PACKET_TYPE_LENGTH  = 1;//패킷 타입, 그러니까 데이터 종류가 되겠다.

export const DB1_NAME = process.env.DB1_NAME || 'Mysql';
export const DB1_USER = process.env.DB1_USER || 'root';
export const DB1_PASSWORD = process.env.DB1_PASSWORD || 'jemuras1010!';
export const DB1_HOST = process.env.DB1_HOST || 'localhost';
export const DB1_PORT = process.env.DB1_PORT || 3306;

export const DB2_NAME = process.env.DB2_NAME || 'Mysql';
export const DB2_USER = process.env.DB2_USER || 'root';
export const DB2_PASSWORD = process.env.DB2_PASSWORD || 'jemuras1010!';
export const DB2_HOST = process.env.DB2_HOST || 'localhost';
export const DB2_PORT = process.env.DB2_PORT || 3306;
