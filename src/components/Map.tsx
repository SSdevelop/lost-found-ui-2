import { useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import {icon} from "leaflet/src/layer/marker";
import securityCameraIcon from "../assets/security-camera.svg";

import useVisibilityStore from "../store/visibilityStore";

const Map = () => {
  const airportBounds: LatLngBoundsExpression = [
    [22.303, 113.913],
    [22.311, 113.921],
  ];
  const videoCameras = [
    { name: "IMG_1752.mp4", position: [22.308, 113.917] },
    { name: "IMG_1753.mp4", position: [22.305, 113.919] },
    { name: "IMG_6757.mp4", position: [22.309, 113.916] },
  ];
  const [selected, setSelected] = useState([false, false, false]);
  const defaultIcon = icon({
    iconUrl: securityCameraIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  const selectedIcon = icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const { videoNames, setVideoNames } = useVisibilityStore(state => ({
    videoNames: state.videoNames,
    setVideoNames: state.setVideoNames,
  }));

  return (
    <>
      <MapContainer
        bounds={airportBounds}
        zoom={10}
        scrollWheelZoom={false}
        style={{ margin: 0, height: '82.5%', width: "95%", borderRadius: '10px', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {
          videoCameras.map((camera, index) => (
            <Marker key={index} position={camera.position as LatLngExpression} icon={selected[index] ? selectedIcon : defaultIcon} eventHandlers={{
              click: () => { 
                const newSelected = [...selected];
                newSelected[index] = !newSelected[index];
                setSelected(newSelected);

                const newVideoNames = [...videoNames];
                newVideoNames[index] = newSelected[index] ? videoCameras[index].name : "";
                setVideoNames(newVideoNames);
              }
            }}>
              <Tooltip direction="left" offset={[-10, -20]} opacity={0.75}>
                {camera.name}
              </Tooltip>
            </Marker>
          ))
        }
      </MapContainer>
    </>
  );
};

export default Map;
