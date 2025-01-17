export const packetNames = {
    common : {
        Packet : 'common.Packet',
        Ping : `common.Ping`
    },
    response : {
        Response : 'response.Response'
    },
    game : {
        CreateGamePayload : 'game.CreateGamePayload',
        JoinGamePayload : 'game.JoinGamePayload'
    },
    initial : {
        InitialPacket : 'initial.InitialPacket'
    },
    gameNotification: {
        LocationUpdate : 'gameNotification.LocationUpdate',
        Start : 'gameNotification.Start'
    }
}