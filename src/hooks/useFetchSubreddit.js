import { useState, useEffect } from 'react'
import fetchSubreddit from '../utils/fetchSubreddit'

export default function useFetchSubreddit(subreddit) {
	const [data, setData] = useState()
	let ignore = false

	useEffect(() => {
		;(async function fetch() {
			const data = await fetchSubreddit(subreddit)
			if (!ignore) {
				setData(data)
			}
		})()

		return () => (ignore = true)
	}, [])

	return data
}
