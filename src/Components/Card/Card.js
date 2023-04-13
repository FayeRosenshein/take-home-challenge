import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({ id, section, title, image, byline, topStories }) {

  return (
    <Link to={`/story-details/${id}`} state={{id: id, topStories: topStories}} style={{ textDecoration: 'none' }}>
      <div className='card' key={id}>
        <div className='card-text'>
          <p className='card-category'>CATEGORY: {section}</p>
          <p className='card-title'>TITLE: {title}</p>
          <p className='card-byline'>AUTHOR: {byline}</p>
        </div>
        <img className='card-image' src={image} alt={title}/>
      </div>
    </Link>
  )
}