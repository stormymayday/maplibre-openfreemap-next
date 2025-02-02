"use client";

import { useState } from "react";
import { Map, Layer, GeolocateControl } from "@vis.gl/react-maplibre";
import type { FillLayer } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Button } from "@/components/ui/button";

export default function LayersPage() {
    const [woodFillColor, setWoodFillColor] = useState("rgb(220,224,220)");
    const [waterFillColor, setWaterFillColor] = useState("rgb(194, 200, 202)");

    // wood
    const landcoverWood: FillLayer = {
        id: "landcover_wood",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landcover",
        minzoom: 10,
        filter: [
            "all",
            [
                "match",
                ["geometry-type"],
                ["MultiPolygon", "Polygon"],
                true,
                false,
            ],
            ["==", ["get", "class"], "wood"],
        ],
        paint: {
            "fill-color": woodFillColor,
            "fill-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0, 12, 1],
        },
    };

    const waterLayer: FillLayer = {
        id: "water",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "water",
        filter: [
            "all",
            [
                "match",
                ["geometry-type"],
                ["MultiPolygon", "Polygon"],
                true,
                false,
            ],
            ["!=", ["get", "brunnel"], "tunnel"],
        ],
        paint: {
            "fill-antialias": true,
            "fill-color": waterFillColor,
        },
    };

    // const handleMapLoad = (event: any) => {
    //     const map = event.target; // The map instance
    //     const layers = map.getStyle().layers; // Access layers array

    //     // console.log("Layers:", layers);
    //     // You can now interact with the layers array, for example:
    //     // - Iterate over layers
    //     // - Find specific layers by ID
    //     // - Modify layers

    //     const fillLayers = layers.filter((layer) => {
    //         return layer.type === "fill";
    //     });

    //     console.log(fillLayers);
    // };

    return (
        <div className="w-full h-[82%] md:h-[95%] flex flex-col gap-4 items-center justify-center">
            <div className="w-full h-full rounded overflow-hidden">
                <Map
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3,
                    }}
                    mapStyle="https://tiles.openfreemap.org/styles/positron"
                >
                    <Layer {...waterLayer} />
                    <Layer {...landcoverWood} />
                    <GeolocateControl />
                </Map>
            </div>
            <div className="flex gap-2">
                <Button
                    onClick={() => {
                        setWoodFillColor(
                            woodFillColor === "#72b787"
                                ? "rgb(220,224,220)"
                                : "#72b787"
                        );
                    }}
                >
                    Wood (zoom in)
                </Button>
                <Button
                    onClick={() => {
                        setWaterFillColor(
                            waterFillColor === "#60c9f9"
                                ? "rgb(194, 200, 202)"
                                : "#60c9f9"
                        );
                    }}
                >
                    Water
                </Button>
            </div>
        </div>
    );
}
