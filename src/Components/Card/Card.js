import { Link } from "react-router-dom"
import './Card.css'

export default function Card({ title, section, abstract,uri }) {
	return (
		<div className="article-card">
				<p>Section: {section}</p>
			<Link to={`/${uri}`} style={{ textDecoration: 'none' }}>
				<h2>Title: {title}</h2>
			</Link>
				<p>Abstract: {abstract}</p>
		</div>
	)
}