import "./footer.css";

function Footer () {
  return (
	
    <footer id="contact" className="footer-container">
      <div className="text-container">
        <p><a href="mailto:Julius.kaljo@hotmail.se">Julius.kaljo@hotmail.se</a></p>
		
		<p><a href="tel:0760293379">0760293379</a></p>
		<p>Göteborg 412 67</p>
      </div>
	  <div className="social-media-icons">
		<a href="https://www.linkedin.com/in/julius-kaljo-923875229/"><img src="./public/linkedin.svg" alt="linkedin-logo" className="linkedin-logo" /></a>
		
		<a href="https://github.com/Juliuskaljo"><img src="./public/github.svg" alt="github-logo"
		className="github-logo" /></a>

		<a href="https://www.instagram.com/juliuskaljo/"><img src="./public/instagram.svg" alt="instagram-logo"
		className="instagram-logo" /></a>

		<a href="https://www.facebook.com/julius.kaljo/"><img src="./public/facebook.svg" alt="facebook-logo"
		className="facebook-logo" /></a>
	  </div>
    </footer>
  );
}

export default Footer;