//헤더 쪽에 어떤 데이터들을 넣을 것인지를 정의하는 곳

export const TOTAL_LENGTH = 4;
export const PACKET_TYPE_LENGTH = 1;

export const PACKET_TYPE = {
    PING : 0,
    NORMAL : 1,
    GAME_START : 2,
    LOCATION : 3
}