import Select from 'react-select'

export default function Filter({setSearchInput, searchInput, sectionOption, setSectionOption, sectionOptions }) {
	
	const handleChange = (e) => setSearchInput(e.target.value)

	return (
		<div>
			<input
			type='text'
			placeholder='Search by Section'
			onChange={handleChange}
			value={searchInput} />
			{/* <Select
				closeMenuOnSelect={true}
				options={sectionOptions}
				onChange={(e) => setSectionOption(e)}
			/>
			{console.log(sectionOption.value)} */}
		</div>
	)
}
