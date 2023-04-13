import { Routes, Route } from 'react-router'
import List from '../List/List'
import DetailView from '../DetailView/DetailView'
import './App.css'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/story-details/:id' element={<DetailView />}></Route>
      </Routes>
    </main>
  )
}
export default App





// import { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { getStoryData } from '../../ApiCalls';
// import List from '../List/List'
// import DetailView from '../DetailView/DetailView'
// import './App.css';

// function App() {
// 	const [topStories, setTopStories] = useState([])
// 	const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

// 	useEffect(() => {
// 		getStoryData()
// 			.then((data) => {
// 				setTopStories(data.results)
// 				console.log(topStories)
// 			})
// 			.catch((error) => setError(error))
// 			.finally(() => setLoading(false))
// 	}, [])

	
// 	return (
// 		<main>
// 				<h1>Take Home Challenge</h1>
// 			<Routes>
// 				<Route path='/' element={<><List topStories={topStories} /> {loading && <h1>loading...</h1>}
// 					{error && <h1>There was an error loading the Articles</h1>} </>}></Route>
// 				<Route path='/:title' element={<><DetailView topStories={topStories} setLoading={setLoading} loading={loading}/> </>} ></Route>
// 			</Routes>
// 		</main>
// 	);
// }

// export default App;
