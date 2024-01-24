import React, { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css'

function Home() {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

  console.log("Latitude is:", lat)
  console.log("Longitude is:", long)
}, [lat, long]);

return (
 <>
 <h1 className="heading_todays_weather">TODAYS WEATHER</h1>
 </>
  );
};
export default Home;