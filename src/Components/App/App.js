import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getStoryData } from '../../ApiCalls';
import Filter from '../Filter/Filter';
import List from '../List/List'
import DetailView from '../DetailView/DetailView'
import './App.css';

function App() {
	const [topStories, setTopStories] = useState([])
	const [sectionOption, setSectionOption] = useState('')

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

	const sectionOptions = [
    { value: "arts", label: "arts" },
    { value: "automobiles", label: "automobiles" },
    { value: "books", label: "books" },
    { value: "business", label: "business" },
    { value: "climate", label: "climate" },
    { value: "crosswords", label: "crosswords" },
    { value: "fashion", label: "fashion" },
    { value: "food", label: "food" },
    { value: "health", label: "health" },
    { value: "insider", label: "insider" },
    { value: "magazine", label: "magazine" },
    { value: "movies", label: "movies" },
    { value: "nyregion", label: "nyregion" },
    { value: "obituaries", label: "obituaries" },
    { value: "opinion", label: "opinion" },
    { value: "politics", label: "politics" },
    { value: "realestate", label: "realestate" },
    { value: "science", label: "science" },
    { value: "sports", label: "sports" },
    { value: "sundayreview", label: "undayreview" },
    { value: "technology", label: "technology" },
    { value: "t-magazine", label: "t-magazine" },
    { value: "home", label: "top stories" },
    { value: "travel", label: "travel" },
    { value: "theater", label: "theater" },
    { value: "upshot", label: "upshot" },
    { value: "us", label: "us" },
    { value: "world", label: "world" },
  ]

	return (
		<main>
			<h1>Take Home Challenge</h1>
			<Filter setSectionOption={setSectionOption} sectionOption={sectionOption} sectionOptions={sectionOptions}/>
			<Routes>
				<Route path='/'element={<List topStories={topStories} sectionOption={sectionOption}/>}></Route>
				<Route path='/:title' element={<DetailView />} />
			</Routes>
		</main>
	);
}

export default App;
