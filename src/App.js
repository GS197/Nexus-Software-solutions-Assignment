
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';
//import ScrollColorTransition from './components/scroll';



const App = () => {
  const [bgColor, setBgColor] = useState('blue');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newColor = '';

      if (scrollY < 400) {
        newColor = 'blue';
      } else if (scrollY >= 400 && scrollY < 1000) {
        newColor = 'pink';
      } else {
        newColor = 'black';
      }

      setBgColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-color-change" style={{ backgroundColor: bgColor }}>
        

      <Navbar bg="dark" data-bs-theme="blue">
        <Container>
          <Navbar.Brand href="#home" id="barr">Greek Invention</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" id="barr">HOME</Nav.Link>
            <Nav.Link href="#features" id="barr">WORKS</Nav.Link>
            <Nav.Link href="#pricing" id="barr">TECHNOLOGIES</Nav.Link>
            <Nav.Link href="#features" id="barr">SERVICES</Nav.Link>
            <Nav.Link href="#pricing" id="barr">COMPANY</Nav.Link>
            <Nav.Link href="#features" id="barr">CONTACTS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    <div class="colorr">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6  p-5">
                    <h1>
                       Fintech Solution  </h1>
                    <h1 class="hh2">Transforming Fintech with AI</h1>
                    <div class="d-flex flex-row">
                        <p class="curvep mr-2">Fraud detection</p>
                        <p class="curvep mr-2">Transaction categorisation</p>
                        <p class="curvep mr-2">Risk Scoring</p>
                    </div>
                    <p>Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets</p>
                <button id="button1"><a href='https://geeksinvention.com/#'>Read more  <FiArrowRight/></a></button>
                </div>
                <div class="col-12 col-md-6 backgroundColor1 text-center">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png" class="imgsize p-5 m-5 " />
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row text-ceneter">
                <div class="col-12 col-md-6  backgroundColor1 text-center order-2 order-md-1">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png" class="imgsize p-5 m-5 text-center " />
                </div>
                <div class="col-12 col-md-6 backgroundColor1 p-5 order-1 order-md-2">
                    <h1>
                        Industrial IoT
                    </h1>
                    <h1 class="hh2">Providing a better connected experience</h1>
                    <div class="d-flex flex-row">
                        <p class="curvep mr-3">Connected manufacturing</p>
                        <p  class="curvep mr-3">Aviation</p>
                        <p  class="curvep">Smart Building</p>
                    </div>
                    <p>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.</p>
                    <button id="button2"><a href='https://geeksinvention.com/#'>Read more <FiArrowRight/></a></button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 backgroundColor1 text-center order-2 order-md-1">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png" class="imgsize p-5 m-5 "/>
                </div>
                <div class="col-12 col-md-6 backgroundColor1 p-5 order-1 order-md-2">
                    <h1>
                        Industrial IoT
                    </h1>
                    <h1 class="hh2">Providing a better connected experience</h1>
                    <div class="d-flex flex-row">
                        <p class="curvep mr-3">Connected manufacturing</p>
                        <p class="curvep mr-3">Aviation</p>
                        <p class="curvep mr-3">Smart Building</p>
                    </div>
                    <p>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.</p>
                    <button id="button3"><a href='https://geeksinvention.com/#'>Read more <FiArrowRight/></a></button>
                </div>
            </div>
        </div>
        <div class="container" >
            <div class="row">
                <div class="text-center m-5 p-5 ">
                    <h1 class="hh3">Check out more works by Geeks Invention</h1>
                    <h1 class="pp1">Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a valuable resource for those looking to develop their own mobile apps.</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="text-center m-5 p-5">
                    <h1 class="hh3">Recent clients</h1>
                    <h1  class="pp1">We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
                        World's 4th Strongest Banking Brand, Automobile & IoT industry</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg" class="imgg1" />
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.carlogos.org/car-logos/audi-logo-1995-download.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.carlogos.org/car-logos/audi-logo-1995-download.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.carlogos.org/car-logos/audi-logo-1995-download.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://www.carlogos.org/car-logos/audi-logo-1995-download.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="text-center container1">
                        <img src="https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo.png" class="imgg1"/>
                        <h1>Global Technology</h1>
                        <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="text-center p-5 m-5">
                    <h1 class="hh3">Software for modern platforms</h1>
                    <p class="pp1">We develop applications for mobile, web, wearables, and TV.</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-2">
                    <div class="text-center">
                        <img src="https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg" class="imgg2" />
                        <h1>Web</h1>
                    </div>
                </div>

                <div class="col-6 col-md-2">
                    <div class="text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/640px-Apple_Computer_Logo_rainbow.svg.png" class="imgg2" />
                        <h1>Web</h1>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="text-center">
                        <img src="https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png" class="imgg2" />
                        <h1>Web</h1>
                    </div>
                </div>

                <div class="col-6 col-md-2">
                    <div class="text-center">
                        <img src="https://www.pngitem.com/pimgs/m/21-214634_tv-logo-transparent-background-hd-png-download.png" class="imgg2"/>
                        <h1>Web</h1>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <div class="text-center">
                        <img src="https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg" class="imgg2"/>
                        <h1>Web</h1>
                    </div>
                </div>

                <div class="col-6 col-md-2">
                    <div class="text-center">
                        <img src="https://www.pngitem.com/pimgs/m/21-214634_tv-logo-transparent-background-hd-png-download.png"class="imgg2" />
                        <h1>Web</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="text-center p-5 m-5">
                    <h1 class="hh3">Only dedicated teams</h1>
                    <p class="pp1">Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</p>
                </div>
            </div>
        </div>
        <div class="container" id="refer">
            <div class="row text-center">
                <div class="col-12 col-md-4">
                    <img src="https://www.seguetech.com/wp-content/uploads/2015/11/segue-blog-agile-testing-symphony-of-people-ideas-tech..png" class="imgg2"/>
                    <h1>Agile approach</h1>
                </div>
                <div class="col-12 col-md-4">
                    <img src="https://cdn.dribbble.com/users/3428605/screenshots/10850356/deep-tech_4x.jpg" class="imgg2"/>
                    <h1>Agile approach</h1>
                </div>
                <div class="col-12 col-md-4">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/62/21/commitment-teamwork-together-business-logo-vector-27006221.jpg" class="imgg2" />
                    <h1>Agile approach</h1>

                </div>
                <div class="col-12 col-md-4">
                    <img src="https://cdn4.vectorstock.com/i/1000x1000/34/93/find-report-logo-icon-design-vector-22913493.jpg" class="imgg2" />
                    <h1>Agile approach</h1>
                </div>
                <div class="col-12 col-md-4">
                    <img src="https://img.favpng.com/4/25/19/time-doctor-logo-time-tracking-software-vector-graphics-human-resource-png-favpng-PHwxSpaNgpaJpihCtT75TCyzH.jpg" class="imgg2"/>
                    <h1>Agile approach</h1>
                </div>
                <div class="col-12 col-md-4">
                    <img src="https://w7.pngwing.com/pngs/234/264/png-transparent-scalability-computer-icons-computer-software-virtual-private-server-robustness-others-text-trademark-logo.png" class="imgg2"/>
                    <h1>Agile approach</h1>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};


export default App;
