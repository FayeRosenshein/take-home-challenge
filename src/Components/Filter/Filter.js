import './Filter.css'

export default function Filter({ setCategory }) {

  return (
    <select className='drop-down' onChange={(e) => setCategory(e.target.value)}>
      <option value='home'>Top Stories</option>
      <option value='arts'>Arts</option>
      <option value='automobiles'>Automobiles</option>
      <option value='books'>Books</option>
      <option value='business'>Business</option>
      <option value='fashion'>Fashion</option>
      <option value='food'>Food</option>
      <option value='health'>Health</option>
      <option value='insider'>Insider</option>
      <option value='magazine'>Magazine</option>
      <option value='movies'>Movies</option>
      <option value='nyregion'>NY Region</option>
      <option value='obituaries'>Obituaries</option>
      <option value='opinion'>Opinion</option>
      <option value='politics'>Politics</option>
      <option value='realestate'>Real Estate</option>
      <option value='science'>Science</option>
      <option value='sports'>Sports</option>
      <option value='sundayreview'>Sunday Review</option>
      <option value='technology'>Technology</option>
      <option value='theater'>Theater</option>
      <option value='t-magazine'>Time Magazine</option>
      <option value='travel'>Travel</option>
      <option value='upshot'>Up Shot</option>
      <option value='us'>US</option>
      <option value='world'>World</option>
    </select>
  )
}