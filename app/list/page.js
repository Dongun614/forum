import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key = { i }>
                            <Link href={`detail/${result[i]._id}`}>{result[i].title}</Link>
                            <Link href={`/edit/${result[i]._id}`}>✏️</Link>
                            <p>{result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}