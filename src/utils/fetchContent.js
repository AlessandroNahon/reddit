export default async function fetchContent(permalink) {
	try {
		let response = await fetch(`https://www.reddit.com${permalink}.json`)
		let responseJson = await response.json()

		return responseJson
	} catch (error) {
		console.error(error)
	}
}
