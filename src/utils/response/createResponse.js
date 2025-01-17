import { getProtoMessages } from "../../init/loadProtos.js"

export const createResponse =(handlerId, responseCode, data = null, userid) => {
    const protomessage = getProtoMessages();
    const Response = protomessage.response.Response;

    const responsePayload = {
        handlerId,
        responseCode,
        timestamp:Date.now(),
        data : data ? Buffer.from(JSON.stringify(data)) : null,
    }

    return responsePayload;
    
}