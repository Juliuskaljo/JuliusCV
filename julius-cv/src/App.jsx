import React, { useState } from "react"
import Header from "./Components/Header"
import { ProjectAccordion } from "./Components/Projects"
import Footer from "./Components/Footer"
import './App.css'
import About from "./Components/About"
import Skills from "./Components/Skills"
import DarkmodeSwitch from "./Components/Darkmode-switch"
import "./index.css"

function App() {

	const [darkMode, setDarkMode] = useState(true)

  return (
    <>
	<div id="top" className="switchbtn" data-theme={darkMode ? "dark" : "light"}>
	<DarkmodeSwitch isChecked={darkMode} handleChange={() => setDarkMode(!darkMode)}/>	
	</div>
	<Header/>
	<About/>
	<ProjectAccordion/>
	<Skills/>
	<Footer/>
    </>
  )
}

export default App
