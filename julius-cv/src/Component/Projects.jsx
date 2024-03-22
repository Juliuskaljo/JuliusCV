import { useState } from "react";
import "./projects.css"

const projects = [
  {
    image: "./src/assets/pokemon-cv.jpg",
    header: "Pokemon API",
	link: "https://juliuskaljo.github.io/Pokemon-submission/",
    text: "Beskrivning av projekt 1"
  },
  {
    image: "./src/assets/hangmangame.webp",
    header: "Hangman",
	link: "https://wilmaniklasson.github.io/Hangman/",
    text: "Beskrivning av projekt 2"
  },
];

export const ProjectAccordion = () => {
  const [active, setActive] = useState(0);
  const handleToggle = (index) => setActive(index);

  return (
	<>
  <h1 className="project-header">Mina projekt</h1>
    <section className="project-accordion">
		
      {projects.map((project, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article 
            key={project.image}
            className={`image-accordion-project ${isActive}`}
            onClick={() => handleToggle(index)}
          >
			
            <img src={project.image} alt={project.header} />
            <div className="content">
              <span className="material-symbol-outlined">
              </span>
              <div>
              <a href={project.link}>  <h2>{project.header}</h2></a>
                <p>{project.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
	</>
  );
};