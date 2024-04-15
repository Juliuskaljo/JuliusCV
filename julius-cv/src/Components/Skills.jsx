import "./skills.css";

function Skills() {

	return (
		<>
		<h1 id="skills" className="skills-header">Kunskaper inom</h1>
		<section className="skills-grid">
			<img src="./public/Github.svg" alt="github-logo"
			className="github-logo-skills" />
			
			<img src="./public/html-logo.png" alt="html-logo" className="skill-logo" />		
			
			<img src="./public/React-icon.svg.png" alt="react-logo" className="skill-logo" />
			
			<img src="./public/git-bash-logo.svg" alt="gitbash-logo" className="skill-logo" />		
			
			<img src="./public/CSS-logo.svg" alt="css-logo" className="skill-logo" />

			<img src="./public/javascript-logo.png" alt="js-logo" className="skill-logo" />
		</section>
		<hr className="hr-others" id="contact" />
		</>
	)
}

export default Skills;