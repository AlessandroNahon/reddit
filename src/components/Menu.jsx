import { useContext } from 'react'

import AppContext from '../context/appContext'

const menu = [
	'popular',
	'all',
	'random',
	'users',
	'askreddit',
	'gaming',
	'pics',
	'funny',
	'worldnews',
	'movies',
	'explainlikeimfive',
	'mildlyinteresting',
	'todayilearned',
	'news',
	'tifu',
	'aww',
	'videos',
	'twoxchromosomes',
	'oldschoolcool',
	'lifeprotips',
	'jokes',
	'dataisbeautiful',
]

export default function Menu() {
	const { setSearchValue, setPagination, setPageNumber } = useContext(AppContext)

	return (
		<nav>
			<ul>
				{menu.map((subreddit) => (
					<li
						key={subreddit}
						onClick={() => {
								setSearchValue(subreddit)
								setPagination({ clicked: '',
									after: '',
									before: '',
									count: 25, })
								setPageNumber(1)
							}	
						}
					>
						{subreddit}
					</li>
				))}
			</ul>
		</nav>
	)
}
