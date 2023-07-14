import React, { useState } from "react";

export default function Home() {
  /* 

1) Reemplaza estas variables por variables de estado utilizando useState. 
   Puedes utilizar los valores iniciales de "cold" y 10 
   
*/

  let temperatureColor = "cold";
  let temperatureValue = 10;

  /* 
  
  2) Registra eventos "onClick" y las funciones correspondientes para los dos botones. 
     Uno incrementará el valor y el otro lo decrementará. 
     Dentro de las funciones para incrementar y decrementar, agrega una condición para que al momento que la temperatura se encuentre
     en 20 grados, la variable 'temperatureColor' cambie a 'hot'. De igual manera, si la temperatura es < 20 grados, la variable 
    cambia a 'cold'. 
  
  */

  return (
    <div className="app_container">
      <div className="temperature_display_container">
        <div className={`temperature_display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
