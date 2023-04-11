import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getStoryData } from "../../ApiCalls"
import Select from 'react-select'
import Card from "../Card/Card"

export default function List({topStories}) {
	const [selectedStories, setSelectedStories] = useState([])

	// useEffect((value) => {
	// 	getStoryData(value)
	// 	.then((data) => {
	// 		if (!data.ok) {
	// 			throw new Error(`Failed to fetch ${value} stories`)
	// 		}
	// 		return data.json()
	// 	})
	// 	.then((data) => {
	// 		setSelectedStories(data.results)
	// 		console.log(selectedStories)
	// 	})
	// }, [])

	const sectionOptions = [
    { value: "arts", label: "arts" },
    { value: "business", label: "business" },
    { value: "climate", label: "climate" },
    { value: "crosswords", label: "crosswords" },
    { value: "health", label: "health" },
    { value: "magazine", label: "magazine" },
    { value: "opinion", label: "opinion" },
    { value: "science", label: "science" },
    { value: "theater", label: "theater" },
    { value: "us", label: "us" },
    { value: "world", label: "world" },
  ]

	
  const findFilteredstories = (arrayOfInput) => {
    if (arrayOfInput.length === 0) {
      setSelectedStories(topStories)
      return
    }
    const findStories = sectionOptions.filter((story) => {
      return arrayOfInput.every((input) => story[input.value] === true);
    })
    setSelectedStories(findStories)
  }

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
			<Select
        closeMenuOnSelect={true}
        options={sectionOptions}
        onChange={(e) => getStoryData(e)}
      />
			{mappedCards}
		</section>
	)
}