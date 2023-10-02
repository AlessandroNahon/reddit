import { useState } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'
import AppContext from './context/appContext'

export default function App() {
	const [pageNumber, setPageNumber] = useState(1)
	const [loading, setLoading] = useState(false)
	const [searchValue, setSearchValue] = useState('all')
	const [pagination, setPagination] = useState({
		clicked: '',
		after: '',
		before: '',
		count: 25,
	})

	const fetchedSubreddit = useFetchSubreddit(
		searchValue,
		pagination,
		setLoading
	)

	function routeToSub(subreddit) {
		setSearchValue(subreddit)
		setPagination({ clicked: '', after: '', before: '', count: 25 })
		setPageNumber(1)
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
				setLoading,
				loading,
				setPageNumber,
				pageNumber,
				routeToSub,
			}}
		>
			<Menu />
			<Main />
		</AppContext.Provider>
	)
}
