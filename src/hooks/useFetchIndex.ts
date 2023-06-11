import useFetchJson from "./useFetchJson";

/**
 * This hook will fetch Index json data from the website at the given path. It returns an array of strings representing indexed files available. It will be undefined until the fetch has completed. If the fetch has an error, the object will be a string.
 */
export default function useFetchIndexJson(from: string) {
	const [data, setData] = useFetchJson(from);
	if (data !== undefined && typeof data !== "string") {
		if (!Array.isArray(data)) {
			setData("Can't read index, it's not an array!");
			console.error("Failed to read", from, " not an array:", data);
		} else {
			const strings = data.map((v) => v.name) as string[];
			setData(strings);
		}
	}
	return [data, setData] as [
		string[] | string | undefined,
		(data: string[] | string | undefined) => void
	];
}
