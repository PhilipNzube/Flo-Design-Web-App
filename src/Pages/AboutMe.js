import AboutMeImg1 from "../images/About me.jpg"
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AboutMe() {


    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <div id="AboutMeSec1">
                <div id="AboutMeSec1Main">
                    <div id="AboutMeImg1Main">
                        <div id="AboutMeImg1TextHeader">Who am I?</div>
                        <div id="AboutMeImg1Div">
                            <img id="AboutMeImg1" src={AboutMeImg1} alt="AboutMeImg" />
                        </div>
                    </div>
                    <div id="AboutMeSec1Text">
                        <div id="AboutMeSec1TextBody">I’m a 4th-year Computer Science student in Canada, originally from Egypt. I moved to
                            Canada almost three years ago to pursue my degree, in addition to experience and
                            learn about a new place and culture. Before starting my degree, I was fascinated by the
                            idea of designing and creating apps and websites. However, during my software
                            development internships, I realized that developers typically follow blueprints and write
                            code without much involvement in the creative process of designing the app itself.<br /><br />

                            This experience led me to discover my interest in the psychology behind design and the
                            layouts of digital products. I was particularly intrigued by how big of an effect can the
                            design have on users and the outcome of the user journey for example: a sales funnels
                            . When I learned that UX designers are responsible for user research, creating product
                            blueprints, and designing user experiences, I knew this was the path I wanted to follow.
                            I am drawn to the creativity and individuality that UX design allows, compared to the
                            more rigid structure of software development.<br /><br />

                            To begin this transition, I took a Human-Computer Interaction course at my university,
                            which covered the fundamentals of UX design and the entire process from research to
                            prototyping. Additionally, I started the Google UX Design Certificate to further my
                            understanding and skills in this field. While I am aware that I am just scratching the
                            surface of the UX industry, this excites me, as there is so much more to learn and
                            experience.<br /><br />

                            Passionate about UI and interaction design, I am committed to helping build innovative
                            digital products from UX research to prototyping. My technical background in software
                            development, combined with my growing knowledge of UX principles, positions me
                            uniquely to bridge the gap between development and design, ensuring seamless and
                            user-centric digital experiences.
                        </div>
                        <div className="fade-in"><a id="CV" href="https://drive.google.com/file/d/11luKQjetS1DOg3YxZDH1V0WyN96A9ByM/view?usp=sharing">View my CV</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}