"use client";

import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MapComponent() {
    const mapStyles = ["positron", "bright", "liberty"];

    const [mapStyle, setMapStyle] = useState(
        `https://tiles.openfreemap.org/styles/${mapStyles[0]}`
    );

    return (
        <div className="bg-black w-full h-full h-[95%] flex flex-col items-center absolute top-0">
            {/* <div className="bg-black w-full h-full h-[95%] flex flex-col items-center"> */}
            <div className="w-full h-full rounded overflow-hidden">
                <Map
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3,
                    }}
                    mapStyle={mapStyle}
                ></Map>
            </div>
            <div className="flex space-x-2 mt-4">
                {mapStyles.map((style) => {
                    const isActive =
                        `https://tiles.openfreemap.org/styles/${style}` ===
                        mapStyle;
                    return (
                        <Button
                            variant={isActive ? "default" : "secondary"}
                            key={style}
                            onClick={() => {
                                setMapStyle(
                                    `https://tiles.openfreemap.org/styles/${style}`
                                );
                            }}
                        >
                            {style.charAt(0).toUpperCase() + style.slice(1)}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
