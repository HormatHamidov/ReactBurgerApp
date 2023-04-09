import React from 'react'

const MenuItem = ({image, name, content, price}) => {
  return (
    <div className='menuItem'>
         <div style={{backgroundImage: `url(${image})`}}></div>
         <h1 style={{marginBottom: '10px'}}>{name}</h1>
         <h6 style={{marginTop: '0px', fontSize:'12px'}}>{content}</h6>
         <p style={{marginTop:'50px'}}><i style={{color:'red'}}>{price} $</i></p>
    </div>
  )
}

export default MenuItem