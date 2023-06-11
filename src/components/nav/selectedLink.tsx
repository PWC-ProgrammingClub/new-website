import { Link } from "react-router-dom"
import "./nav.css"
import { PropsWithChildren } from "react"

type TSelectedLinkProps = {
    to: string
    on?: string
} & PropsWithChildren
/** A link that gets the 'selectedNavLink' class if to == on */
export default function SLink({ to, on, children }: TSelectedLinkProps) {
    if (to == on) {
        return <Link className="selectedNavLink" to={to}>{children}</Link>
    } else {
        return <Link to={to}>{children}</Link>
    }
}