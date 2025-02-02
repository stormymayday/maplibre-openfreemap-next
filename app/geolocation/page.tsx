"use client";

import { Map, GeolocateControl } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";

export default function GeolocateControlPage() {
    // const position = ["top-right", "top-left", "bottom-right", "bottom-left"];
    // const [positionControl, setPositionControl] = useState(position[2]);

    return (
        <div className="w-full h-[80%] flex flex-col items-center justify-center">
            <div className="w-full h-full rounded overflow-hidden">
                <Map
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3,
                    }}
                    mapStyle="https://tiles.openfreemap.org/styles/positron"
                >
                    {/* Add a key prop to remount the GeolocateControl */}
                    <GeolocateControl
                    // key={positionControl}
                    // position={positionControl}
                    />
                </Map>
            </div>
            {/* <div className="flex space-x-2 mt-4">
                {position.map((value) => {
                    const isActive = positionControl === value;
                    return (
                        <Button
                            key={value}
                            variant={isActive ? "default" : "secondary"}
                            onClick={() => setPositionControl(value)}
                        >
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Button>
                    );
                })}
            </div> */}
        </div>
    );
}
