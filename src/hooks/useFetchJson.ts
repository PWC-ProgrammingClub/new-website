import { useEffect, useState } from "react";

/**
 * This hook will fetch JSON data from the website at the given path. It returns a stateful object that will be undefined until the fetch has completed. If the fetch has an error, the object will be a string.
 */
export default function useFetchJson(from: string) {
	const [data, setData] = useState<Object | string>();
	useEffect(() => {
		fetch(from)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			})
			.catch((ex) => {
				setData("Failed to fetch: " + String(ex));
			});
	}, [from]);
	return [data, setData] as [
		Object | string | undefined,
		(val: Object | string | undefined) => void
	];
}
