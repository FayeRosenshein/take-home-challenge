import { useEffect, useState } from 'react';
import { getTopStoryData } from '../../ApiCalls';
import './App.css';

function App() {
	const [topStories, setTopStories] = useState([])

	useEffect(() => {
		getTopStoryData('home')
		.then((data) => {
			if(!data.ok) {
				throw new Error('Failed to fetch top stories')
			}
			return data.json()
		})
		.then((data) => {
			setTopStories(data.results)
			console.log(topStories)
		})
	},[])

  return (
    <main>
			<h1>Take Home Challenge</h1>
			<link></link>
		</main>
  );
}

export default App;
