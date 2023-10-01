import { useState } from 'react'
import Main from './components/Main'
import Menu from './components/Menu'

import useFetchSubreddit from './hooks/useFetchSubreddit'
import AppContext from './context/appContext'

export default function App() {
	const [searchValue, setSearchValue] = useState('all')
	const [pagination, setPagination] = useState({
		clicked: '',
		after: '',
		before: '',
		count: 25,
	})

	const fetchedSubreddit = useFetchSubreddit(searchValue, pagination)

	return (
		<AppContext.Provider
			value={{
				searchValue,
				fetchedSubreddit,
				setSearchValue,
				content: fetchedSubreddit?.children?.map((o) => o.data),
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
