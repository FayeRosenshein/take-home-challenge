import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
	return (
		<div>
			<Link to={`/list`} style={{ textDecoration: 'none' }}><p>List of Articles</p></Link>
			<Link to={`/`} style={{ textDecoration: 'none' }}><p>Home</p></Link>
		</div>
	)
}