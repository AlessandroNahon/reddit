import { useState } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'

export default function App() {
	const [selectedSubreddit, setSelectedSubreddit] = useState()
	const defaultSubreddit = useFetchSubreddit('all')

	return (
		<>
			<Menu setSelectedSubreddit={setSelectedSubreddit} />
			<Main subreddit={selectedSubreddit || defaultSubreddit} />
		</>
	)
}
