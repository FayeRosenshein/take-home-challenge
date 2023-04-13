export const getStoryData = () => {
	const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=q2xvMxxZo80H0AJTFuMeV77xhTuk8A3E`
	return fetch (url)
	.then((data) => {
		if (!data.ok) {
			throw new Error('Failed to fetch top stories')
		}
		return data.json()
	})
}
