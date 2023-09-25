import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Style from "./Map.module.css";
import { LatLngTuple } from "leaflet";

interface Props {
  coords: LatLngTuple;
}
const Map = ({ coords }: Props) => {
  return (
    <article className={Style.mapContainer}>
      {(coords[0] !== 0 || coords[1] !== 0) && (
        <MapContainer
          center={coords}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coords}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </article>
  );
};

export default Map;
