import React, { useState } from "react"
import Header from "./Components/Header"
import { ProjectAccordion } from "./Components/Projects"
import Footer from "./Components/Footer"
import './App.css'
import About from "./Components/About"
import Skills from "./Components/Skills"
import DarkmodeSwitch from "./Components/Darkmode-switch"
import "./index.css"
import useLocalStorage from "use-local-storage"

function App() {

	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <>
	<div id="top" className="switchbtn" data-theme={darkMode ? "light" : "dark"}>
	<DarkmodeSwitch isChecked={darkMode} handleChange={() => setDarkMode(!darkMode)}/>	
	
	<Header/>
	<About/>
	<ProjectAccordion/>
	<Skills/>
	<Footer/>
	</div>
    </>
  )
}

export default App
