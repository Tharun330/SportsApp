import React from 'react';
import Project from './Project';
import './ProjectPage.css';




function ProjectPage() {
    let project = {
        project1: {
            img1: "src/assets/pictures/image.png",
            img2: "src/assets/pictures/WhatsApp Image 2025-05-28 at 3.21.47 PM.jpeg",
            direction: "row",
            name: "StayFinder",
            number: "01",
            description: "StayFinder is hotel booking web application where customer can book an hotel and customer can also add their house into hotel"

        },
        project2: {
            img1: "src/assets/pictures/Screenshot 2025-05-28 230027.png",
            img2: "src/assets/pictures/Screenshot 2025-05-28 230315.png",
            direction: "row-reverse",
            name: "Stockify",
            number: "02",
            description: "Stockify is stock marking web application which will used to sell and buy stocks, and also day trading options for customer"
        },
        project3: {
            img1: "src/assets/pictures/Screenshot 2025-05-28 234824.png",
            img2: "src/assets/pictures/Screenshot 2025-05-28 230315.png",
            direction: "row",
            name: "Distance Calculator",
            number: "03",
            description: "React based Distance Calculator app which gives the distance in KM & MI between two destinations"
        }
    }

    return (
        <div id='projectPage' className='projectPage'>
            <Project img1={project.project1.img1} img2={project.project1.img2}
                direction={project.project1.direction}
                name={project.project1.name}
                number={project.project1.number}
                description={project.project1.description} />
            <br></br>
            <Project img1={project.project2.img1} img2={project.project2.img2}
                direction={project.project2.direction}
                name={project.project2.name}
                number={project.project2.number}
                description={project.project2.description} />

            <br></br>
            <Project img1={project.project3.img1} 
                direction={project.project3.direction}
                name={project.project3.name}
                number={project.project3.number}
                description={project.project3.description} />
        </div>

    );
}

export default ProjectPage;