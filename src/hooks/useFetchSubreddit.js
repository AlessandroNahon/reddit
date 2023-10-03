import { useState, useEffect } from 'react'
import fetchSubreddit from '../utils/fetchSubreddit'

export default function useFetchSubreddit(
	subreddit,
	pagination,
	setSubredditLoading
) {
	const [data, setData] = useState()

	useEffect(() => {
		let ignore = false
		setSubredditLoading(true)
		const delayDebounceFn = setTimeout(() => {
			;(async function fetch() {
				if (!ignore) {
					setData(await fetchSubreddit({ subreddit, pagination }))
					setSubredditLoading(false)
				}
			})()
		}, 300)

		return () => {
			ignore = true
			clearTimeout(delayDebounceFn)
			setSubredditLoading(false)
		}
	}, [pagination, setSubredditLoading, subreddit])
	return data
}
