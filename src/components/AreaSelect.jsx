/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import useVisibilityStore from '../store/visibilityStore';
import { videoCameras } from '../utils/mapData';

export default function AreaSelect() {
    const { videoNames, setVideoNames, mapSelected, setMapSelected } = useVisibilityStore((state) => ({
        videoNames: state.videoNames,
        setVideoNames: state.setVideoNames,
        mapSelected: state.mapSelected,
        setMapSelected: state.setMapSelected,
      }));
    const map = useMap();

    useEffect(() => {
        if (!map.selectArea) return;

        map.selectArea.enable();

        map.on("areaselected", (e) => {
            // console.log(mapSelected)
            const newSelected = [...mapSelected];
            const newVideoNames = [...videoNames];
            videoCameras.forEach((camera, index) => {
                if (
                    camera.position[0] <= e.bounds.getNorthEast().lat &&
                    camera.position[0] >= e.bounds.getSouthWest().lat &&
                    camera.position[1] <= e.bounds.getNorthEast().lng &&
                    camera.position[1] >= e.bounds.getSouthWest().lng
                ){
                    newSelected[index] = !newSelected[index];
                    newVideoNames[index] = newSelected[index]
                        ? camera.name
                        : "";
                }
            });
            console.log(newSelected);
            setMapSelected(newSelected);
            setVideoNames(newVideoNames);
            
        });

        const bounds = map.getBounds().pad(-0.25);

        map.selectArea.setValidate((layerPoint) => {
            return bounds.contains(this._map.layerPointToLatLng(layerPoint));
        });

        map.selectArea.setValidate();
    }, []);

    return null;
}
