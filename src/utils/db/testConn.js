const testConn = async (pools, dbname) => {
    try
    {
        const [rows] = await pools.query('select 1 + 1 as solution');
        console.log(`${dbname }  테스트 쿼리 결가 : ${rows[0].solution}`)
    }
    catch(e)
    {
        console.error("에러 발생", e);
    }
}

const testAllConnections = async (pools) => {
    await testConn(pools.GAME_DB, 'GAME_DB');
    await testConn(pools.USER_DB, 'USER_DB');
}

export default testAllConnections;