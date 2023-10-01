import { useState, useEffect } from 'react'
import fetchSubreddit from '../utils/fetchSubreddit'

export default function useFetchSubreddit(subreddit, pagination, setLoading) {
	const [data, setData] = useState()

	useEffect(() => {
		let ignore = false
		setLoading(true)
		const delayDebounceFn = setTimeout(() => {
			;(async function fetch() {
				if (!ignore) {
					setData(await fetchSubreddit({ subreddit, pagination }))
					setLoading(false)
				}
			})()
		}, 1000)

		return () => {
			ignore = true
			clearTimeout(delayDebounceFn)
			setLoading(false)
		}
	}, [pagination, setLoading, subreddit])
	return data
}
