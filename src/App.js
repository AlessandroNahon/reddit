import { useState } from 'react'
import MainView from './components/MainView'
import getSubredditFromApi from './utils/getSubredditFromApi'
import useFetchSubreddit from './hooks/useFetchSubreddit'

import './App.css'

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

export default function App() {
	const [selectedSubreddit, setSelectedSubreddit] = useState()
	const defaultSubreddit = useFetchSubreddit('all')

	return (
		<div className='App'>
			<ul id='menu'>
				{menu.map((item) => (
					<li
						key={item}
						onClick={async () =>
							setSelectedSubreddit(await getSubredditFromApi(item))
						}
					>
						{item}
					</li>
				))}
			</ul>
			<MainView subreddit={selectedSubreddit || defaultSubreddit} />
		</div>
	)
}
