"use client";

import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DefaultMap() {
    const mapStyles = ["positron", "bright", "liberty"];

    const [mapStyle, setMapStyle] = useState(
        `https://tiles.openfreemap.org/styles/${mapStyles[0]}`
    );

    return (
        // <div className="w-full h-[85%] pb-4 flex flex-col gap-4 items-center justify-center">
        <div className="w-full h-[83%] md:h-[95%]  pb-4 flex flex-col gap-4 items-center justify-center">
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
            <div className="flex gap-2">
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
