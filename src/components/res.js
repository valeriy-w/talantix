"use client"
import React, { useState } from 'react';


export default function Res() {
   const [activeButton, setActiveButton] = useState('operator');    
   const handleOperatorClick = () => {
      setActiveButton('operator');
   };

   const handleOttClick = () => {
      setActiveButton('ott');
   };

   return (
      <div className="res" id="balance">
         <div className="res-flex">
            <div className="res-flex-block-1">
               <h1>Дополнительные источники 
                  выручки для разных <br/>
                  компаний
               </h1>
            </div>
            <div className="res-flex-block-2">
               <div className="change">
                  <div 
                     className={`default ${activeButton === 'operator' ? 'black' : ''}`} 
                     onClick={handleOperatorClick}
                  >
                     <p>Оператором</p>
                  </div>
                  <div 
                     className={`default ${activeButton === 'ott' ? 'black' : ''}`} 
                     onClick={handleOttClick}
                  >
                     <p>OTT сервисам</p>
                  </div>
               </div>
               <p className={`res-paragraph ${activeButton === 'operator' ? '' : 'none'}`}>
                  Найдите идеальный баланс выручки и
                  удовлетворонности пользователей с платформой 
                  рекламной монетизации
               </p>
               <p className={`res-paragraph ${activeButton === 'ott' ? '' : 'none'}`}>
               Дополнительные возможности обогащения данных об аудитории и монетизации
               </p>
            </div>
         </div>
      </div>
   );
}
