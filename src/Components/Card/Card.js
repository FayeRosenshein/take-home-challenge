export default function Card({title, section, abstract}) {
	return (
		<div className="article-card">
			<p>{section}</p>
			<h2>{title}</h2>
			<p>{abstract}</p>
		</div>
	)
}