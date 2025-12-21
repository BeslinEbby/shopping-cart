import React from 'react'
import Title from '../../components/title/Title'
import contact from "../../assets/contact.png"
import './Contact.css'


const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact-title">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="contact-cnt">
        <img src={contact} alt="" />
        <div className='contact-info'>
          <h4>Our Store</h4>
          <p>54321 Willis station <br /> suite 350, Washington DC ,USA</p>
          <p>Tel : 12345678 <br /> Email: contact@dummy.com</p>
          <p>Careers at dummy</p>
          <p>Learn more about our Team Job Openings</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </section>
  )
}

export default Contact