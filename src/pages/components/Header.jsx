import React from 'react';
import './css/Header.css';


function Header() {
  return (
    <div className="Header">
        <div className="block-avatar"><a href="/"><img className='avatar' src={require("./img/avatar.jpg")} alt="Victorya Plesser" /></a></div>
        <div className="name"><h1>Виктория Плессер</h1></div>
        <div className="position"> 
            <p className='pHeader'>Клинический психолог, супервизор, EMDR-терапевт, </p>
            <p className='pHeader'>эмоционально-фокусированный терапевт</p>
            <br />
            <p className='pHeader'><a href="tel:+79262064197" className='pHeaderPhone'>+7 (926) 206-41-97</a></p>
        </div>
    </div>
  );
}

export default Header;
