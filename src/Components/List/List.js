import { useEffect, useState } from "react"
import { getStoryData } from "../../ApiCalls"
import Card from "../Card/Card"
import './List.css'

export default function List({topStories, sectionOption}) {
	const [selectedStories, setSelectedStories] = useState([])

	useEffect((sectionOption) => {
		getStoryData(sectionOption)
		.then((data) => {
			if (!data.ok) {
				throw new Error(`Failed to fetch ${sectionOption} stories`)
			}
			return data.json()
		})
		.then((data) => {
			setSelectedStories(data.results)
			console.log(selectedStories)
		})
	}, [])


	const mappedCards = topStories.map(story => {
		return (
				<Card 
					key={story.title}
					title={story.title} 
					section={story.section} 
					abstract={story.abstract} />
		)
	})
	return (
		<section>
			{mappedCards}
		</section>
	)
}