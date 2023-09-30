import { useState, useEffect } from 'react'
import getSubredditFromApi from '../utils/getSubredditFromApi'

export default function useFetchSubreddit(subreddit) {
	const [data, setData] = useState()
	let ignore = false

	useEffect(() => {
		;(async function fetch() {
			const data = await getSubredditFromApi(subreddit)
			if (!ignore) {
				setData(data)
			}
		})()

		return () => (ignore = true)
	}, [])

	return data
}
