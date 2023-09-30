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
	const [data, setData] = useState()
	const home = useFetchSubreddit('all')

	return (
		<div className='App'>
			<ul id='menu'>
				{menu.map((item) => (
					<li
						key={item}
						onClick={async () =>
							setData(await getSubredditFromApi(item, false))
						}
					>
						{item}
					</li>
				))}
			</ul>
			<MainView subreddit={data || home} />
		</div>
	)
}
