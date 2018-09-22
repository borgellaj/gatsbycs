import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import "font-awesome/css/font-awesome.min.css";
import Banner from '../components/banner';
import Layout from '../components/layout';
import RoadmapIMG from "../images/bg-roadmap.jpg";
import HtmlIMG from "../images/html-img.png";
import CssIMG from "../images/css-img.png";
import JsIMG from "../images/js-img.png";
import AngularIMG from "../images/angular.png";
import ReactIMG from "../images/reactjs.png";
import MeteorIMG from "../images/meteor.png";
const ColThreeContainer = styled.div`
clear:all;overflow:auto;margin:0 0 1rem;
`
const StepSec = styled.div`
clear:all;
background-image:url(${RoadmapIMG});
background-size:cover;
padding:3rem 0;
h2{
color:#fff;
}
`
const IndexPage = () => (
  <Layout>
  <Banner />
  <div className="wrapping home center">

<h2 className="cheading">OUR TUTORIALS</h2>
<ColThreeContainer>
<div className="ColThree">
<img src={HtmlIMG} alt="HTML 5"/>
<h3>HTML 5</h3>
<p className="leading-loose">
Hypertext Markup Language, a standardized system for tagging text files to achieve font color, graphic, and hyperlink effects on Web pages.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={CssIMG} alt="CSS 3"/>
<h3>CSS 3</h3>
<p className="leading-loose">
CSS gives more control over the appearance of a web page to the page creator than to the browser designer or the viewer. 
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={JsIMG} alt="Javascript"/>
<h3>Javascript</h3>
<p className="leading-loose">
An object-oriented computer programming language commonly used to creat interactive effects within web browsers.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
</ColThreeContainer>
<ColThreeContainer>
<div className="ColThree">
<img src={AngularIMG} alt="Angular"/>
<h3>Angular</h3>
<p className="leading-loose">
A structural framework for dynamic web apps.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={MeteorIMG} alt="Meteor"/>
<h3>Meteor</h3>
<p className="leading-loose">
JavaScript web framework written using Node.js.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
<div className="ColThree">
<img src={ReactIMG} alt="ReactJS"/>
<h3>React</h3>
<p className="leading-loose">
JavaScript library for building user interfaces.
</p>
<p className="RmSec bg-cs"><a href="/tutorials">Learn More</a></p>
</div>
</ColThreeContainer>  
</div>

<StepSec>
<h2 className="cheading">LEARNING ROADMAP</h2>
<div className="steps wrapping center">
        <div className="steps-step-2">
            <i className="fa fa-code"></i>
			<p className="lblTxt">Learn to Code</p>
        </div>
        <div className="steps-step-2">
			<i className="fa fa-users"></i>
			<p className="lblTxt">Work with Team</p>
        </div>
        <div className="steps-step-2">
			<i className="fa fa-codepen"></i>
			<p className="lblTxt">Teach Yourself & Others</p>
        </div>
        <div className="steps-step-2">
			<i className="fa fa-cube"></i>
			<p className="lblTxt">Build Beyond</p>
        </div>
        <div className="steps-step-2">
			<i className="fa fa-lightbulb-o"></i>
			<p className="lblTxt">Knowlege Path</p>
        </div>		
</div>
</StepSec>	
  </Layout>
)

export default IndexPage
