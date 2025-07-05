import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    let client = await connectDB;
    let db = client.db("forum")
    let find = await db.collection("post").findOne({
            _id : new ObjectId(props.params.id)
        })

    console.log(find)

    return res.status(200).json("수정 완료")
}
    
    // await db.collection("post").updateOne(
    //     {수정할게시물정보}, 
    //     {$set: { title : '바보' }}
    // )