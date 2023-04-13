import { Link } from "react-router-dom"

export default function Header() {
	return (
		<header>
			<Link to={`/`} style={{ textDecoration: 'none' }}><h1>The New York Times News Reader</h1></Link>
		</header>
	)
}