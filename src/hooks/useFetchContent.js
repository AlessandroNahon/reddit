import { useEffect, useState } from 'react'
import fetchContent from '../utils/fetchContent'

export default function useFetchContent(permalink, setContentLoading) {
	const [data, setData] = useState()

	useEffect(() => {
		let ignore = false
		setContentLoading(true)
		;(async function fetch() {
			if (!ignore && permalink) {
				setData(await fetchContent(permalink))
				setContentLoading(false)
			}
		})()

		return () => {
			ignore = true
			setContentLoading(false)
		}
	}, [permalink, setContentLoading])

	return data
}
