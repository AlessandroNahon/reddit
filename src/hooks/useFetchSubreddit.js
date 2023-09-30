import { useState, useEffect } from 'react'
import fetchSubreddit from '../utils/fetchSubreddit'

export default function useFetchSubreddit(subreddit) {
	const [data, setData] = useState()

	useEffect(() => {
		let ignore = false

		const delayDebounceFn = setTimeout(() => {
			;(async function fetch() {
				if (!ignore) setData(await fetchSubreddit(subreddit))
			})()
		}, 1000)

		return () => {
			ignore = true
			clearTimeout(delayDebounceFn)
		}
	}, [subreddit])

	return data
}
