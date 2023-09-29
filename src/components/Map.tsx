/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { LatLngExpression } from "leaflet";
import { icon } from "leaflet/src/layer/marker";
import securityCameraIcon from "../assets/security-camera.svg";

import useVisibilityStore from "../store/visibilityStore";
import AreaSelect from "./AreaSelect";
import { airportBounds, videoCameras } from "../utils/mapData";

const Map = () => {
  
  
  // const [selected, setSelected] = useState([false, false, false]);
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

  const { videoNames, setVideoNames, mapSelected, setMapSelected } = useVisibilityStore((state) => ({
    videoNames: state.videoNames,
    setVideoNames: state.setVideoNames,
    mapSelected: state.mapSelected,
    setMapSelected: state.setMapSelected,
  }));

  return (
    <>
      <MapContainer
        bounds={airportBounds}
        zoom={10}
        scrollWheelZoom={false}
        style={{
          margin: 0,
          height: "82.5%",
          width: "95%",
          borderRadius: "10px",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {videoCameras.map((camera, index) => (
          <Marker
            key={index}
            position={camera.position as LatLngExpression}
            icon={mapSelected[index] ? selectedIcon : defaultIcon}
            eventHandlers={{
              click: () => {
                const newSelected = [...mapSelected];
                newSelected[index] = !newSelected[index];
                setMapSelected(newSelected);

                const newVideoNames = [...videoNames];
                newVideoNames[index] = newSelected[index]
                  ? videoCameras[index].name
                  : "";
                setVideoNames(newVideoNames);
              },
            }}
          >
            <Tooltip direction="left" offset={[-10, -20]} opacity={0.75}>
              {camera.name}
            </Tooltip>
          </Marker>
        ))}
        <AreaSelect />
      </MapContainer>        
    </>
  );
};

export default Map;
