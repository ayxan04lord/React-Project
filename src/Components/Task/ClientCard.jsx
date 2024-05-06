import React from "react";

export default function ClientCard({name, phone, card})  {
  
   
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Имя клиента: {name === "" ? 'Anonimous' : name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone === "" ? '' : phone}</h6>
          <p className="card-text">Номер карты: {card ==="" ? 'Card is not specified' : card}</p>
        </div>
      </div>
    
)
}

