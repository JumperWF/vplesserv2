import React from 'react';
import './css/Social-icons.css';
import tg from './img/icon/tg.svg'
import vk from './img/icon/vk.svg'
import zen from './img/icon/zen.svg'


function SocialIcons() {
  return (

    <div className="social-icons-wrapper">
        <p className='social-header'>Что почитать</p>
        <div className="social-icons">
            <div className="telegram-href">
                <a href="https://t.me/dom_viol" target="_blank" rel="noreferrer">
                    {/* <img src={require("./img/icon/tg.png")} alt="telegram" width="40px" height="40px"></img> */}
                    <img src={tg} alt="telegram" width="40px" height="40px"></img>
                </a>
            </div>

            <div className="telegram-href">
                <a href="https://t.me/selfregulat" target="_blank" rel="noreferrer">
                    {/* <img src={require("./img/icon/tg.png")} alt="telegram" width="40px" height="40px"></img> */}
                    <img src={tg} alt="telegram" width="40px" height="40px"></img>
                </a>
            </div>

            <div className="zen-href">
                <a href="https://dzen.ru/vikspsy" target="_blank" rel="noreferrer">
                    {/* <img src={require("./img/icon/zen.png")} alt="yandex dzen" width="40px" height="40px"></img> */}
                    <img src={zen} alt="yandex dzen" width="40px" height="40px"></img>
                </a>
            </div>

            <div className="vk-href">
                <a href="https://vk.com/vikspsy" target="_blank" rel="noreferrer">
                    {/* <img src={require("./img/icon/vk.png")} alt="vk" width="40px" height="40px"></img> */}
                    <img src={vk} alt="vk" width="40px" height="40px"></img>
                </a>
            </div>

            {/* <div className="watsapp-href">
                <a href="https://wa.me/00000000" target="_blank" rel="noreferrer">
                    <img src={require("./img/icon/whatsapp.png")} alt="watsapp" width="40px" height="40px"></img>
                </a>
            </div> */}
        </div>
    </div>
  );
}

export default SocialIcons;