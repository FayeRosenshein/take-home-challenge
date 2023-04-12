import './DetailVeiw.css'
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function DetailView({ topStories }) {
	const navigate = useNavigate()
	let { uri } = useParams()

	return (
		<div >
			<Link to={`/`} style={{ textDecoration: 'none' }}><p>List of Articles</p></Link>
			<h1>Detail view</h1>
		</div>
	)
}