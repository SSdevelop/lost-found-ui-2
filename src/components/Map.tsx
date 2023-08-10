import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { LatLngBoundsExpression } from "leaflet";
const Map = () => {
    const airportBounds: LatLngBoundsExpression = [
        [22.303, 113.913],
        [22.311, 113.921],
    ];
  return (
    <MapContainer bounds={airportBounds} zoom={10} scrollWheelZoom={false} style={{ height: '45vh', width: '95%' }} attributionControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
