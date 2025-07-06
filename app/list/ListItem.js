'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem(props){
    
    return (
        <div>
            {
                props.result.map((a, i) => {
                    return (
                        <div className="list-item" key = { i }>
                            <Link href={`detail/${props.result[i]._id}`}>{props.result[i].title}</Link>
                            <Link href={`/edit/${props.result[i]._id}`}>✏️</Link>
                            <p>{props.result[i].content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}