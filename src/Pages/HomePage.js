import HomePageImg1 from "../images/Homepage.jpg"
import ArrowImg from "../images/Arrow.png"
import PhonesImg from "../images/GroupOfPhones.png"
import SmallArrowImg from "../images/SmallArrow.png"
import SmallArrowImg2 from "../images/SmallArrow2.png"
import IPhoneImg from "../images/iMockup - iPhone 15.png"
import IPhoneImg2 from "../images/iMockup - iPhone 16.png"
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const Scroll = () => {
        document.getElementById("HomePageSec2").scrollIntoView({ behavior: 'smooth' });
    }


    const GoToBillMe = () => {
        navigate('/BillMe');
    }

    const GoToTicketOne = () => {
        navigate('/TicketOne');
    }


    return (
        <>
            <div id="HomePageContainer">
                    <div id="HomePageSec1">
                        <div id="HomePageSec1Main">
                            <img id="HomePageImg1" src={HomePageImg1} alt="HomePageImg" />
                            <div id="HomePageSec1Text">
                                <div id="HomePageSec1TextHeader">Who am I?</div>
                                <div id="HomePageSec1TextBody">I’m Ali, an Egyptian Computer Science student in<br />
                                    Canada transitioning from software
                                    development to UX design.
                                    Passionate towards interaction and motion design but will always help you build an
                                    innovative digital product starting from UX research to prototyping.
                                </div>
                                <div id="HomePageSec1But">Learn More</div>
                            </div>
                        </div>
                        <img id="ArrowImg" src={ArrowImg} alt="ArrowImg" onClick={Scroll} />
                    </div>

                <div id="HomePageSec2">
                    <div className="fade-in">
                        <div id="HomePageSec2Text">
                            <div id="HomePageSec2TextHeader">Featured projects</div>
                            <div id="HomePageSec2TextBody">Find out about my works: read through my case studies, have a look at final designs and try out prototypes I’ve built.</div>
                        </div>
                    </div>
                    <div id="HomePageSec2Main">
                            <div id="BillMe">
                                <div id="BillMeText">
                                <div className="fade-in"><div id="BillMeTextHeader">Bill Me</div></div>
                                <div className="fade-in"> <div id="BillMeTextBody">BillMe is a simplified invoicing app allows users to send email invoices and
                                        enables clients to securely enter their card details.
                                    </div></div>
                                    <div className="fade-in"><div id="BillMeTextBody2" onClick={GoToBillMe}>Read case study<img id="SmallArrowImg" src={SmallArrowImg} alt="SmallArrowImg" /></div></div>
                            </div>
                            <div className="fade-in">
                                <div id="PhonesImgDiv">
                                    <img id="PhonesImg" src={PhonesImg} alt="PhonesImg" onClick={GoToBillMe} />
                            </div>
                            </div>
                        </div>

                            <div id="TicketOne">
                                <div id="TicketOneText">
                                <div className="fade-in"> <div id="TicketOneTextHeader">TicketOne</div></div>
                                <div className="fade-in"><div id="TicketOneTextBody">TicketOne is an app designed for vehicle owners and drivers in Canada which enables users to pay tickets and provides contact information for disputing them.
                                    </div></div>
                                    <div className="fade-in"><div id="TicketOneTextBody2" onClick={GoToTicketOne}>Read case study<img id="SmallArrowImg" src={SmallArrowImg2} alt="SmallArrowImg" /></div></div>
                                </div>
                                <div className="fade-in">
                                <div id="IPhones" onClick={GoToTicketOne}>

                                    <img id="IPhoneImg2" src={IPhoneImg2} alt="IPhoneImg2" />
                                    <img id="IPhoneImg" src={IPhoneImg} alt="IPhoneImg" />
                                    </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}