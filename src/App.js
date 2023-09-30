import { useState } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'

export default function App() {
	const [selectedSubreddit, setSelectedSubreddit] = useState()
	const [searchValue, setSearchValue] = useState('')
	const defaultSubreddit = useFetchSubreddit(searchValue || 'all')

	return (
		<>
			<Menu setSelectedSubreddit={setSelectedSubreddit} />
			<Main
				subreddit={selectedSubreddit || defaultSubreddit}
				search={{ searchValue, setSearchValue }}
			/>
		</>
	)
}
