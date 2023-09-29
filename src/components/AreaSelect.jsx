/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useMap } from "react-leaflet";
// import SelectArea from 'leaflet-area-select';
// import L from "leaflet";

export default function AreaSelect() {
    const map = useMap();

    useEffect(() => {
        if (!map.selectArea) return;

        map.selectArea.enable();
        console.log(map);

        map.on("areaselected", (e) => {
            console.log(e.bounds);
            console.log([e.bounds.getNorthEast(), e.bounds.getSouthWest()]);
            // L.rectangle(e.bounds, { color: "#f00" }).addTo(map);
        });

        // map.on("click", (e) => {
        //     map.remove();
        // });

        const bounds = map.getBounds().pad(-0.25);

        map.selectArea.setValidate((layerPoint) => {
            return bounds.contains(this._map.layerPointToLatLng(layerPoint));
        });

        map.selectArea.setValidate();
    }, []);

    return null;
}
