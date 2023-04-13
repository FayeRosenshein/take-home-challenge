import { Link, useLocation } from 'react-router-dom'
import './DetailVeiw.css'

export default function DetailView() {
  const location = useLocation()
  const id = location.state.id
  const topStories = location.state.topStories

  return (
    <section className='detail-view'>
      <div className='detail'>
        <p className='detail-category'>{topStories[id].section}</p>
        <Link to={topStories[id].short_url} >
          <h2 className='detail-title'>{topStories[id].title}</h2>
        </Link>
        <p className='detail-abstract'>{topStories[id].abstract}</p>
        <p className='detail-byline'>{topStories[id].byline}</p>
        <div className='detail-dates-container'>
          <p className='detail-date-published'>{new Date(topStories[id].published_date).toDateString()}</p>
          <p className='detail-date-updated'>Updated {new Date(topStories[id].updated_date).toLocaleTimeString()}</p>
        </div>
        <div className='detail-image-container'>
          <p className='detail-image-copyright'>{topStories[id].multimedia[0].copyright}</p>
          <img className='details-image'src={topStories[id].multimedia[0].url} alt={topStories.title}/>
        </div>
      </div>
    </section>
  )
}