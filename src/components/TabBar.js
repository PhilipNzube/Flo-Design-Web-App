import { useNavigate } from "react-router-dom";
import Logo from "../images/logo 1.png";
import Menu from "../images/Menu.png"
import CloseMenu from "../images/CloseBut.png"
import HomePage from "../Pages/HomePage";

export default function TabBar() {

    let AboutMeClicked = true;
    let ProjectsClicked = false;
    const navigate = useNavigate();


    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.bottom >= 0 &&
            rect.right >= 0
        );
    }

    const addVisibleClass = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', addVisibleClass);
    window.addEventListener('resize', addVisibleClass);
    document.addEventListener('DOMContentLoaded', addVisibleClass);

    addVisibleClass();

    const MenuClick = () => {
        document.getElementById("MenuImg").style.display = "none";
        document.getElementById("CloseMenuImg").style.display = "block";
        document.getElementById("NavOverlay").style.display = "flex";
        document.body.style.overflowY = "hidden";
        document.getElementById("NavOverlay").style.animationName = "OverlaySlideIn";
    }

    const CloseMenuClick = () => {
        document.getElementById("NavOverlay").style.animationDuration = 0.3;
        document.getElementById("NavOverlay").style.animationName = "OverlaySlideOut";
        setTimeout(() => {
            document.getElementById("NavOverlay").style.animationDuration = 0.8;
            document.body.style.overflowY = "auto";
            if (window.innerWidth < 780) {
                document.getElementById("MenuImg").style.display = "block";
            }
            document.getElementById("NavOverlay").style.display = "none";
            document.getElementById("CloseMenuImg").style.display = "none";
        }, 300);
    }

    const LogoClick = () => {
        document.getElementById("Nav1").style.textDecoration = "none";
        document.getElementById("Nav1").style.textUnderlineOffset = "0px";
        document.getElementById("Nav1").style.textDecorationThickness = "0px";

        AboutMeClicked = true;
        ProjectsClicked = false;
        navigate('/');
        document.getElementById("NavOverlay").style.animationDuration = 0.3;
        document.getElementById("NavOverlay").style.animationName = "OverlaySlideOut";
        setTimeout(() => {
            document.getElementById("NavOverlay").style.animationDuration = 0.8;
            document.body.style.overflowY = "auto";
            if (window.innerWidth < 780) {
                document.getElementById("MenuImg").style.display = "block";
            }
            document.getElementById("NavOverlay").style.display = "none";
            document.getElementById("CloseMenuImg").style.display = "none";
        }, 300);
    }

    const AboutMeClick = () => {
        AboutMeClicked = true;
        ProjectsClicked = false;
        document.getElementById("Nav1").style.textDecoration = "underline";
        document.getElementById("Nav1").style.textUnderlineOffset = "10px";
        document.getElementById("Nav1").style.textDecorationThickness = "2px";
        navigate('/AboutMe');
        document.getElementById("NavOverlay").style.animationDuration = 0.3;
        document.getElementById("NavOverlay").style.animationName = "OverlaySlideOut";
        setTimeout(() => {
            document.getElementById("NavOverlay").style.animationDuration = 0.8;
            document.body.style.overflowY = "auto";
            if (window.innerWidth < 780) {
                document.getElementById("MenuImg").style.display = "block";
            }
            document.getElementById("NavOverlay").style.display = "none";
            document.getElementById("CloseMenuImg").style.display = "none";
        }, 300);
    }




    const ProjectsClick = () => {
        navigate('/?section=HomePageSec2');
        ProjectsClicked = true;
        AboutMeClicked = false;
        <HomePage Scroll="true" /> 

        document.getElementById("Nav1").style.textDecoration = "none";
        document.getElementById("Nav1").style.textUnderlineOffset = "0px";
        document.getElementById("Nav1").style.textDecorationThickness = "0px";

        document.getElementById("NavOverlay").style.animationDuration = 0.3;
        document.getElementById("NavOverlay").style.animationName = "OverlaySlideOut";
        setTimeout(() => {
            document.getElementById("NavOverlay").style.animationDuration = 0.8;
            document.body.style.overflowY = "auto";
            if (window.innerWidth < 780) {
                document.getElementById("MenuImg").style.display = "block";
            }
            document.getElementById("NavOverlay").style.display = "none";
            document.getElementById("CloseMenuImg").style.display = "none";
        }, 300);
    }



    const ContactMeClick = () => {
        navigate('/ContactMe');
        ProjectsClicked = false;
        AboutMeClicked = false;

        document.getElementById("Nav1").style.textDecoration = "none";
        document.getElementById("Nav1").style.textUnderlineOffset = "0px";
        document.getElementById("Nav1").style.textDecorationThickness = "0px";

        document.getElementById("NavOverlay").style.animationDuration = 0.3;
        document.getElementById("NavOverlay").style.animationName = "OverlaySlideOut";
        setTimeout(() => {
            document.getElementById("NavOverlay").style.animationDuration = 0.8;
            document.body.style.overflowY = "auto";
            if (window.innerWidth < 780) {
                document.getElementById("MenuImg").style.display = "block";
            }
            document.getElementById("NavOverlay").style.display = "none";
            document.getElementById("CloseMenuImg").style.display = "none";
        }, 300);
    }


    return (
        <>
            <div id="TabBarMain">
                <img id="Logo" src={Logo} alt="Logo" onClick={LogoClick} />
                <div id="Menu"><img id="MenuImg" src={Menu} alt="Menu" onClick={MenuClick} />
                    <img id="CloseMenuImg" src={CloseMenu} alt="Menu" onClick={CloseMenuClick} /></div>
                <div id="Nav"><div id="Nav1" onClick={AboutMeClick}>About Me</div>
                    <div id="Nav2" onClick={ProjectsClick}>Projects</div>
                    <div id="Nav3" onClick={ContactMeClick}>Contact Me</div>
                </div>


                <div id="NavOverlay"><div id="NavOverlay1" onClick={AboutMeClick}>About Me</div>
                    <div id="NavOverlay2" onClick={ProjectsClick}>Projects</div>
                    <div id="NavOverlay3" onClick={ContactMeClick}>Contact Me</div>
                </div>
            </div>
        </>
    )
}