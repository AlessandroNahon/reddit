import { useState } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'

import './App.css'

export default function App() {
	const [selectedSubreddit, setSelectedSubreddit] = useState()
	const defaultSubreddit = useFetchSubreddit('all')

	return (
		<div className='App'>
			<Menu setSelectedSubreddit={setSelectedSubreddit} />
			<Main subreddit={selectedSubreddit || defaultSubreddit} />
		</div>
	)
}
