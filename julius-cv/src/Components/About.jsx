import React, { useState } from 'react';
import './about.css';

function About() {

  return (

	<>
	<section className='body-content'>
	<div className='name-text'>
	  <h1 className='julius-name'>&lt;Julius<br></br> Kaljo/&gt;<p className='under-name-text'>Frontend Developer</p></h1>
	  
	  <img src="./public/julius.png" alt="Bild på Julius" className="julius-pic" />
	</div>
	<hr className='hr-first' id='about'/>
	<div  className="about-text">
	  <h1 >Om mig</h1>
	  <p>
		Jag är en frontend-utvecklare som brinner för att skapa användarvänliga och snygga webbplatser. Jag har en kandidatexamen i webbutveckling och har arbetat med webbutveckling i två år. Jag har erfarenhet av att arbeta med HTML, CSS, JavaScript och React. Jag är en kreativ och noggrann person som alltid strävar efter att skapa en bra användarupplevelse.
		Jag är en frontend-utvecklare som brinner för att skapa användarvänliga och snygga webbplatser. Jag har en kandidatexamen i webbutveckling och har arbetat med webbutveckling i två år. Jag har erfarenhet av att arbeta med HTML, CSS, JavaScript och React. Jag är en kreativ och noggrann person som alltid strävar efter att skapa en bra användarupplevelse.Jag är en frontend-utvecklare som brinner för att skapa användarvänliga och snygga webbplatser. Jag har en kandidatexamen i webbutveckling och har arbetat med webbutveckling i två år. Jag har erfarenhet av att arbeta med HTML, CSS, JavaScript och React. Jag är en kreativ och noggrann person som alltid strävar efter att skapa en bra användarupplevelse.
	  </p>
	</div>
	
  </section>
  <hr className='hr-others' id='projects'/>
  </>
);
}

export default About;