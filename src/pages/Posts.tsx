import { Link, useParams } from "react-router-dom"
import { PageLayout } from "../components/layout"
import { useEffect, useState } from "react"
import getSortedPostsGroup from "../services/posts"
import PostBrief from "../components/posts/postBrief"

/** Posts uses the index.json in /posts/ to determine what posts are available. It then renders some cards for them. */
export default function Posts() {
    const { start } = useParams()
    const { end } = useParams()
    let actual_start = start === undefined ? 0 : parseInt(start)
    let actual_end = end === undefined ? 10 : parseInt(end)
    if (isNaN(actual_start) || isNaN(actual_end) || actual_start < 0 || actual_end < 0) {
        actual_start = 0
        actual_end = 10
    }

    const [data, setData] = useState<string[]>()
    const [error, setError] = useState<string>()

    useEffect(() => {
        fetch("/posts/index.json").then((response) => {
            return response.json()
        }).then((json) => {
            setData(getSortedPostsGroup(json, actual_start, actual_end))
        }).catch((err) => {
            setError(String(err))
        })
    }, [actual_start, actual_end])

    const ShowData = data === undefined ? <div>Loading</div> : data.length == 0 ? <div>No posts to show.</div> : data.map((v) => <PostBrief at={v} key={v} />)

    const showPrevious = actual_start > 0
    const showMore = data !== undefined && (data.length == (actual_end - actual_start))

    return <PageLayout on="/posts/0/10">
        {showPrevious ? <Link to={`/posts/${actual_start - 10}/${actual_end - 10}`}>Previous</Link> : null}
        <div>Start at {actual_start}</div>
        <div>End at {actual_end}</div>
        {error ? <div className="error">{error}</div> : null}
        <div>{String(showMore)}</div>
        {ShowData}
        {showMore ? <Link to={`/posts/${actual_start + 10}/${actual_end + 10}`}>Next</Link> : null}
    </PageLayout>
}