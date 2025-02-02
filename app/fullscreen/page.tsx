"use client";

import { Map, FullscreenControl } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";

export default function FullscreenControlPage() {
    // const position = ["top-right", "top-left", "bottom-right", "bottom-left"];
    // const [positionControl, setPositionControl] = useState(position[0]);

    return (
        <div className="w-full h-[80%] md:h-[100%] flex flex-col items-center justify-center">
            <div className="w-full h-full rounded overflow-hidden">
                <Map
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3,
                    }}
                    mapStyle="https://tiles.openfreemap.org/styles/positron"
                >
                    {/* Add a key prop to remount the FullscreenControl */}
                    <FullscreenControl
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
