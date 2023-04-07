import React from 'react'
import '..//..//styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <FacebookIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <p>Butun haqqlar qorunur | BurgerKing</p>
    </div>
  )
}

export default Footer