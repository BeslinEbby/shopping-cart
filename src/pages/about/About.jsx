import React from 'react'
import Title from '../../components/title/Title'
import about from "../../assets/about.jpg"
import './About.css'
import OurPolicy from '../../components/ourPolicy/OurPolicy'


const About = () => {
  return (
    <section className='about'>
      <div className="about-title">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="about-cnt">
        <img src={about} alt="" />
        <div className='about-cnt-info'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum voluptatibus fugiat corporis eius ex at, aspernatur omnis soluta! Expedita vel esse distinctio exercitationem id!</p>
          <p>sit amet, consectetur adipisicing elit. Atque, ipsa quibusdam. Voluptatem, numquam incidunt odit mollitia in, molestias nisi voluptatum eos tempora ratione ea quis repellendus expedita iste ad magni. Omnis, corrupti? Qui rem ad iste modi sunt, consectetur corporis itaque, asperiores fugit perferendis officiis, tenetur error sit amet necessitatibus.</p>
          <b>Our Mission</b>
          <p>dolor sit amet consectetur adipisicing elit. Aut veritatis ratione ullam exercitationem! Quasi fugiat sed esse debitis maiores consectetur iure aperiam, nemo dolorum facilis rem ad obcaecati nesciunt est.</p>
        </div>
      </div>

      <div className="choose-us">
        <div className="about-title">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className="choose-us-cnt">
          <div className="choose-us-info">
            <b>Quality Assurance</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo aliquam harum magnam modi consequuntur!</p>
          </div>
          <div className="choose-us-info">
            <b>Convenience</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo aliquam harum magnam modi consequuntur!</p>
          </div>
          <div className="choose-us-info">
            <b>Exceptional Customer Service</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo aliquam harum magnam modi consequuntur!</p>
          </div>
        </div>
      </div>
      <div className="our-offer">
        <OurPolicy/>
      </div>
    </section>
  )
}

export default About