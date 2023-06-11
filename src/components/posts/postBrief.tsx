import "./postBrief.css"

type TPostBriefProps = {
    at: string
}


export default function PostBrief({ at }: TPostBriefProps) {

    return <div className="postcard">
        I'm a post at {at}
    </div>
}