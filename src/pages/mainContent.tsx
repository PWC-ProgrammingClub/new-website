/**
 * A page that serves main content. Eg, 'home'
 */


import { useEffect } from "react"
import { useRemark } from 'react-remark'

type TDynamicPageProps = {
    /** The name of the main content page to import, starting at public/content-md*/
    path: string
}

export default function DynamicMainContentPage({ path }: TDynamicPageProps) {

    const [reactContent, setMarkdownSource] = useRemark()

    useEffect(() => {
        fetch("./content-md/" + path, {

        }).then((r) => {
            return r.text()
        }).then((v) => {
            setMarkdownSource(v)
        }).catch((e) => {
            setMarkdownSource("**ERROR**" + String(e))
        })
    }, [])

    return <div style={{
        border: "2px solid red", padding: "10px"
    }}>
        {reactContent}
    </div>
}