import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div style={{backgroundImage:`url(${BannerImage})`}} className="aboutTop"></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos cum perspiciatis porro et, labore asperiores doloremque repudiandae, libero nobis explicabo earum necessitatibus! Unde libero ipsa voluptate quis reprehenderit natus.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus enim, consectetur modi labore architecto dignissimos nisi distinctio, exercitationem quisquam dicta eligendi similique obcaecati voluptate magnam perspiciatis at rem dolorem.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus natus a illo tenetur illum sunt labore, unde laboriosam at. Illum, accusamus error quam pariatur minima eligendi. Consequatur, nobis quis?
        </p>
      </div>
    </div>
  )
}

export default About