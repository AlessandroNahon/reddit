import fetchSubreddit from '../utils/fetchSubreddit'

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

export default function Menu({ setSelectedSubreddit }) {
	return (
		<ul id='menu'>
			{menu.map((subreddit) => (
				<li
					key={subreddit}
					onClick={async () =>
						setSelectedSubreddit(await fetchSubreddit(subreddit))
					}
				>
					{subreddit}
				</li>
			))}
		</ul>
	)
}
