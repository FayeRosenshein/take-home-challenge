import Select from 'react-select'

export default function Filter({sectionOption, setSectionOption, sectionOptions }) {

	return (
		<div>
			<Select
				closeMenuOnSelect={true}
				options={sectionOptions}
				onChange={(e) => setSectionOption(e)}
			/>
			{console.log(sectionOption.value)}
		</div>
	)
}