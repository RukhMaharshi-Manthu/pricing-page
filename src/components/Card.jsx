import React from "react";
import "./styles.css";

const renderPlanInfos = (planInfos,id) => (
  <ul className="info-list">
    {planInfos?.map((info, index) => (
      <li key={`id-${index}-${info}`} className="info-item">
       {id==1?
        (index<=3?
        <p>&#x2714;{"  "}{info}</p>
        :
        <p className="enable">&#x2716;{"  "}{info}</p>):
        ("")
        }
        {id==2?
        (index<=6?
        <p>&#x2714;{"  "}{info}</p>
        :
        <p className="enable">&#x2716;{"  "}{info}</p>):
        ("")
        }
        {id==3?
        
        (<p>&#x2714;{"  "}{info}</p>)
        :
        ("")
        }
    
        
      </li>
    ))}
  </ul>
);

export const Card = ({ id,title, price, planInfos, btnText,  }) => {
 
  return (
  
    <div className="card-wrapper">
      
      <div className="card-title">{title}</div>
      <div className="card-subtitle">
        <span className="price" >{price}</span>/month
        <hr/>
       
      </div>
    
      {renderPlanInfos(planInfos,id)}
      <button className="card-button">{btnText}</button>
    </div>
    
  );
};
