import React from 'react'
import BannerImage from '../assets/banner.png'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div style={{backgroundImage:`url(${BannerImage})`}} className="leftSide"></div>

      <div className="rightSide">
        <h1>Contact Us</h1>

        <form>
          <label>Name Surname</label>
          <input type="text" name="name" placeholder='Please enter your first and last name' />
          <label>Email</label>
          <input type="email" name="email" placeholder='Please enter your email adress' />
          <label>Messages</label>
          <textarea name="message" rows="6" placeholder='Please enter messages'></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact