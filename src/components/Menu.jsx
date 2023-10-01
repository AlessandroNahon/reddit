import {useContext} from 'react'

import fetchSubreddit from '../utils/fetchSubreddit'
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
	const { setSelectedSubreddit } = useContext(AppContext)

	return (
		<ul id='menu'>
			{menu.map((subreddit) => (
				<li
					key={subreddit}
					onClick={async () =>
						setSelectedSubreddit(await fetchSubreddit({ subreddit, pagination: {clicked: '', after: '', before: '', count: 25} }))
					}
				>
					{subreddit}
				</li>
			))}
		</ul>
	)
}
