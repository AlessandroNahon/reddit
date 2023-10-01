import { useState, useEffect } from 'react'
import fetchSubreddit from '../utils/fetchSubreddit'

export default function useFetchSubreddit(subreddit, pagination) {
	const [data, setData] = useState()

	useEffect(() => {
		let ignore = false

		const delayDebounceFn = setTimeout(() => {
			;(async function fetch() {
				if (!ignore) {
					setData(await fetchSubreddit({ subreddit, pagination }))
				}
			})()
		}, 1000)

		return () => {
			ignore = true
			clearTimeout(delayDebounceFn)
		}
	}, [pagination, subreddit])
	return data
}
