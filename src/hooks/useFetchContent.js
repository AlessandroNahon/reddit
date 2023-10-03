import { useEffect, useState } from 'react'
import fetchContent from '../utils/fetchContent'

export default function useFetchContent(subreddit, content, setLoading) {
	const [data, setData] = useState()

	useEffect(() => {
		let ignore = false
		setLoading(true)
		;(async function fetch() {
			if (!ignore) {
				setData(
					await fetchContent({
						subreddit,
						contentId: content.id,
						contentTitle: content.title,
					})
				)
			}
		})()

		return () => {
			ignore = true
			setLoading(false)
		}
	}, [content.id, content.title, setLoading, subreddit])

	return data
}
