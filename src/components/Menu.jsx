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
	const { routeToSub, searchValue } = useContext(AppContext)

	return (
		<nav>
			<ul>
				{menu.map((subreddit) => (
					<li
						key={subreddit}
						onClick={() => routeToSub(subreddit)}
						className={subreddit === searchValue ? 'selected' : ''}
					>
						{subreddit}
					</li>
				))}
			</ul>
		</nav>
	)
}
