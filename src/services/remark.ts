import fm from "front-matter";

/** Gets markdown content, excluding front matter */
export function getContent(rawdata: string) {
	const r = fm(rawdata);
	return r.body;
}

/** Gets the yaml front matter as a JS object */
export function getFrontMatter(rawdata: string) {
	const r = fm(rawdata);
	console.log("got frontmatter", r);
	return r.attributes as { [key: string]: string };
}
