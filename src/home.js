import { Link } from 'react-router-dom'

function Home() {
  return (
    <h1 className="text-xl py-4 font-[900] text-[rgb(58,48,204)] border-b-2 border-gray-100">
      <Link to="/" >CODE STATES</Link>
    </h1>
  )
}

export default Home