import './DetailVeiw.css'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailView({topStories, params}) {
	const [singleStory, setSingleStory] = useState({})
	

	useEffect(() => {
		setSingleStory(params)
		console.log('params', params)
		console.log('singleStory', singleStory)
	})

	return (
		<div >
			<Link to={`/`} style={{ textDecoration: 'none' }}><p>List of Articles</p></Link>
			<h1>Detail view</h1>
		</div>
	)
}