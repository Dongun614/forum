import { connectDB } from "@/util/database";

export default async function handler(req, res){
    if(req.method == "POST"){
        const client = await connectDB;
        if(req.body.userId == '' || req.body.userPassword == ''){
            return res.status(500).json("아이디나 비밀번호를 입력하지 않음");
        }


        try{
            const db = client.db("forum")
            console.log(req.body)
            let result = await db.collection("member").findOne( { userId : (req.body.userId) } )
            if(result){
                return res.status(500).json("이미 사용중인 아이디입니다")
            }

            await db.collection("member").insertOne(req.body)
            console.log(result)
        } catch(error){
            console.log(error.message)
            res.status(500).json(error.message)
        }
        return res.status(200).json("회원가입완료")
    }
}