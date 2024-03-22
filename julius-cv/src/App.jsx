import './App.css'
import Header from './Component/Header'
import About from './Component/About'
import { ProjectAccordion } from './Component/Projects.jsx'
import NameHeader from './Component/Name.jsx'

function App() {

  return (
	<>
	<Header/>
	<NameHeader/>
	<About/>
	<ProjectAccordion/>
	</>
  )
}

export default App
