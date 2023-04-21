import React from 'react';
import './css/LegalAsp.css';
import legacy from '../../download/agreements.docx'
// import legacy from 'https://docs.google.com/document/d/1cgwVimpKDpb_Tou-WAiUfvJUCtsmGvOD/edit?usp=sharing&ouid=100948237123630890808&rtpof=true&sd=true'

function LegalAsp() {
    return (
        <div className="LegalAsp">

                <p>

                    Форма информированного согласия: <button class="download-btn"><a href={legacy} download>Скачать</a></button>
                
                </p>

        </div>
    )
}

export default LegalAsp;