import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"


export default async function Home() {
  
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  console.log(result)

  //await fetch('/URL', {cache : 'force-cache'})
  //await fetch('/URL', {cache : 'no-store'}) 캐싱 안쓰겠단느 의미
  //await fetch('/URL', {next : {revalidate : 60}}) 60초마다 캐싱값을 갱신한다는 의미

  return (
    <div>안녕</div> 
  )
}