export default async function fetchSubreddit(subreddit) {
	try {
		let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
		let responseJson = await response.json()

		return responseJson.data.children.map((o) => o.data)
	} catch (error) {
		console.error(error)
	}
}
