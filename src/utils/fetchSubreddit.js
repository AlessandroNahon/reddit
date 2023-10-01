import getNavigationDirection from './getNavigationDirection'

export default async function fetchSubreddit({ subreddit, pagination }) {
	try {
		let response = await fetch(
			pagination.clicked !== ''
				? `https://www.reddit.com/r/${subreddit}/.json?count=${
						pagination?.count
				  }&${getNavigationDirection()}`
				: `https://www.reddit.com/r/${subreddit}/.json`
		)
		let responseJson = await response.json()

		return responseJson.data
	} catch (error) {
		console.error(error)
	}
}
