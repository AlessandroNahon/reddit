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
	const { routeToSub } = useContext(AppContext)

	return (
		<nav>
			<ul>
				{menu.map((subreddit) => (
					<li
						key={subreddit}
						onClick={() => routeToSub(subreddit)}
					>
						{subreddit}
					</li>
				))}
			</ul>
		</nav>
	)
}
