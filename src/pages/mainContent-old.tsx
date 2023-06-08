/**
 * A page that serves main content. Eg, 'home'
 */


import { useEffect, useRef } from "react"
import html from "../../content/test.md"

export default function MainContentPage() {

    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        ref.current.innerHTML = html
    }, [])

    return <div ref={ref}>
    </div>
}