import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getStoryData } from '../../ApiCalls';
import List from '../List/List'
import DetailView from '../DetailView/DetailView'
import ErrorPage from '../ErrorPage/ErrorPage'
import './App.css';

function App() {
	const [topStories, setTopStories] = useState([])
	const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

	useEffect(() => {
		getStoryData()
			.then((data) => {
				setTopStories(data.results)
				console.log(topStories)
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}, [])

	
	return (
		<main>
				<h1>Take Home Challenge</h1>
			<Routes>
				<Route path='/' element={<><List topStories={topStories} /> {loading && <h1>loading...</h1>}
					{error && <ErrorPage/>} </>}></Route>
				<Route path='/:title' element={<><DetailView topStories={topStories} setLoading={setLoading}/> {loading && <h1>loading...</h1>} </>} ></Route>
			</Routes>
		</main>
	);
}

export default App;
