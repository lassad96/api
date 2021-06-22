import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from './Card'

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  console.log(data);
  return (
    <div className="cont">
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Card
              name={el.name}
              phone={el.phone}
              webSite={el.website}
              address={el.address.city}
              email={el.email}
              userName={el.username}
              company={el.company.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;