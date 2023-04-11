import Select from 'react-select'

export default function Filter({sectionOption ,setSectionOption, sectionOptions}) {
	
	// const sectionOptions = [
	// 	arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world
	// 	{ value: "arts", label: "arts" },
	// 	{ value: "automobiles", label: "automobiles" },
	// 	{ value: "books", label: "books" },
	// 	{ value: "business", label: "business" },
	// 	{ value: "climate", label: "climate" },
	// 	{ value: "crosswords", label: "crosswords" },
	// 	{ value: "fashion", label: "fashion" },
	// 	{ value: "food", label: "food" },
	// 	{ value: "health", label: "health" },
	// 	{ value: "insider", label: "insider" },
	// 	{ value: "magazine", label: "magazine" },
	// 	{ value: "movies", label: "movies" },
	// 	{ value: "nyregion", label: "nyregion" },
	// 	{ value: "obituaries", label: "obituaries" },
	// 	{ value: "opinion", label: "opinion" },
	// 	{ value: "politics", label: "politics" },
	// 	{ value: "realestate", label: "realestate" },
	// 	{ value: "science", label: "science" },
	// 	{ value: "sports", label: "sports" },
	// 	{ value: "sundayreview", label: "undayreview" },
	// 	{ value: "technology", label: "technology" },
	// 	{ value: "t-magazine", label: "t-magazine" },
	// 	{ value: "home", label: "top stories" },
	// 	{ value: "travel", label: "travel" },
	// 	{ value: "theater", label: "theater" },
	// 	{ value: "upshot", label: "upshot" },
	// 	{ value: "us", label: "us" },
	// 	{ value: "world", label: "world" },
	// ]
	
	
	// const findFilteredstories = (arrayOfInput) => {
	// 	if (arrayOfInput.length === 0) {
	// 		setSelectedStories(topStories)
	// 		return
	// 	}
	// 	const findStories = sectionOptions.filter((story) => {
	// 		return arrayOfInput.every((input) => story[input.value] === true);
	// 	})
	// 	setSelectedStories(findStories)
	// }
	return (
		<Select
						closeMenuOnSelect={true}
						options={sectionOptions}
						onChange={(e) => setSectionOption(e.target.value)}
					/>
	)
}