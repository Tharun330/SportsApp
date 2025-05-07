import React from 'react';
import './PersonIntro.css'

function PersonIntro() {
    return (
        <div className='contentBody'>
            <div >
                <h3>Hello <span id='hand'>👋</span></h3>
                <h1>I'm Tharun Gudla</h1>
            </div>
            <div>
                <p>I'm a Software Engineer with 2+ years experience in software development. Specializing in building and
                    testing web services and APIs. Previously, with telecommunication domain project.</p>
                <p>Full Stack web projects where I developed and tested APIs using Java, JavaScript, Node.js, Spring,
                    React.js, SoapUI, and Postman.</p>
                <p> I am passionate about building Full Stack Web Applications, scalable backend systems, API design, and
                    problem-solving</p>
            </div>
            <div className="linksContainer">
                <a href="https://www.linkedin.com/in/gudla-tharun-sri-teja/" target="_blank"><i
                    className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/Tharun330" target="_blank"><i className="fa-brands fa-github"></i></a>

                <a href='https://drive.google.com/file/d/1BGLiOv4DL9RYRKVCIItmNono91JChmrV/view' target='_blank'><button>Resume</button></a>
            </div>

        </div>
    );
}

export default PersonIntro;