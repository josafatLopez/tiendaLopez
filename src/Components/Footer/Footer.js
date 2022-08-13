import React from 'react'
import './Footer.css'

const Footer = () => {
   const current = new Date()
   const currentDate = `${current.getFullYear()}`
   return (
      <footer>
         <div>
            <img loading='lazy' src={'/img/logo/iso-blue.png'} alt="Isotipo Menús México" />
            <p>© Menús México {currentDate}. <br /> Todos los derechos reservados.</p>
         </div>
      </footer>
   )
}

export default Footer