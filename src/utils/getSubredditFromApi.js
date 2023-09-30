export default async function getAllSubredditFromApi(subreddit, ignore) {
	try {
		let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
		let responseJson = await response.json()
		if (!ignore) {
			return responseJson.data.children.map((o) => o.data)
		}
	} catch (error) {
		console.error(error)
	}
}
