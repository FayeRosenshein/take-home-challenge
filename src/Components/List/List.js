import { Link } from "react-router-dom"
import Card from "../Card/Card"

export default function List({topStories}) {

	const mappedCards = topStories.map(story => {
		return (
			<Link to={`/${story.title}`} key={story.title} style={{ textDecoration: 'none' }}>
				<Card 
					key={story.title}
					title={story.title} 
					section={story.section} 
					abstract={story.abstract} />
			</Link>
		)
	})
	return (
		<section>
			{mappedCards}
		</section>
	)
}