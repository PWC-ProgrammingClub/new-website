import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layout";
import { useEffect, useState } from "react";
import { Remark } from "react-remark";

/**
 * Post uses the dynamic routing provided by react-router-dom to fetch from the server the raw markdown data.
 * It then uses Remark to convert it to react and render it.
 * 
 * The route does not include the '.md' or '.markdown'
 */
export default function Post() {
    const { post } = useParams()
    if (post == undefined) {
        return <PageLayout><div className='error'>Unable to find postName. {String(post)} </div></PageLayout>
    }
    const [result, setResult] = useState<{ error: string, data: string }>()
    useEffect(() => {
        fetch("/posts/" + post + ".md").then((res) => {
            return res.text()
        }).then((text) => {
            setResult({ error: '', data: text })
        }).catch((e) => {
            setResult({ error: String(e), data: '' })
        })
    }, [post])
    if (result === undefined) {
        return <PageLayout><div>Loading {post}.md...</div></PageLayout>
    }
    if (result.error) {
        return <PageLayout><div className="error">Problem loading post! {result.error}</div></PageLayout>
    }
    return <PageLayout>
        <Remark>{result.data}</Remark></PageLayout>


}