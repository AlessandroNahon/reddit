export default async function fetchSubreddit({ subreddit, pagination }) {
	try {
		const getDirection = () => {
			if (pagination.clicked === 'next') return `after=${pagination?.after}`
			if (pagination.clicked === 'prev') return `before=${pagination?.before}`

			return ''
		}

		let response = await fetch(
			pagination.clicked !== ''
				? `https://www.reddit.com/r/${subreddit}/.json?count=${
						pagination?.count
				  }&${getDirection()}`
				: `https://www.reddit.com/r/${subreddit}/.json`
		)
		let responseJson = await response.json()

		return responseJson.data
	} catch (error) {
		console.error(error)
	}
}
