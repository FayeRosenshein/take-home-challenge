import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getStoryData } from '../../ApiCalls';
import Filter from "../Filter/Filter"
import Card from "../Card/Card"
import './List.css'

export default function List({ topStories}) {
	const [searchInput, setSearchInput] = useState('')

	const navigate = useNavigate()

	const filteredStories = topStories.filter(story => story.section.toLowerCase().match(searchInput.toLowerCase()))

	const mappedCards = topStories.map(story => {
		return (
			<Card
				key={story.uri}
				title={story.title}
				section={story.section}
				subsection={story.subsection}
				abstract={story.abstract}
				uri={story.uri}
				url={story.url}
				multimedia={story.multimedia[0].url}
				published_date={story.published_date}
				byline={story.byline} />
		)
	})

	const filteredCards = filteredStories.map(story => {
		return (
			<Card
				key={story.uri}
				title={story.title}
				section={story.section}
				subsection={story.subsection}
				abstract={story.abstract}
				uri={story.uri}
				url={story.url}
				multimedia={story.multimedia[0].url}
				published_date={story.published_date}
				byline={story.byline} />
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