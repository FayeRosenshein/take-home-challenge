import { useState } from "react"
import Filter from "../Filter/Filter"
import Card from "../Card/Card"
import './List.css'

export default function List({topStories, setUri, sectionOption, setSectionOption, sectionOptions}) {
	const [searchInput, setSearchInput] = useState('')

	const filteredStories = topStories.filter(story => story.section.toLowerCase().match(searchInput.toLowerCase()))


	const mappedCards = topStories.map(story => {
		return (
				<Card 
					key={story.uri}
					title={story.title} 
					section={story.section} 
					abstract={story.abstract}  />
		)
	})

	const filteredCards = filteredStories.map(story => {
		return (
				<Card 
					key={story.uri}
					title={story.title} 
					section={story.section} 
					abstract={story.abstract}  />
		)
	})

	return (
		<section>
			<Filter setSearchInput={setSearchInput} searchInput={searchInput} />
			{!searchInput && mappedCards}
			{searchInput && filteredCards}
		</section>
	)
}