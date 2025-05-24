import React from 'react'

export const Footer = () => {
return (
<section className="dark">
    <div className="container columns-2">
      <div className="columns">
        <h2>Kontakt</h2>
        <p>Hotel Stříbrava</p>
        <p>Ke Kamenné lávce 12</p>
        <p>317 24 Libnice nad Stříbravou</p>
      </div>
      <div className='email'>
        <p>recepce@hotelstribrava.cz</p>
      </div>
      <img src={mapa} alt="Kde nás najdete" />
    </div>
</section>
)
}