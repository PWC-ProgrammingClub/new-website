type TIndexRecord = {
    name: string
    isDirectory: boolean
}

const re_leading_date = /\d\d\d\d-\d\d-\d\d-.*/

export default function getSortedPostsGroup(recs: TIndexRecord[], start: number, end: number) {

    if (end < start) return []

    const filtered = recs.filter((v) => re_leading_date.test(v.name) && v.isDirectory == false)
    if (start > filtered.length) {
        return []
    }

    const sorted = filtered.sort((a, b) => {
        if (a.name < b.name) {
            return -1
        } else if (b.name < a.name) {
            return 1
        } else {
            return 0
        }
    })


    const found: string[] = []
    for (let i = start; i < end; i++) {
        console.log('iterating at', i)
        if (i >= sorted.length) {
            break
        }
        found.push(sorted[i].name)
    }

    return found
}