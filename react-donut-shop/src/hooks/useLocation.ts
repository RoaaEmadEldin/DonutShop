import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";

const useLocation = (): LatLngTuple => {
  const [coords, setCoords] = useState<LatLngTuple>([0, 0]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      setCoords([location.coords.latitude, location.coords.longitude]);
    });
  }, []);

  return coords;
};

export default useLocation;
