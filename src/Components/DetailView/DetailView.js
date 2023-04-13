import './DetailVeiw.css'
import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoryData } from '../../ApiCalls';

export default function DetailView({topStories, setLoading}) {
	const [singleStory, setSingleStory] = useState({})
	// const location = useLocation();
  // const state = location.state;
  // console.log(state);
	let { title } = useParams()

	useEffect(() => {
		setLoading(true)
		setSingleStory(topStories.find(story => story.title === title))
		setLoading(false)
		console.log('title', title)
		console.log('singleStory', singleStory)
	},[])

	// key={story.uri}
	// title={story.title} 
	// section={story.section} 
	// subsection={story.subsection}
	// abstract={story.abstract}
	// uri={story.uri}
	// url={story.url}
	// multimedia={story.multimedia[0].url}
	// published_date={story.published_date}
	// byline={story.byline}

	return (
		<div >
			<Link to={`/`} style={{ textDecoration: 'none' }}><p>List of Articles</p></Link>
			<h1>Detail view</h1>
			<p>{singleStory.section}</p>
			<p>{singleStory.title}</p>
			<p>{singleStory.byline}</p>
			<p>{singleStory.abstract}</p>
			<Link to={`${singleStory.url}`} style={{ textDecoration: 'none' }}><p>{singleStory.url}</p></Link>
			<p>{singleStory.multimedia.url}</p>
		</div>
	)
}