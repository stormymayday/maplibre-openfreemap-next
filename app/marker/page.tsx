"use client";

import { Map, Marker } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MarkerPage() {
    const mapStyles = ["positron", "bright", "liberty", "dark"];

    const [mapStyle, setMapStyle] = useState(
        `https://tiles.openfreemap.org/styles/${mapStyles[0]}`
    );

    return (
        <div className="w-full h-[75vh] flex flex-col items-center justify-center">
            <div className="w-full h-full rounded overflow-hidden">
                <Map
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3,
                    }}
                    mapStyle={mapStyle}
                >
                    <Marker longitude={-100} latitude={40} color="red" />
                </Map>
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
