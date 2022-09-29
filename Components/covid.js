import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise[0]);
    setData(actualData.statewise[0]);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h1> 🔴 Live Data </h1>

      <div className="main">
        <div className="card">
          <p className="card_data"> Active</p>
          <p>{data.active}</p>
        </div>
        <div className="card">
          <p className="card_data"> Confirmed</p>
          <p>{data.confirmed}</p>
        </div>
        <div className="card">
          <p className="card_data"> Deaths</p>
          <p>{data.deaths}</p>
        </div>
        <div className="card">
          <p className="card_data"> Recovered</p>
          <p>{data.recovered}</p>
        </div>
      </div>
    </>
  );
};

export default Covid;
