import "./nav.css"
import SLink from "./selectedLink"


type TPageNavProps = {
    on?: string
}
export default function PageNav({ on }: TPageNavProps) {
    return <nav className='topNav'>
        <SLink to="/" on={on}>Home</SLink>
        <SLink to="/about" on={on}>About</SLink>
    </nav>
}