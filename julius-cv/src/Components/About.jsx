import React, { useState } from 'react';
import './about.css';

function About() {

  return (

	<>
	<section className='body-content'>
	<div className='name-text'>
	  <h1 className='julius-name'>&lt;Julius<br></br> Kaljo/&gt;<p className='under-name-text'>Frontend Developer</p></h1>
	  
	  <img src="../src/assets/julius.png" alt="Bild på Julius" className="julius-pic" />
	</div>
	<hr className='hr-first' id='about'/>
	<div  className="about-text">
	  <h1 >Om mig</h1>
	  <p>
	  	Hej,
      	Mitt namn är Julius Kaljo. Jag är 24 år och bor i centrala Göteborg
		tillsammans med min flickvän.</p><p> 
		Jag är en glad prick som tycker om att samarbeta med människor. Jag
 		skulle (ödmjukt) beskriva mig själv som social, lyhörd och har väldigt
		lätt till skratt.</p> <p> Fritiden spenderar jag helst med vänner och familj. Några
		favoritintressen är dataspel, golf och fotboll. </p><p>
		Just nu läser jag Front-End Developer på NBI Handelsakademin. Det
 		som tilltalar mig med kodning och UX-design är de olika stegen i
 		skapandet. Planeringen, utförandet och resultatet. Att utifrån en
 		beställning se produkten sakta men säkert växa fram i realtid. Jag har
 		under det här året utvecklats enormt och märker redan nu att det här
 		är något man aldrig kommer sluta utvecklas inom. </p>
		<p>
		Under perioden 11 november 2024 till 31 januari 2025 och 17 mars 2025 till 6 juni 2025, söker jag praktik inom Front-End-utveckling. Jag är mycket intresserad av att få möjligheten att arbeta inom området och ser fram emot att bidra med mina kunskaper och lära mig under praktikperioden. </p>
		<p>
		Ser fram emot att höra från potentiella arbetsgivare och hoppas på att få möjlighet att göra praktik hos er!</p>
		<p>
		Allt gott så länge,
		Julius Kaljo
		</p>
	</div>
	
  </section>
  <hr className='hr-others' id='projects'/>
  </>
);
}

export default About;