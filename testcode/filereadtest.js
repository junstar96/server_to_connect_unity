import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//파일 하나를 통째로 읽어오는 방법

const filepath = path.join(__dirname, '../src/utils/db');
const filelist = fs.readFileSync(path.join(filepath, 'testconn.js'), 'utf8');
const queries = filelist.split(';').map((query)=>query.trim()).filter((query)=>query.length>0);

// //내부 파일을 읽어오는 함수
// const fileread = fs.readdir(filepath, (err,files)=>{
//     files.forEach(element => {
//         console.log(element);
//     });
// })

for(let query of queries)
{
    console.log(query);
}