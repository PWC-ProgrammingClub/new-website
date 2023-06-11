import { useParams } from "react-router-dom"
import { PageNav } from "../components/nav"

/** A component for testing react router dynamic routes */
export default function Test() {
    // how to get route variables
    const { name } = useParams()

    if (name === undefined) {
        return <>
            <PageNav on="/test" />
            <div className="error">
                Name not set
            </div>
        </>
    } else {
        return <>
            <PageNav on="/test" />

            <h3>{name}</h3>
        </>
    }

}