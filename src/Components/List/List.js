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


// import { useState } from "react"
// import Filter from "../Filter/Filter"
// import Card from "../Card/Card"
// import './List.css'

// export default function List({ topStories}) {
// 	const [searchInput, setSearchInput] = useState('')

// 	const filteredStories = topStories.filter(story => story.section.toLowerCase().match(searchInput.toLowerCase()))
	
// 	const mappedCards = topStories.map(story => {
// 		return (
// 			<Card
// 				key={story.uri}
// 				title={story.title}
// 				section={story.section}
// 				subsection={story.subsection}
// 				abstract={story.abstract}
// 				uri={story.uri}
// 				url={story.url}
// 				multimedia={story.multimedia[0].url}
// 				published_date={story.published_date}
// 				byline={story.byline} />
// 		)
// 	})

// 	const filteredCards = filteredStories.map(story => {
// 		return (
// 			<Card
// 				key={story.uri}
// 				title={story.title}
// 				section={story.section}
// 				subsection={story.subsection}
// 				abstract={story.abstract}
// 				uri={story.uri}
// 				url={story.url}
// 				multimedia={story.multimedia[0].url}
// 				published_date={story.published_date}
// 				byline={story.byline} />
// 		)
// 	})

// 	return (
// 		<section>
// 			<Filter setSearchInput={setSearchInput} searchInput={searchInput} />
// 			{!searchInput && mappedCards}
// 			{searchInput && filteredCards}
// 		</section>
// 	)
// }