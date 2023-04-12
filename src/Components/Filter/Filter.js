import './Filter.css'

export default function Filter({setSearchInput, searchInput}) {
	
	const handleChange = (e) => setSearchInput(e.target.value)

	return (
		<div>
			<input
			type='text'
			placeholder='Search by Section'
			onChange={handleChange}
			value={searchInput} />
		</div>
	)
}
