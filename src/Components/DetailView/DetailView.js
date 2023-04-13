import { Link, useLocation } from 'react-router-dom'
import './DetailVeiw.css'

export default function DetailView() {
	const location = useLocation()
	const id = location.state.id
	const topStories = location.state.topStories

	return (
		<section className='detail-view'>
					<img className='detail-image' src={topStories[id].multimedia[0].url} alt={topStories.title} />
			<div className='detail'>
				<p className='detail-category'>Category: {topStories[id].section}</p>
				<Link to={topStories[id].short_url} >
					<h2 className='detail-title'>{topStories[id].title}</h2>
				</Link>
				<h3 className='detail-abstract'>Abstract: {topStories[id].abstract}</h3>
				<p className='detail-byline'>{topStories[id].byline}</p>
			</div>
		</section>
	)
}