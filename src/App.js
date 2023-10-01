import { useState } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'
import AppContext from './context/appContext'

export default function App() {
	const [selectedSubreddit, setSelectedSubreddit] = useState()
	const [searchValue, setSearchValue] = useState('')
	const [pagination, setPagination] = useState({
		clicked: '',
		after: '',
		before: '',
		count: 25,
	})

	const fetchedSubreddit = useFetchSubreddit(searchValue || 'all', pagination)

	return (
		<AppContext.Provider
			value={{
				selectedSubreddit,
				searchValue,
				fetchedSubreddit,
				setSelectedSubreddit,
				setSearchValue,
				content: (selectedSubreddit || fetchedSubreddit)?.children?.map(
					(o) => o.data
				),
				search: { searchValue, setSearchValue },
				setPagination,
				pagination,
			}}
		>
			<Menu />
			<Main />
		</AppContext.Provider>
	)
}
