export function SatelliteMap() {
    return {
        "version": 7,
        "name": "Satellite",
        "constants": {
            "@state_dash": [0, 2.5],
            "@sans_ital": "Open Sans Semibold Italic, Arial Unicode MS Bold",
            "@road-width-major": {
                "stops": [[5, 0.8], [6, 1], [7, 1.8], [8, 2], [9, 2.3], [10, 2.5], [11, 2.5], [12, 2.8], [13, 3], [14, 3], [15, 6], [16, 7], [17, 9], [18, 16]]
            },
            "@road-min": 12,
            "@road-width-motorwaylink": {
                "stops": [[6, 1], [12, 3], [18, 8]]
            },
            "@highway-opacity": 0.4,
            "@land": "#fff",
            "@name": "{name_en}",
            "@water_label": "aqua",
            "@number-1": {
                "base": 1,
                "stops": [[16, 0], [20, 0.2]]
            },
            "@admin-opacity": 0.5,
            "@admin_level_2_width": {
                "base": 1,
                "stops": [[4, 1.4], [5, 2], [12, 8]]
            },
            "@sans_bd": "Open Sans Bold, Arial Unicode MS Bold",
            "@admin": "#9e9cab",
            "@admin_level_3_width": {
                "base": 1,
                "stops": [[4, 0.4], [5, 1], [12, 3]]
            },
            "@sans": "Open Sans Regular, Arial Unicode MS Regular",
            "@water": "#79d3e3",
            "@road-width-med": {
                "stops": [[14, 0], [19, 8]]
            },
            "@offwhite": "#ddd",
            "@halo": "rgba(0,0,0,0.75)",
            "@road-opacity": 0.2,
            "@service_line": "#e6f2f2",
            "@road-width-min": {
                "stops": [[11, 0.5], [13, 1.6], [14, 2], [15, 3], [16, 6], [17, 10]]
            }
        },
        "sources": {
            "mapbox": {
                "type": "vector",
                "url": "mapbox://mapbox.mapbox-streets-v6"
            },
            "satellite": {
                "type": "raster",
                "url": "mapbox://mapbox.satellite",
                "tileSize": 256
            },
            "Mapbox Terrain V2": {
                "type": "vector",
                "url": "mapbox://mapbox.mapbox-terrain-v2"
            }
        },
        "sprite": "https://www.mapbox.com/mapbox-gl-styles/sprites/bright",
        "glyphs": "mapbox://fontstack/{fontstack}/{range}.pbf",
        "layers": [{
                "id": "background",
                "type": "background",
                "paint.labels": {
                    "background-color": "rgb(4,7,14)"
                }
            }, {
                "id": "satellite",
                "type": "raster",
                "source": "satellite",
                "source-layer": "mapbox_satellite_full",
                "paint": {
                    "raster-fade-duration": 100
                },
                "paint.contours": {
                    "raster-opacity": {
                        "base": 1,
                        "stops": [[11, 1], [12, 0.5]]
                    }
                }
            }, {
                "id": "province_border",
                "type": "line",
                "source": "mapbox",
                "source-layer": "admin",
                "filter": ["all", [">=", "admin_level", 3], ["==", "maritime", 0]],
                "layout": {
                    "line-join": "bevel",
                    "line-cap": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "@offwhite",
                    "line-dasharray": "@state_dash",
                    "line-width": {
                        "base": 1,
                        "stops": [[4, 1], [12, 3]]
                    },
                    "line-opacity": {
                        "stops": [[3, 0], [3.5, 0.5]]
                    }
                }
            }, {
                "id": "country_border",
                "type": "line",
                "source": "mapbox",
                "source-layer": "admin",
                "filter": ["all", ["==", "admin_level", 2], ["==", "disputed", 0], ["==", "maritime", 0]],
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": {
                        "base": 1,
                        "stops": [[4, 0.5], [16, 2]]
                    },
                    "line-opacity": 0.75
                }
            }, {
                "id": "admin_level_maritime",
                "type": "line",
                "source": "mapbox",
                "source-layer": "admin",
                "minzoom": 5,
                "filter": ["all", ["==", "maritime", 1]],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "@water",
                    "line-opacity": "@admin-opacity",
                    "line-dasharray": "@state_dash",
                    "line-width": "@admin_level_3_width"
                }
            }, {
                "id": "street",
                "type": "line",
                "source": "mapbox",
                "source-layer": "road",
                "minzoom": 14,
                "maxzoom": 18.1,
                "filter": ["all", ["!=", "class", "path"], ["==", "$type", "LineString"]],
                "layout": {
                    "line-cap": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": {
                        "base": 1,
                        "stops": [[12, 0], [16, 3]]
                    },
                    "line-opacity": "@road-opacity"
                }
            }, {
                "id": "motorway_link",
                "type": "line",
                "source": "mapbox",
                "source-layer": "road",
                "maxzoom": 12,
                "filter": ["all", ["==", "class", "motorway_link"]],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": {
                        "stops": [[6, 0.5], [12, 1]]
                    },
                    "line-opacity": 0.6
                }
            }, {
                "id": "bridge_line_motorway",
                "type": "line",
                "source": "mapbox",
                "source-layer": "bridge",
                "maxzoom": 12,
                "filter": ["all", ["in", "class", "motorway"]],
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": 5,
                    "line-opacity": "@highway-opacity"
                }
            }, {
                "id": "motorway_line",
                "type": "line",
                "source": "mapbox",
                "source-layer": "road",
                "minzoom": 6,
                "maxzoom": 12,
                "filter": ["all", ["==", "class", "motorway"]],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": {
                        "base": 1,
                        "stops": [[6, 0.5], [12, 1]]
                    },
                    "line-opacity": 0.6
                }
            }, {
                "id": "street_bridge",
                "type": "line",
                "source": "mapbox",
                "source-layer": "bridge",
                "minzoom": 14,
                "maxzoom": 18.1,
                "filter": ["all", ["!=", "class", "path"], ["==", "$type", "LineString"]],
                "layout": {
                    "line-cap": "round"
                },
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": {
                        "base": 1,
                        "stops": [[12, 0], [16, 3]]
                    },
                    "line-opacity": "@road-opacity"
                }
            }, {
                "id": "bridge_street",
                "type": "line",
                "source": "mapbox",
                "source-layer": "bridge",
                "minzoom": 14,
                "maxzoom": 18.1,
                "filter": ["all", ["in", "class", "main", "street", "street_limited"]],
                "paint": {
                    "line-opacity": 0
                },
                "paint.labels": {
                    "line-color": "white",
                    "line-width": {
                        "stops": [[12, 0], [16, 3]]
                    },
                    "line-opacity": "@road-opacity"
                }
            }, {
                "id": "contour",
                "type": "line",
                "source": "Mapbox Terrain V2",
                "source-layer": "contour",
                "minzoom": 0,
                "maxzoom": 22,
                "filter": ["all", ["==", "$type", "Polygon"]],
                "layout": {},
                "paint": {
                    "line-opacity": 0
                },
                "paint.contours": {
                    "line-color": "#00fcdc",
                    "line-opacity": 0.5,
                    "line-dasharray": [1, 1],
                    "line-width": 1.75
                }
            }, {
                "id": "contour_fifth",
                "type": "line",
                "source": "Mapbox Terrain V2",
                "source-layer": "contour",
                "minzoom": 0,
                "maxzoom": 22,
                "filter": ["all", ["==", "$type", "Polygon"], ["==", "index", 5]],
                "layout": {},
                "paint": {
                    "line-opacity": 0
                },
                "paint.contours": {
                    "line-color": "#00fcdc",
                    "line-opacity": 0.75,
                    "line-width": 1
                }
            }, {
                "id": "marine_label_1arge",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "marine_label",
                "filter": ["all", ["==", "$type", "Point"], ["==", "labelrank", 1]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "@sans_ital",
                    "text-max-size": 30,
                    "text-letter-spacing": 0.4,
                    "text-line-height": 1.8
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "@water_label",
                    "text-size": 20,
                    "text-opacity": 0.4
                }
            }, {
                "id": "marine_label_medium",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "marine_label",
                "filter": ["all", ["==", "$type", "Point"], ["in", "labelrank", 2, 3, 4, 5]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "@sans_ital",
                    "text-max-size": 30,
                    "text-letter-spacing": 0.3,
                    "text-line-height": 1.5,
                    "text-max-width": 6
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "@water_label",
                    "text-size": {
                        "base": 1,
                        "stops": [[3, 15], [8, 20]]
                    },
                    "text-opacity": 0.4
                }
            }, {
                "id": "marine_label_small",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "marine_label",
                "filter": ["all", ["==", "$type", "Point"], ["in", "labelrank", 6, 7]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "@sans_ital",
                    "text-max-width": 20,
                    "text-letter-spacing": 0.2,
                    "text-line-height": 1.8
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "@water_label",
                    "text-size": 22,
                    "text-opacity": 0.3
                }
            }, {
                "id": "country_label",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "country_label",
                "filter": ["all", ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "@sans_bd",
                    "text-transform": "uppercase",
                    "text-max-size": 26,
                    "text-max-width": 4,
                    "text-letter-spacing": 0.2
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "white",
                    "text-opacity": 0.7,
                    "text-halo-color": "black",
                    "text-halo-width": 0,
                    "text-size": {
                        "stops": [[2, 8], [4, 18]]
                    }
                }
            }, {
                "id": "state_label",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "state_label",
                "filter": ["all", ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "@sans_bd",
                    "text-max-size": 12,
                    "text-max-width": 18,
                    "text-transform": "uppercase",
                    "text-letter-spacing": 0.2
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "white",
                    "text-opacity": 0.5,
                    "text-size": {
                        "stops": [[4, 12], [9, 28]]
                    }
                }
            }, {
                "id": "place_label_city_big",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "place_label",
                "filter": ["all", ["==", "type", "city"], ["in", "localrank", 0, 1], ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "Open Sans Bold,  Arial Unicode MS Bold",
                    "text-max-size": 26,
                    "icon-image": "dot.sdf",
                    "text-padding": 20,
                    "text-letter-spacing": 0.05,
                    "text-max-width": 5,
                    "text-line-height": 1.2
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-size": {
                        "base": 1,
                        "stops": [[6, 14], [18, 40]]
                    },
                    "text-color": "white",
                    "icon-halo-color": "black",
                    "icon-halo-width": 1,
                    "text-opacity": 0.9,
                    "text-translate": {
                        "stops": [[5.99, [0, 13]], [6, [0, 0]]],
                        "base": 1
                    },
                    "icon-color": "#fff",
                    "text-halo-color": "@halo",
                    "icon-size": 0.5,
                    "text-halo-width": {
                        "base": 1,
                        "stops": [[6, 1], [20, 2.5]]
                    },
                    "icon-opacity": {
                        "base": 1,
                        "stops": [[5.9, 1], [6, 0]]
                    }
                }
            }, {
                "id": "place_label_city_medium",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "place_label",
                "filter": ["all", ["==", "type", "city"], ["in", "localrank", 3, 4, 5, 2], ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "Open Sans Semibold,  Arial Unicode MS Bold",
                    "text-max-size": 8,
                    "text-padding": 20,
                    "text-max-width": 5,
                    "icon-image": "dot.sdf",
                    "text-anchor": "top"
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-size": {
                        "base": 1,
                        "stops": [[8, 12], [18, 24]]
                    },
                    "text-color": "white",
                    "icon-halo-color": "black",
                    "icon-halo-width": 0.75,
                    "text-opacity": 0.9,
                    "text-translate": [0, 3.5],
                    "icon-color": "#fff",
                    "text-halo-color": "@halo",
                    "icon-size": 0.4,
                    "text-halo-width": 1
                }
            }, {
                "id": "place_label_city_small",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "place_label",
                "filter": ["all", ["==", "type", "city"], ["in", "localrank", 6, 7, 8, 9], ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "Open Sans Semibold,  Arial Unicode MS Bold",
                    "text-max-size": 8,
                    "text-max-width": 18,
                    "text-padding": 20,
                    "text-letter-spacing": 0.1
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "white",
                    "text-halo-color": "@halo",
                    "text-size": {
                        "base": 1,
                        "stops": [[8, 10], [18, 30]]
                    },
                    "text-halo-width": 1,
                    "text-opacity": 0.9
                }
            }, {
                "id": "place_label_town",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "place_label",
                "filter": ["all", ["==", "type", "town"], ["in", "scalerank", 1, 2, 3], ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "@sans_bd",
                    "text-max-size": 8,
                    "text-max-width": 18
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "white",
                    "text-halo-color": "@halo",
                    "text-size": {
                        "base": 1,
                        "stops": [[4, 8], [20, 26]]
                    },
                    "text-halo-width": 1,
                    "text-opacity": 0.9
                }
            }, {
                "id": "place_label_neighbourhood_hamlet",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "place_label",
                "filter": ["all", ["in", "type", "neighbourhood", "hamlet"], ["==", "$type", "Point"]],
                "layout": {
                    "text-field": "{name_en}",
                    "text-font": "Open Sans Semibold Italic,  Arial Unicode MS Bold",
                    "text-max-width": 8,
                    "text-letter-spacing": 0.25,
                    "text-padding": 50
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "white",
                    "text-halo-color": "@halo",
                    "text-size": {
                        "base": 1,
                        "stops": [[12, 10], [16, 24]]
                    },
                    "text-halo-width": 1.5,
                    "text-halo-blur": 1,
                    "text-opacity": 0.8
                }
            }, {
                "id": "street_label",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "road_label",
                "filter": ["all", ["==", "$type", "LineString"]],
                "layout": {
                    "text-font": "Open Sans Semibold Italic,   Arial Unicode MS Bold",
                    "text-field": "@name",
                    "text-max-size": 13,
                    "symbol-placement": "line",
                    "text-transform": "none",
                    "text-letter-spacing": 0.15
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-opacity": 1,
                    "text-color": "white",
                    "text-halo-color": "black",
                    "text-halo-width": 1,
                    "text-size": {
                        "stops": [[15, 12], [20, 18]]
                    },
                    "text-halo-blur": 1.75
                }
            }, {
                "id": "poi_label_big",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "poi_label",
                "minzoom": 6,
                "filter": ["all", ["<=", "localrank", 2], ["==", "$type", "Point"], ["in", "maki", "park", "airfield", "golf", "cemetery", "garden"]],
                "layout": {
                    "text-field": "{name}",
                    "text-padding": 60,
                    "text-font": "@sans_ital",
                    "text-max-size": 12,
                    "text-max-width": 6,
                    "text-anchor": "top",
                    "text-letter-spacing": 0.1
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "white",
                    "text-size": {
                        "stops": [[13, 12], [16, 18]]
                    },
                    "text-halo-color": "#333",
                    "text-halo-width": 1.5,
                    "icon-size": 3.5,
                    "icon-color": "#fff",
                    "text-opacity": 0.9
                }
            }, {
                "id": "poi_label_dot",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "poi_label",
                "minzoom": 6,
                "filter": ["all", ["<=", "localrank", 2], ["==", "$type", "Point"], ["in", "maki", "school", "museum", "hospital", "monument", "library", "embassy", "college"]],
                "layout": {
                    "text-line-height": 1.1,
                    "icon-image": "dot.sdf",
                    "text-max-size": 12,
                    "text-font": "@sans_ital",
                    "text-padding": 12,
                    "text-offset": [0, 0.3],
                    "text-anchor": "top",
                    "text-field": "{name}",
                    "text-letter-spacing": 0.05,
                    "text-max-width": 6,
                    "icon-max-size": 1
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-size": {
                        "stops": [[10, 8], [16, 16]]
                    },
                    "text-color": "white",
                    "icon-halo-blur": 0.75,
                    "icon-halo-color": "black",
                    "icon-halo-width": 0.75,
                    "text-opacity": 0.9,
                    "text-translate": [0, 3],
                    "icon-color": "#fff",
                    "text-halo-color": "#333",
                    "icon-size": 0.5,
                    "text-halo-width": 1.25
                }
            }, {
                "id": "food/retail_label",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "poi_label",
                "minzoom": 0,
                "maxzoom": 22,
                "filter": ["all", ["in", "maki", "restaurant", "fast-food", "bar", "music", "grocery", "shop", "cinema"]],
                "layout": {},
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {}
            }, {
                "id": "waterway_label",
                "type": "symbol",
                "source": "mapbox",
                "source-layer": "waterway_label",
                "minzoom": 0,
                "maxzoom": 22,
                "layout": {
                    "text-field": "{name}",
                    "symbol-placement": "line",
                    "text-letter-spacing": 0.1,
                    "text-transform": "none",
                    "text-max-angle": 30,
                    "text-font": "Open Sans Semibold Italic,  Arial Unicode MS Regular"
                },
                "paint": {
                    "text-opacity": 0
                },
                "paint.labels": {
                    "text-color": "@water_label",
                    "text-halo-width": 1,
                    "text-halo-color": "black",
                    "text-size": {
                        "base": 1,
                        "stops": [[12, 12], [20, 18]]
                    },
                    "text-opacity": 0.75
                }
            }, {
                "id": "contour_label",
                "type": "symbol",
                "source": "Mapbox Terrain V2",
                "source-layer": "contour",
                "minzoom": 0,
                "maxzoom": 22,
                "filter": ["all", ["==", "$type", "Polygon"], ["==", "index", 5]],
                "layout": {
                    "symbol-placement": "line",
                    "text-field": "{ele}",
                    "text-font": "Open Sans Regular,   Arial Unicode MS Regular",
                    "text-letter-spacing": 0,
                    "text-line-height": 1.6,
                    "text-max-angle": 10,
                    "text-rotation-alignment": "map"
                },
                "paint": {
                    "text-size": 0
                },
                "paint.contours": {
                    "text-opacity": 1,
                    "text-halo-blur": 0,
                    "text-size": 12,
                    "text-halo-width": 1,
                    "text-halo-color": "#333",
                    "text-color": "#00fcdc"
                }
            }]
    };
}
