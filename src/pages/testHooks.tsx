import useFetchIndexJson from "../hooks/useFetchIndex";

/** A simple test of the useJson hook */
export default function TestHooks() {
    const [data] = useFetchIndexJson("posts/index.json")
    if (data === undefined) {
        return <div>Loading...</div>
    }
    if (typeof data == 'string') {
        return <div className='error'>{data}</div>
    }
    return <select>
        {data.map((v) => <option key={v} value={v}>{v}</option>)}
    </select>

}