import { useEffect } from "react"
import { useRemark } from "react-remark"

type TDynamicPageProps = {
    /** The name of the main content page to import, starting at public/content-md*/
    path: string
}

export default function DynamicPostContentPage({ path }: TDynamicPageProps) {

    const [reactContent, setMarkdownSource] = useRemark()

    useEffect(() => {
        fetch("./post-md/" + path, {

        }).then((r) => {
            return r.text()
        }).then((v) => {
            setMarkdownSource(v)
        }).catch((e) => {
            setMarkdownSource("**ERROR**" + String(e))
        })
    }, [])

    return <div style={{
        border: "2px solid green", padding: "10px"
    }}>
        {reactContent}
    </div>
}