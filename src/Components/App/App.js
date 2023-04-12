import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getStoryData } from '../../ApiCalls';
import List from '../List/List'
import DetailView from '../DetailView/DetailView'
import './App.css';

function App() {
	const [topStories, setTopStories] = useState([])
	const [singleStory, setSingleStory] = useState({})

	useEffect(() => {
		getStoryData('home')
			.then((data) => {
				if (!data.ok) {
					throw new Error('Failed to fetch top stories')
				}
				return data.json()
			})
			.then((data) => {
				setTopStories(data.results)
				console.log(topStories)
			})
	}, [])

	
	return (
		<main>
				<h1>Take Home Challenge</h1>
			<Routes>
				<Route path='/' element={<List topStories={topStories} />}></Route>
				<Route path='/:uri' element={<DetailView topStories={topStories}/>} ></Route>
			</Routes>
		</main>
	);
}

export default App;
