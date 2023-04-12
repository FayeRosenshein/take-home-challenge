import { useEffect, useState } from "react"
import { getStoryData } from "../../ApiCalls"
import Filter from "../Filter/Filter"
import Card from "../Card/Card"
import './List.css'

export default function List({topStories, setUri, sectionOption, setSectionOption, sectionOptions}) {
	const [searchInput, setSearchInput] = useState('')
	// const [selectedStories, setSelectedStories] = useState([])

	const filteredStories = topStories.filter(story => story.section.toLowerCase().match(searchInput.toLowerCase()))

	// useEffect((sectionOption) => {
	// 	getStoryData(sectionOption)
	// 	.then((data) => {
	// 		if (!data.ok) {
	// 			throw new Error(`Failed to fetch ${sectionOption} stories`)
	// 		}
	// 		return data.json()
	// 	})
	// 	.then((data) => {
	// 		setSelectedStories(data.results)
	// 		console.log(selectedStories)
	// 	})
	// }, [])


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
			{/* <Filter setSectionOption={setSectionOption} sectionOptions={sectionOptions} sectionOption={sectionOption} /> */}
			{!searchInput && mappedCards}
			{searchInput && filteredCards}
		</section>
	)
}