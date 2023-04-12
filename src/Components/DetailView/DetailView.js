import './DetailVeiw.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailView() {
	const [singleStory, setSingleStory] = useState({})
	
	let { uri } = useParams()
	
	useEffect(() => {
		setSingleStory(uri)
		console.log('uri', uri)
		console.log('singleStory', singleStory)
	})

	return (
		<div >
			<Link to={`/`} style={{ textDecoration: 'none' }}><p>List of Articles</p></Link>
			<h1>Detail view</h1>
		</div>
	)
}