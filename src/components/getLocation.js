import { useState, useEffect } from "react";

const getLocation = () => {
  const [lat, setLat] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude)
      }, //success call back
      err => {
        setErrMsg(err.message)
      }
    );
  }, [])
  return { lat, errMsg }
}
export default getLocation
