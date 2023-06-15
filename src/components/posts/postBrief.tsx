import { Link } from "react-router-dom"
import "./postBrief.css"

type TPostBriefProps = {
    at: string
}


const delre = /(\.md$|\.markdown$)/

export default function PostBrief({ at }: TPostBriefProps) {
    const link_addr = at.replace(delre, '')

    return <Link to={'/post/' + link_addr}>
        <div className="postcard">
            I'm a post at {at} !!!
        </div>
    </Link>
}