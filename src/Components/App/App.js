import { Routes, Route } from 'react-router'
import Header from '../Header/Header'
import List from '../List/List'
import DetailView from '../DetailView/DetailView'
import './App.css'

function App() {
  return (
    <main>
			<Header />
      <Routes>
        <Route path='/' element={<List />}></Route>
        <Route path='/story-details/:id' element={<DetailView />}></Route>
      </Routes>
    </main>
  )
}
export default App