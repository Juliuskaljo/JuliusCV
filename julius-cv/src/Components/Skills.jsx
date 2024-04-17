import "./skills.css";
import githubImage from "../assets/Github.svg";
import htmlImage from "../assets/html-logo.png";
import reactImage from "../assets/React-icon.svg.png";
import gitbashImage from "../assets/git-bash-logo.svg";
import cssImage from "../assets/CSS-logo.svg";
import jsImage from "../assets/javascript-logo.png";

function Skills() {

	return (
		<>
		<h1 id="skills" className="skills-header">Kunskaper inom</h1>
		<section className="skills-grid">
			<img src={githubImage} alt="github-logo"
			className="github-logo-skills" />
			
			<img src={htmlImage} alt="html-logo" className="skill-logo" />		
			
			<img src={reactImage} alt="react-logo" className="skill-logo" />
			
			<img src={gitbashImage} alt="gitbash-logo" className="skill-logo" />		
			
			<img src={cssImage} alt="css-logo" className="skill-logo" />

			<img src={jsImage} alt="js-logo" className="skill-logo" />
		</section>
		<hr className="hr-others" id="contact" />
		</>
	)
}

export default Skills;