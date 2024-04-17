import "./footer.css";
import githubImage from "../assets/Github.svg";
import instagramImage from "../assets/instagram.svg";
import facebookImage from "../assets/facebook.svg";
import linkedinImage from "../assets/linkedin.svg";

function Footer () {
  return (
	
    <footer id="contact" className="footer-container">
      <div className="text-container">
        <p><a href="mailto:Julius.kaljo@hotmail.se">Julius.kaljo@hotmail.se</a></p>
		
		<p><a href="tel:0760293379">0760293379</a></p>
		<p>Göteborg 412 67</p>
      </div>
	  <div className="social-media-icons">
		<a href="https://www.linkedin.com/in/julius-kaljo-923875229/"><img src={linkedinImage} alt="linkedin-logo" className="linkedin-logo" /></a>
		
		<a href="https://github.com/Juliuskaljo"><img src={githubImage} alt="github-logo"
		className="github-logo" /></a>

		<a href="https://www.instagram.com/juliuskaljo/"><img src={instagramImage} alt="instagram-logo"
		className="instagram-logo" /></a>

		<a href="https://www.facebook.com/julius.kaljo/"><img src={facebookImage} alt="facebook-logo"
		className="facebook-logo" /></a>
	  </div>
    </footer>
  );
}

export default Footer;