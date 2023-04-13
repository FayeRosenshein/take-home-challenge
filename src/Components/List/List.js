import { useEffect, useState } from 'react'
import { getStoryData } from '../../ApiCalls'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import './List.css' 

export default function List() {
  const [topStories, setTopStories] = useState()
  const [category, setCategory] = useState('home')
	const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getStoryData(category)
      .then(data => setTopStories(data.results))
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
  }, [category])

  return (
    <section className='list'>
      <Filter setCategory={setCategory}/>
      <h2 className='list-title'>Top Stories</h2>
			{loading && <h1>loading...</h1>}
			{error && <h1>There was an error loading the Articles</h1>}
      <div className='cards-container'>
        {topStories && topStories.map((story, index) => {
          if (story.multimedia) {
            return (
              <Card 
                key={index}
                id={index}
                section={story.section}
                title={story.title}
                image={story.multimedia[2].url}
                byline={story.byline}
                topStories={topStories}
              />
            )
          }
        })}
      </div>
    </section>
  )
}