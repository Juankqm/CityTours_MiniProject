import React, { useState, useEffect } from "react";
import "./styles.scss";
import { tourData } from "../../services/tourData";
//Components
import Tour from "../Tour/index";

export default function TourList() {
  const [data, setData] = useState([]);

  //Setting the state with de data exported from tourData
  useEffect(() => {
    setData(tourData);
  }, []);

  const removeTour = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <section className="tourList">
      {data.map((item) => (
        <Tour
          key={item.id}
          id={item.id}
          img={item.img}
          city={item.city}
          name={item.name}
          info={item.info}
          removeTour={removeTour}
        />
      ))}
    </section>
  );
}
