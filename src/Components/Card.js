import React from "react";



const Card = ({ name, email, webSite, phone, address, userName, company }) => {
  return (
  
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{company}</p>
              </div>
            <ul>
              
                <li>
                  Full Name : <span>{name}</span>
                  </li>
                <li>
                  User Name : <span>{userName}</span>
                  </li>
                  <li>
                  city : <span>{address}</span>
                  </li>
                  <li>
                  Phone : <span>{phone}</span>
                  </li>
                  <li>
                  Email : <span>{email}</span>
                  </li>
                  </ul> 
              
        </div>
        <div className="bg-custom">
          <p>
            Visit : <span> {webSite}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;