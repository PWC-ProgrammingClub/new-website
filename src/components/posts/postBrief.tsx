import { Link } from "react-router-dom"
import "./postBrief.css"
import { useEffect, useState } from "react"
import { getFrontMatter } from "../../services/remark"

type TPostBriefProps = {
    at: string
}


const delre = /(\.md$|\.markdown$)/

export default function PostBrief({ at }: TPostBriefProps) {

    const [result, setResult] = useState({ error: 'loading', data: '' })

    useEffect(() => {
        fetch("/posts/" + at).then((res) => {
            return res.text()
        }).then((text) => {
            setResult({ error: '', data: text })
        }).catch((e) => {
            setResult({ error: String(e), data: '' })
        })
    }, [at])

    const link_addr = at.replace(delre, '')

    if (result.error == 'loading') {
        return <Link to={'/post/' + link_addr}>
            Loading post data {at}...
        </Link>
    }

    if (result.error != '') {
        return <div>Failed to fetch {at}</div>
    }

    const fm = getFrontMatter(result.data)
    if (fm.title !== undefined) {
        return <Link to={'/post/' + link_addr}>
            <div className="postcard">
                {fm.title}
            </div>
        </Link>
    }


    return <Link to={'/post/' + link_addr}>
        <div className="postcard">
            I'm a post at {at} !!!
        </div>
    </Link>
}