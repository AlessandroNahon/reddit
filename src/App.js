import { useState } from 'react'
import Main from './views/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'
import useFetchContent from './hooks/useFetchContent'
import AppContext from './context/appContext'
import Content from './views/Content'

export default function App() {
	const [pageNumber, setPageNumber] = useState(1)
	const [subredditLoading, setSubredditLoading] = useState(false)
	const [contentLoading, setContentLoading] = useState(false)
	const [searchValue, setSearchValue] = useState('all')
	const [selectedContent, setSelectedContent] = useState()
	const [pagination, setPagination] = useState({
		clicked: '',
		after: '',
		before: '',
		count: 25,
	})

	const fetchedSubreddit = useFetchSubreddit(
		searchValue,
		pagination,
		setSubredditLoading
	)

	const fetchedContent = useFetchContent(selectedContent, setContentLoading)

	function routeToSub(subreddit) {
		setSearchValue(subreddit)
		setPagination({ clicked: '', after: '', before: '', count: 25 })
		setPageNumber(1)
		setSelectedContent()
	}

	return (
		<AppContext.Provider
			value={{
				fetchedSubreddit,
				searchValue,
				setSearchValue,
				content: fetchedSubreddit?.children?.map((o) => o.data),
				search: { searchValue, setSearchValue },
				setPagination,
				pagination,
				setSubredditLoading,
				subredditLoading,
				setPageNumber,
				pageNumber,
				routeToSub,
				selectedContent,
				setSelectedContent,
				fetchedContent,
				setContentLoading,
				contentLoading,
			}}
		>
			<Menu />
			<div id='browser'>
				<Main />
				<Content />
			</div>
		</AppContext.Provider>
	)
}
