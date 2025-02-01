"use client";

import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComponent() {
    return (
        <div style={{ width: "70vw", height: "70vh" }}>
            <Map
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3,
                }}
                mapStyle="https://tiles.openfreemap.org/styles/liberty"
            />
        </div>
    );
}
