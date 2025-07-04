import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const client = await connectDB;
        console.log(res.body)
        if(req.body.title == '' || req.body.content == ''){
            return res.status(500).json("너 제목 왜 안씀")
        }

        try{
            const db = client.db("forum")
            let result = await db.collection('post').insertOne(req.body)
        } catch(error){
            return res.status(500).json("DB 에러")
        }
       
        return res.status(200).redirect('/list')
    }
}