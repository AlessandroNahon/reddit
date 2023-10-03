export default async function fetchContent({
	subreddit,
	contentId,
	contentTitle,
}) {
	try {
		let response = await fetch(
			`https://www.reddit.com/r/${subreddit}/comments/${contentId}/${contentTitle}.json`
		)
		let responseJson = await response.json()

		return responseJson[1].data
	} catch (error) {
		console.error(error)
	}
}
