export function ICGCMap() {
    return {
        "version": 8,
        "name": "ICGC",
        "metadata": {},
        "center": [
            1.537786,
            41.837539
        ],
        "zoom": 12,
        "bearing": 0,
        "pitch": 0,
        "sources": {
            "openmaptiles": {
                "type": "vector",
                "url": "https://geoserveis.icgc.cat/contextmaps/basemap.json"
            }
        },
        "sprite": "https://geoserveis.icgc.cat/contextmaps/sprites/sprite@1",
        "glyphs": "https://geoserveis.icgc.cat/contextmaps/glyphs/{fontstack}/{range}.pbf",
        "layers": [
            {
                "id": "background",
                "type": "background",
                "paint": {
                    "background-color": "#f8f4f0"
                }
            },
            {
                "id": "landcover-glacier",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landcover",
                "filter": [
                    "==",
                    "subclass",
                    "glacier"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "#fff",
                    "fill-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                0,
                                0.9
                            ],
                            [
                                10,
                                0.3
                            ]
                        ]
                    }
                }
            },
            {
                "id": "landuse-residential",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "==",
                    "class",
                    "residential"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": {
                        "base": 1,
                        "stops": [
                            [
                                12,
                                "hsla(30, 19%, 90%, 0.4)"
                            ],
                            [
                                16,
                                "hsla(30, 19%, 90%, 0.2)"
                            ]
                        ]
                    }
                }
            },
            {
                "id": "landuse-commercial",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Polygon"
                    ],
                    [
                        "==",
                        "class",
                        "commercial"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "hsla(0, 60%, 87%, 0.23)"
                }
            },
            {
                "id": "landuse-industrial",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Polygon"
                    ],
                    [
                        "==",
                        "class",
                        "industrial"
                    ]
                ],
                "paint": {
                    "fill-color": "hsla(49, 100%, 88%, 0.34)"
                }
            },
            {
                "id": "park-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "park",
                "filter": [
                    "==",
                    "$type",
                    "Polygon"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "#d8e8c8",
                    "fill-opacity": {
                        "base": 1.8,
                        "stops": [
                            [
                                9,
                                0.5
                            ],
                            [
                                12,
                                0.2
                            ]
                        ]
                    }
                }
            },
            {
                "id": "park-outline-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "park",
                "filter": [
                    "==",
                    "$type",
                    "Polygon"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": {
                        "base": 1,
                        "stops": [
                            [
                                6,
                                "hsla(96, 40%, 49%, 0.36)"
                            ],
                            [
                                8,
                                "hsla(96, 40%, 49%, 0.66)"
                            ]
                        ]
                    },
                    "line-dasharray": [
                        3,
                        3
                    ]
                }
            },
            {
                "id": "landuse-cemetery",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "==",
                    "class",
                    "cemetery"
                ],
                "paint": {
                    "fill-color": "#e0e4dd"
                }
            },
            {
                "id": "landuse-hospital",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "==",
                    "class",
                    "hospital"
                ],
                "paint": {
                    "fill-color": "#fde"
                }
            },
            {
                "id": "landuse-school",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "==",
                    "class",
                    "school"
                ],
                "paint": {
                    "fill-color": "#f0e8f8"
                }
            },
            {
                "id": "landuse-railway",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landuse",
                "filter": [
                    "==",
                    "class",
                    "railway"
                ],
                "paint": {
                    "fill-color": "hsla(30, 19%, 90%, 0.4)"
                }
            },
            {
                "id": "landcover-wood-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landcover",
                "filter": [
                    "==",
                    "class",
                    "wood"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "#6a4",
                    "fill-opacity": 0.1,
                    "fill-outline-color": "hsla(0, 0%, 0%, 0.03)",
                    "fill-antialias": {
                        "base": 1,
                        "stops": [
                            [
                                0,
                                false
                            ],
                            [
                                9,
                                true
                            ]
                        ]
                    }
                }
            },
            {
                "id": "landcover-grass-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849388993.3071"
                },
                "source": "openmaptiles",
                "source-layer": "landcover",
                "filter": [
                    "==",
                    "class",
                    "grass"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "#d8e8c8",
                    "fill-opacity": 1
                }
            },
            {
                "id": "waterway-other-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "waterway",
                "filter": [
                    "!in",
                    "class",
                    "canal",
                    "river",
                    "stream"
                ],
                "layout": {
                    "line-cap": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "#a0c8f0",
                    "line-width": {
                        "base": 1.3,
                        "stops": [
                            [
                                13,
                                0.5
                            ],
                            [
                                20,
                                2
                            ]
                        ]
                    }
                }
            },
            {
                "id": "waterway-stream-canal-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "waterway",
                "filter": [
                    "in",
                    "class",
                    "canal",
                    "stream"
                ],
                "layout": {
                    "line-cap": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "#a0c8f0",
                    "line-width": {
                        "base": 1.3,
                        "stops": [
                            [
                                13,
                                0.5
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "waterway-river-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "waterway",
                "filter": [
                    "==",
                    "class",
                    "river"
                ],
                "layout": {
                    "line-cap": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "#a0c8f0",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                0.8
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "water-offset-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "water",
                "maxzoom": 8,
                "filter": [
                    "==",
                    "$type",
                    "Polygon"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-opacity": 1,
                    "fill-color": "#a0c8f0",
                    "fill-translate": {
                        "base": 1,
                        "stops": [
                            [
                                6,
                                [
                                    2,
                                    0
                                ]
                            ],
                            [
                                8,
                                [
                                    0,
                                    0
                                ]
                            ]
                        ]
                    }
                }
            },
            {
                "id": "water-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "water",
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "rgba(195, 229, 229, 1)"
                }
            },
            {
                "id": "water-pattern-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "water",
                "layout": {
                    "visibility": "none"
                },
                "paint": {
                    "fill-translate": [
                        0,
                        2.5
                    ],
                    "fill-pattern": "wave"
                }
            },
            {
                "id": "landcover-ice-shelf",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849382550.77"
                },
                "source": "openmaptiles",
                "source-layer": "landcover",
                "filter": [
                    "==",
                    "subclass",
                    "ice_shelf"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "#fff",
                    "fill-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                0,
                                0.9
                            ],
                            [
                                10,
                                0.3
                            ]
                        ]
                    }
                }
            },
            {
                "id": "building-industrial",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849364238.8171"
                },
                "source": "openmaptiles",
                "source-layer": "building",
                "filter": [
                    "all",
                    [
                        "==",
                        "building",
                        "industrial"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": {
                        "base": 1,
                        "stops": [
                            [
                                15.5,
                                "rgba(217, 190, 204, 1)"
                            ],
                            [
                                16,
                                "rgba(217, 195, 204, 1)"
                            ]
                        ]
                    },
                    "fill-antialias": true
                }
            },
            {
                "id": "building-top-industrial",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849364238.8171"
                },
                "source": "openmaptiles",
                "source-layer": "building",
                "minzoom": 13,
                "maxzoom": 24,
                "filter": [
                    "all",
                    [
                        "==",
                        "building",
                        "industrial"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-translate": {
                        "base": 1,
                        "stops": [
                            [
                                14,
                                [
                                    0,
                                    0
                                ]
                            ],
                            [
                                16,
                                [
                                    -2.5,
                                    -2.5
                                ]
                            ]
                        ]
                    },
                    "fill-outline-color": "rgba(166, 153, 204, 1)",
                    "fill-color": "rgba(192, 169, 211, 1)",
                    "fill-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                0
                            ],
                            [
                                16,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "building-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849364238.8171"
                },
                "source": "openmaptiles",
                "source-layer": "building",
                "filter": [
                    "all",
                    [
                        "!=",
                        "building",
                        "industrial"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": {
                        "base": 1,
                        "stops": [
                            [
                                15.5,
                                "rgba(216, 210, 197, 1)"
                            ],
                            [
                                16,
                                "rgba(191, 191, 191, 1)"
                            ]
                        ]
                    },
                    "fill-antialias": true
                }
            },
            {
                "id": "building-top-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849364238.8171"
                },
                "source": "openmaptiles",
                "source-layer": "building",
                "minzoom": 13,
                "maxzoom": 24,
                "filter": [
                    "all",
                    [
                        "!=",
                        "building",
                        "industrial"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-translate": {
                        "base": 1,
                        "stops": [
                            [
                                14,
                                [
                                    0,
                                    0
                                ]
                            ],
                            [
                                16,
                                [
                                    -2.5,
                                    -2.5
                                ]
                            ]
                        ]
                    },
                    "fill-outline-color": "rgba(204, 191, 191, 1)",
                    "fill-color": "rgba(230, 223, 217, 1)",
                    "fill-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                0
                            ],
                            [
                                16,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-service-track-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "service",
                        "track"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#cfcdca",
                    "line-dasharray": [
                        0.5,
                        0.25
                    ],
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                15,
                                1
                            ],
                            [
                                16,
                                4
                            ],
                            [
                                20,
                                11
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-minor-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "minor"
                    ]
                ],
                "layout": {
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(178, 178, 178, 1)",
                    "line-opacity": {
                        "stops": [
                            [
                                14,
                                1
                            ]
                        ]
                    },
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                13,
                                0
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                15
                            ]
                        ]
                    },
                    "line-dasharray": [
                        0.5,
                        0.25
                    ]
                }
            },
            {
                "id": "tunnel-tertiary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "tertiary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(217, 191, 102, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8,
                                1.5
                            ],
                            [
                                20,
                                17
                            ]
                        ]
                    },
                    "line-dasharray": [
                        0.5,
                        0.25
                    ]
                }
            },
            {
                "id": "tunnel-secondary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "secondary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(64, 166, 64, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8,
                                1.5
                            ],
                            [
                                20,
                                17
                            ]
                        ]
                    },
                    "line-dasharray": [
                        0.5,
                        0.25
                    ]
                }
            },
            {
                "id": "tunnel-primary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 7,
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "primary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(166, 38, 25, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                22
                            ]
                        ]
                    },
                    "line-dasharray": [
                        0.5,
                        0.25
                    ]
                }
            },
            {
                "id": "tunnel-trunk-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "trunk"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(0, 102, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                5,
                                0.4
                            ],
                            [
                                6,
                                0.6
                            ],
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                20
                            ]
                        ]
                    },
                    "line-dasharray": [
                        0.5,
                        0.25
                    ]
                }
            },
            {
                "id": "tunnel-motorway-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(0, 102, 255, 1)",
                    "line-dasharray": [
                        0.5,
                        0.25
                    ],
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                5,
                                0.4
                            ],
                            [
                                6,
                                0.6
                            ],
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                20
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-path-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "brunnel",
                            "tunnel"
                        ],
                        [
                            "==",
                            "class",
                            "path"
                        ]
                    ]
                ],
                "paint": {
                    "line-color": "#cba",
                    "line-dasharray": [
                        1.5,
                        0.75
                    ],
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                15,
                                1.2
                            ],
                            [
                                20,
                                4
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-service-track-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "service",
                        "track"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#fff",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                15.5,
                                0
                            ],
                            [
                                16,
                                2
                            ],
                            [
                                20,
                                7.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-minor-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "minor"
                    ]
                ],
                "layout": {
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(242, 230, 204, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                13,
                                0
                            ],
                            [
                                14,
                                2.5
                            ],
                            [
                                20,
                                11.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-tertiary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "tertiary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(242, 217, 128, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.5
                            ],
                            [
                                20,
                                10
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-secondary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "secondary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(102, 204, 102, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.5
                            ],
                            [
                                20,
                                10
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-primary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 7,
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "primary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(217, 89, 77, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                7,
                                0.5
                            ],
                            [
                                20,
                                18
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-trunk-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "trunk"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.2
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-motorway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.3
                            ],
                            [
                                20,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "tunnel-railway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "!=",
                        "d_categori",
                        "Tren de Gran Velocitat en tunel"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14,
                                0.4
                            ],
                            [
                                15,
                                0.75
                            ],
                            [
                                20,
                                2
                            ]
                        ]
                    },
                    "line-dasharray": [
                        2,
                        2
                    ]
                }
            },
            {
                "id": "tunnel-railway-TGV",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849354174.1904"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "==",
                        "d_categori",
                        "Tren de Gran Velocitat en tunel"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(201, 133, 242, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    },
                    "line-dasharray": [
                        2,
                        2
                    ]
                }
            },
            {
                "id": "ferry",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "in",
                        "class",
                        "ferry"
                    ]
                ],
                "layout": {
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(108, 159, 182, 1)",
                    "line-width": 1.1,
                    "line-dasharray": [
                        2,
                        2
                    ]
                }
            },
            {
                "id": "aeroway-taxiway-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "aeroway",
                "minzoom": 12,
                "filter": [
                    "all",
                    [
                        "in",
                        "class",
                        "taxiway"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(153, 153, 153, 1)",
                    "line-width": {
                        "base": 1.5,
                        "stops": [
                            [
                                11,
                                2
                            ],
                            [
                                17,
                                12
                            ]
                        ]
                    },
                    "line-opacity": 1
                }
            },
            {
                "id": "aeroway-runway-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "aeroway",
                "minzoom": 12,
                "filter": [
                    "all",
                    [
                        "in",
                        "class",
                        "runway"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(153, 153, 153, 1)",
                    "line-width": {
                        "base": 1.5,
                        "stops": [
                            [
                                11,
                                5
                            ],
                            [
                                17,
                                55
                            ]
                        ]
                    },
                    "line-opacity": 1
                }
            },
            {
                "id": "aeroway-area-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "aeroway",
                "minzoom": 4,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Polygon"
                    ],
                    [
                        "in",
                        "class",
                        "runway",
                        "taxiway"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                0
                            ],
                            [
                                14,
                                1
                            ]
                        ]
                    },
                    "fill-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "aeroway-taxiway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "aeroway",
                "minzoom": 4,
                "filter": [
                    "all",
                    [
                        "in",
                        "class",
                        "taxiway"
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.5,
                        "stops": [
                            [
                                11,
                                1
                            ],
                            [
                                17,
                                10
                            ]
                        ]
                    },
                    "line-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                11,
                                0
                            ],
                            [
                                12,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "aeroway-runway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "aeroway",
                "minzoom": 4,
                "filter": [
                    "all",
                    [
                        "in",
                        "class",
                        "runway"
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.5,
                        "stops": [
                            [
                                11,
                                4
                            ],
                            [
                                17,
                                50
                            ]
                        ]
                    },
                    "line-opacity": {
                        "base": 1,
                        "stops": [
                            [
                                11,
                                0
                            ],
                            [
                                12,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-area-copy",
                "type": "fill",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "==",
                    "$type",
                    "Polygon"
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "fill-color": "hsla(0, 0%, 89%, 0.56)",
                    "fill-outline-color": "#cfcdca",
                    "fill-opacity": 0.9,
                    "fill-antialias": false
                }
            },
            {
                "id": "highway-motorway-link-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 12,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway_link"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#e9ac77",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                1
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                15
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-link-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 13,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk_link"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "#e9ac77",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                1
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                15
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-minor-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!=",
                            "brunnel",
                            "tunnel"
                        ],
                        [
                            "in",
                            "class",
                            "minor",
                            "service",
                            "track"
                        ]
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(178, 178, 178, 1)",
                    "line-opacity": {
                        "stops": [
                            [
                                14,
                                1
                            ]
                        ]
                    },
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                13,
                                0
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                15
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-tertiary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "tertiary"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(217, 191, 102, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8,
                                1.5
                            ],
                            [
                                20,
                                17
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-secondary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "secondary"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(64, 166, 64, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8,
                                1.5
                            ],
                            [
                                20,
                                17
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-primary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 5,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "primary"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(166, 38, 25, 1)",
                    "line-opacity": {
                        "stops": [
                            [
                                7,
                                0
                            ],
                            [
                                8,
                                1
                            ]
                        ]
                    },
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                7,
                                0
                            ],
                            [
                                8,
                                0.6
                            ],
                            [
                                9,
                                1.5
                            ],
                            [
                                20,
                                22
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-trunk-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 5,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "trunk"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(0, 102, 255, 1)",
                    "line-opacity": {
                        "stops": [
                            [
                                5,
                                0
                            ],
                            [
                                6,
                                1
                            ]
                        ]
                    },
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                4,
                                0
                            ],
                            [
                                5,
                                0.2
                            ],
                            [
                                6,
                                0.4
                            ],
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                14
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-motorway-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 4,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(0, 102, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                4,
                                0
                            ],
                            [
                                5,
                                0.4
                            ],
                            [
                                6,
                                0.6
                            ],
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                22
                            ]
                        ]
                    },
                    "line-opacity": {
                        "stops": [
                            [
                                4,
                                0
                            ],
                            [
                                5,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-path-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!in",
                            "brunnel",
                            "bridge",
                            "tunnel"
                        ],
                        [
                            "==",
                            "class",
                            "path"
                        ]
                    ]
                ],
                "paint": {
                    "line-color": "#cba",
                    "line-dasharray": [
                        1.5,
                        0.75
                    ],
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                15,
                                1.2
                            ],
                            [
                                20,
                                4
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-motorway-link-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 12,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway_link"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#fc8",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12.5,
                                0
                            ],
                            [
                                13,
                                1.5
                            ],
                            [
                                14,
                                2.5
                            ],
                            [
                                20,
                                11.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-link-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 13,
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk_link"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "#fea",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12.5,
                                0
                            ],
                            [
                                13,
                                1.5
                            ],
                            [
                                14,
                                2.5
                            ],
                            [
                                20,
                                11.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-minor-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!=",
                            "brunnel",
                            "tunnel"
                        ],
                        [
                            "in",
                            "class",
                            "minor",
                            "service",
                            "track"
                        ]
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(242, 230, 204, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                13,
                                0.5
                            ],
                            [
                                14,
                                2.5
                            ],
                            [
                                20,
                                11.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-tertiary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "tertiary"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(242, 217, 153, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                8,
                                0.5
                            ],
                            [
                                20,
                                13
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-secondary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "!in",
                        "brunnel",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "in",
                        "class",
                        "secondary"
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(102, 204, 102, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                8,
                                0.5
                            ],
                            [
                                20,
                                13
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-primary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!in",
                            "brunnel",
                            "bridge",
                            "tunnel"
                        ],
                        [
                            "in",
                            "class",
                            "primary"
                        ]
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(217, 89, 77, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8.5,
                                0
                            ],
                            [
                                9,
                                0.5
                            ],
                            [
                                20,
                                18
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-trunk-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!in",
                            "brunnel",
                            "bridge",
                            "tunnel"
                        ],
                        [
                            "in",
                            "class",
                            "trunk"
                        ]
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.2
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "highway-motorway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 5,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!in",
                            "brunnel",
                            "bridge",
                            "tunnel"
                        ],
                        [
                            "==",
                            "class",
                            "motorway"
                        ]
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round",
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.3
                            ],
                            [
                                20,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-transit-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "class",
                            "transit"
                        ],
                        [
                            "!in",
                            "brunnel",
                            "tunnel"
                        ]
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14,
                                0.4
                            ],
                            [
                                20,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-transit-hatching-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "class",
                            "transit"
                        ],
                        [
                            "!in",
                            "brunnel",
                            "tunnel"
                        ]
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-dasharray": [
                        0.2,
                        8
                    ],
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14.5,
                                0
                            ],
                            [
                                15,
                                2
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-service-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!=",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "class",
                            "rail"
                        ],
                        [
                            "!=",
                            "d_categori",
                            "Tren de Gran Velocitat"
                        ],
                        [
                            "!=",
                            "d_categori",
                            "Tren de Gran Velocitat prioritari"
                        ],
                        [
                            "has",
                            "service"
                        ]
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(217, 153, 255, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14,
                                0.4
                            ],
                            [
                                20,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-service-hatching-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!=",
                        "brunnel",
                        "tunnel"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "class",
                            "rail"
                        ],
                        [
                            "!=",
                            "d_categori",
                            "Tren de Gran Velocitat"
                        ],
                        [
                            "has",
                            "service"
                        ]
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(217, 153, 255, 1)",
                    "line-dasharray": [
                        0.2,
                        8
                    ],
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14.5,
                                0
                            ],
                            [
                                15,
                                2
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-TGV",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "d_categori",
                        "Tren de Gran Velocitat"
                    ],
                    [
                        "!=",
                        "brunel",
                        "tunnel"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(201, 133, 242, 1)",
                    "line-width": {
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-TGV-hatching",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "d_categori",
                        "Tren de Gran Velocitat"
                    ],
                    [
                        "!=",
                        "brunel",
                        "tunnel"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(166, 23, 212, 1)",
                    "line-dasharray": [
                        0.2,
                        8
                    ],
                    "line-width": {
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!has",
                            "service"
                        ],
                        [
                            "!in",
                            "brunnel",
                            "bridge",
                            "tunnel"
                        ],
                        [
                            "==",
                            "class",
                            "rail"
                        ]
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14,
                                0.4
                            ],
                            [
                                15,
                                0.75
                            ],
                            [
                                20,
                                2
                            ]
                        ]
                    }
                }
            },
            {
                "id": "railway-hatching-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849345966.4436"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "!has",
                            "service"
                        ],
                        [
                            "!in",
                            "brunnel",
                            "bridge",
                            "tunnel"
                        ],
                        [
                            "==",
                            "class",
                            "rail"
                        ]
                    ]
                ],
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-dasharray": [
                        0.2,
                        8
                    ],
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14.5,
                                0
                            ],
                            [
                                15,
                                3
                            ],
                            [
                                20,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-motorway-link-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "motorway_link"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#e9ac77",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                1
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                15
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-link-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk_link"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#e9ac77",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                1
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                15
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-tertiary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "tertiary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(217, 191, 102, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8,
                                1.5
                            ],
                            [
                                20,
                                22
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-secondary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "secondary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(64, 166, 64, 1)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                8,
                                1.5
                            ],
                            [
                                20,
                                22
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-primary-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "primary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(166, 38, 25, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                5,
                                0.4
                            ],
                            [
                                6,
                                0.6
                            ],
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                26
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-trunk-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "trunk"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(0, 102, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                4,
                                0
                            ],
                            [
                                5,
                                0.2
                            ],
                            [
                                6,
                                0.4
                            ],
                            [
                                7,
                                0.8
                            ],
                            [
                                20,
                                16
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-motorway-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(0, 102, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                5,
                                0.4
                            ],
                            [
                                6,
                                0.6
                            ],
                            [
                                7,
                                1.5
                            ],
                            [
                                20,
                                22
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-path-casing-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "brunnel",
                            "bridge"
                        ],
                        [
                            "==",
                            "class",
                            "path"
                        ]
                    ]
                ],
                "paint": {
                    "line-color": "#f8f4f0",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                15,
                                1.2
                            ],
                            [
                                20,
                                18
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-path-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "all",
                        [
                            "==",
                            "brunnel",
                            "bridge"
                        ],
                        [
                            "==",
                            "class",
                            "path"
                        ]
                    ]
                ],
                "paint": {
                    "line-color": "#cba",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                15,
                                1.2
                            ],
                            [
                                20,
                                4
                            ]
                        ]
                    },
                    "line-dasharray": [
                        1.5,
                        0.75
                    ]
                }
            },
            {
                "id": "bridge-motorway-link-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "motorway_link"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#fc8",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12.5,
                                0
                            ],
                            [
                                13,
                                1.5
                            ],
                            [
                                14,
                                2.5
                            ],
                            [
                                20,
                                11.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-link-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk_link"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#fea",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12.5,
                                0
                            ],
                            [
                                13,
                                1.5
                            ],
                            [
                                14,
                                2.5
                            ],
                            [
                                20,
                                11.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-tertiary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "tertiary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(242, 217, 128, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.5
                            ],
                            [
                                20,
                                13
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-secondary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "secondary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(102, 204, 102, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.5
                            ],
                            [
                                20,
                                13
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-primary-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "primary"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(217, 89, 77, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.5
                            ],
                            [
                                20,
                                18
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-trunk-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "in",
                        "class",
                        "trunk"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.2
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-motorway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(255, 255, 255, 1)",
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                6.5,
                                0
                            ],
                            [
                                7,
                                0.3
                            ],
                            [
                                20,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-railway-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "!=",
                        "d_categori",
                        "Tren de Gran Velocitat prioritari"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14,
                                0.4
                            ],
                            [
                                15,
                                0.75
                            ],
                            [
                                20,
                                2
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-railway-hatching-copy",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "!=",
                        "d_categori",
                        "Tren de Gran Velocitat prioritari"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(191, 115, 255, 1)",
                    "line-dasharray": [
                        0.2,
                        8
                    ],
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                14.5,
                                0
                            ],
                            [
                                15,
                                3
                            ],
                            [
                                20,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-railway-TGV",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "==",
                        "d_categori",
                        "Tren de Gran Velocitat prioritari"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(201, 133, 242, 1)",
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "bridge-railway-TGV-hatching",
                "type": "line",
                "metadata": {
                    "mapbox:group": "1444849334699.1902"
                },
                "source": "openmaptiles",
                "source-layer": "transportation",
                "filter": [
                    "all",
                    [
                        "==",
                        "brunnel",
                        "bridge"
                    ],
                    [
                        "==",
                        "class",
                        "rail"
                    ],
                    [
                        "==",
                        "d_categori",
                        "Tren de Gran Velocitat prioritari"
                    ]
                ],
                "layout": {
                    "visibility": "visible"
                },
                "paint": {
                    "line-color": "rgba(166, 23, 212, 1)",
                    "line-dasharray": [
                        0.2,
                        8
                    ],
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                14,
                                4
                            ],
                            [
                                20,
                                6
                            ]
                        ]
                    }
                }
            },
            {
                "id": "cablecar-copy",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 13,
                "filter": [
                    "==",
                    "class",
                    "cable_car"
                ],
                "layout": {
                    "visibility": "visible",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "hsl(0, 0%, 70%)",
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                11,
                                1
                            ],
                            [
                                19,
                                2.5
                            ]
                        ]
                    }
                }
            },
            {
                "id": "cablecar-dash-copy",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "transportation",
                "minzoom": 13,
                "filter": [
                    "==",
                    "class",
                    "cable_car"
                ],
                "layout": {
                    "visibility": "visible",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": "hsl(0, 0%, 70%)",
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                11,
                                3
                            ],
                            [
                                19,
                                5.5
                            ]
                        ]
                    },
                    "line-dasharray": [
                        2,
                        3
                    ]
                }
            },
            {
                "id": "boundary-land-level-4",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "boundary",
                "filter": [
                    "all",
                    [
                        "in",
                        "admin_level",
                        4,
                        6,
                        8,
                        7
                    ],
                    [
                        "!=",
                        "maritime",
                        1
                    ]
                ],
                "layout": {
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "#9e9cab",
                    "line-dasharray": [
                        3,
                        1,
                        1,
                        1
                    ],
                    "line-width": {
                        "base": 1.4,
                        "stops": [
                            [
                                4,
                                0.4
                            ],
                            [
                                5,
                                1
                            ],
                            [
                                12,
                                3
                            ]
                        ]
                    }
                }
            },
            {
                "id": "boundary-land-level-2",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "boundary",
                "filter": [
                    "all",
                    [
                        "==",
                        "admin_level",
                        2
                    ],
                    [
                        "!=",
                        "maritime",
                        1
                    ],
                    [
                        "!=",
                        "disputed",
                        1
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "hsl(248, 7%, 66%)",
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                0,
                                0.6
                            ],
                            [
                                4,
                                1.4
                            ],
                            [
                                5,
                                2
                            ],
                            [
                                12,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "boundary-land-disputed",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "boundary",
                "filter": [
                    "all",
                    [
                        "!=",
                        "maritime",
                        1
                    ],
                    [
                        "==",
                        "disputed",
                        1
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "hsl(248, 7%, 70%)",
                    "line-dasharray": [
                        1,
                        3
                    ],
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                0,
                                0.6
                            ],
                            [
                                4,
                                1.4
                            ],
                            [
                                5,
                                2
                            ],
                            [
                                12,
                                8
                            ]
                        ]
                    }
                }
            },
            {
                "id": "boundary-water",
                "type": "line",
                "source": "openmaptiles",
                "source-layer": "boundary",
                "filter": [
                    "all",
                    [
                        "in",
                        "admin_level",
                        2,
                        4
                    ],
                    [
                        "==",
                        "maritime",
                        1
                    ]
                ],
                "layout": {
                    "line-cap": "round",
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "rgba(64, 166, 217, 1)",
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                0,
                                0.3
                            ],
                            [
                                4,
                                0.6
                            ],
                            [
                                5,
                                1.2
                            ],
                            [
                                12,
                                2
                            ]
                        ]
                    },
                    "line-opacity": {
                        "stops": [
                            [
                                6,
                                0.6
                            ],
                            [
                                10,
                                1
                            ]
                        ]
                    }
                }
            },
            {
                "id": "water-name-lakeline-platja",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "water_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "in",
                        "codigeo",
                        51800
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-size": {
                        "stops": [
                            [
                                10,
                                14
                            ],
                            [
                                11,
                                17
                            ],
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                14
                            ],
                            [
                                14,
                                12
                            ]
                        ]
                    },
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-max-width": 8,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "line",
                    "symbol-spacing": 350,
                    "text-letter-spacing": 0.2,
                    "visibility": "visible",
                    "text-anchor": "bottom"
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 1.5,
                    "text-halo-color": "rgba(255,255,255,0.7)",
                    "icon-color": "rgba(51, 51, 51, 1)"
                }
            },
            {
                "id": "water-name-lakeline-z12",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "water_name",
                "minzoom": 7,
                "maxzoom": 24,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!=",
                        "codigeo",
                        51008
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-size": {
                        "stops": [
                            [
                                10,
                                14
                            ],
                            [
                                11,
                                17
                            ],
                            [
                                12,
                                10
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                12
                            ]
                        ]
                    },
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-max-width": 0.1,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "line",
                    "symbol-spacing": 350,
                    "text-letter-spacing": 0.1,
                    "visibility": "visible",
                    "text-anchor": "bottom",
                    "text-allow-overlap": true
                },
                "paint": {
                    "text-color": "rgba(0, 110, 255, 1)",
                    "text-halo-width": 1.5,
                    "text-halo-color": "rgba(255,255,255,0.7)"
                }
            },
            {
                "id": "water-name-ocean-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "water_name",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "==",
                        "class",
                        "ocean"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-size": 14,
                    "text-field": "{name:latin}{name}",
                    "text-max-width": 5,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "point",
                    "symbol-spacing": 350,
                    "text-letter-spacing": 0.2,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "#74aee9",
                    "text-halo-width": 1.5,
                    "text-halo-color": "rgba(255,255,255,0.7)"
                }
            },
            {
                "id": "water-name-other-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "water_name",
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "!in",
                        "class",
                        "ocean"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-size": {
                        "stops": [
                            [
                                0,
                                10
                            ],
                            [
                                6,
                                14
                            ]
                        ]
                    },
                    "text-field": "{name}{name:latin}{name:nonlatin}",
                    "text-max-width": 5,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "point",
                    "symbol-spacing": 350,
                    "text-letter-spacing": 0.2,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "#74aee9",
                    "text-halo-width": 1.5,
                    "text-halo-color": "rgba(255,255,255,0.7)"
                }
            },
            {
                "id": "poi-level-3",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 16,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        ">=",
                        "rank",
                        25
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{class}_11",
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "visibility": "none"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-level-2-circle",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 14,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "<=",
                        "rank",
                        24
                    ],
                    [
                        ">=",
                        "rank",
                        15
                    ],
                    [
                        "in",
                        "classicgc",
                        "circle_stroked",
                        "circle"
                    ],
                    [
                        "!=",
                        "name",
                        "Dipòsit"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{classicgc}_11",
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "visibility": "none",
                    "icon-size": {
                        "stops": [
                            [
                                12,
                                0.65
                            ],
                            [
                                13,
                                0.75
                            ]
                        ]
                    }
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-notop",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 12,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "in",
                        "classicgc",
                        "vista_panoramica",
                        "cemetery",
                        "esglesia"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{classicgc}_11",
                    "text-field": "",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "visibility": "visible",
                    "text-allow-overlap": true
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-level-2",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 14,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "<=",
                        "rank",
                        24
                    ],
                    [
                        ">=",
                        "rank",
                        15
                    ],
                    [
                        "!in",
                        "classicgc",
                        "circle_stroked",
                        "circle",
                        "vista_panoramica",
                        "esglesia"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{classicgc}_11",
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-level-1-pics",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 10,
                "maxzoom": 16,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "<=",
                        "rank",
                        14
                    ],
                    [
                        "has",
                        "name"
                    ],
                    [
                        "==",
                        "classicgc",
                        "pic"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{class}_11",
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "visibility": "visible",
                    "icon-size": 1,
                    "text-allow-overlap": false
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-level-1-circle",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 12,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "<=",
                        "rank",
                        14
                    ],
                    [
                        "has",
                        "name"
                    ],
                    [
                        "!in",
                        "classicgc",
                        "pic",
                        "circle_stroked"
                    ],
                    [
                        "in",
                        "class",
                        "circle"
                    ],
                    [
                        "!in",
                        "name",
                        "Dipòsit"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{classicgc}_11",
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": {
                        "stops": [
                            [
                                12,
                                12
                            ],
                            [
                                13,
                                11
                            ]
                        ]
                    },
                    "text-max-width": 9,
                    "visibility": "visible",
                    "icon-size": {
                        "stops": [
                            [
                                12,
                                0.6
                            ],
                            [
                                13,
                                0.75
                            ]
                        ]
                    }
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff",
                    "icon-color": "rgba(51, 51, 51, 1)"
                }
            },
            {
                "id": "poi-level-1",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 12,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "<=",
                        "rank",
                        14
                    ],
                    [
                        "has",
                        "name"
                    ],
                    [
                        "!in",
                        "classicgc",
                        "pic",
                        "circle",
                        "circle_stroked",
                        "vista_panoramica",
                        "cemetery",
                        "esglesia"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{classicgc}_11",
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "visibility": "visible",
                    "icon-size": 1,
                    "text-allow-overlap": false
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-railway",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 13,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "Point"
                    ],
                    [
                        "has",
                        "name"
                    ],
                    [
                        "==",
                        "class",
                        "railway"
                    ],
                    [
                        "==",
                        "subclass",
                        "station"
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-anchor": "top",
                    "icon-image": "{classicgc}_11",
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-offset": [
                        0,
                        0.6
                    ],
                    "text-size": 12,
                    "text-max-width": 9,
                    "icon-optional": false,
                    "icon-ignore-placement": false,
                    "icon-allow-overlap": false,
                    "text-ignore-placement": false,
                    "text-allow-overlap": false,
                    "text-optional": true,
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#666",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "highway-name-path-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 12,
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "path"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "text-size": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                13
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-field": "{name:latin} {name:nonlatin}",
                    "symbol-placement": "line",
                    "text-rotation-alignment": "map",
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-color": "#f8f4f0",
                    "text-color": "hsl(30, 23%, 62%)",
                    "text-halo-width": 0.5,
                    "icon-color": "rgba(0, 0, 0, 1)"
                }
            },
            {
                "id": "highway-name-minor-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 10,
                "maxzoom": 24,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "in",
                        "class",
                        "minor",
                        "service",
                        "track"
                    ]
                ],
                "layout": {
                    "text-size": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                10
                            ],
                            [
                                14,
                                10
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "symbol-placement": "line",
                    "text-rotation-alignment": "map",
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#765",
                    "text-halo-width": 1
                }
            },
            {
                "id": "highway-name-major-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 10,
                "filter": [
                    "all",
                    [
                        "in",
                        "class",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "!has",
                        "mtc25m"
                    ]
                ],
                "layout": {
                    "text-size": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                12
                            ],
                            [
                                14,
                                13
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-field": "{name:latin} {name:nonlatin}",
                    "symbol-placement": "line",
                    "text-rotation-alignment": "map",
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "#765",
                    "text-halo-width": 1
                }
            },
            {
                "id": "highway-shield-local",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        ">",
                        "ref_length",
                        4
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        "!has",
                        "mtc25m"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_21",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "visible"
                },
                "paint": {}
            },
            {
                "id": "highway-shield-trunk-vermell",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "trunk"
                    ],
                    [
                        "!in",
                        "name",
                        "A-14",
                        "A-2",
                        "A-22",
                        "A-26",
                        "A-27",
                        "A-7",
                        "A-9",
                        "AP-2",
                        "AP-7",
                        "B-10",
                        "B-20",
                        "B-23",
                        "B-24",
                        "C-13",
                        "C-15",
                        "C-16",
                        "C-17",
                        "C-25",
                        "C-31",
                        "C-31C",
                        "C31D",
                        "C-32",
                        "C-32B",
                        "C-33",
                        "C-35",
                        "C-58",
                        "C-58C",
                        "C-60",
                        "LL-11",
                        "LL-12",
                        "N-20",
                        "T-11"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_6",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{mtc25m}{class}{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)"
                }
            },
            {
                "id": "highway-shield-trunk-blau",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "trunk"
                    ],
                    [
                        "in",
                        "name",
                        "A-14",
                        "A-2",
                        "A-22",
                        "A-26",
                        "A-27",
                        "A-7",
                        "A-9",
                        "AP-2",
                        "AP-7",
                        "B-10",
                        "B-20",
                        "B-23",
                        "B-24",
                        "C-13",
                        "C-15",
                        "C-16",
                        "C-17",
                        "C-25",
                        "C-31",
                        "C-31C",
                        "C31D",
                        "C-32",
                        "C-32B",
                        "C-33",
                        "C-35",
                        "C-58",
                        "C-58C",
                        "C-60",
                        "LL-11",
                        "LL-12",
                        "N-20",
                        "T-11"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_20",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-verd",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "in",
                        "name",
                        "C-37"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_25",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-vermelles-copy-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "in",
                        "name",
                        "C-12",
                        "C-12B",
                        "C-13",
                        "C-14",
                        "C-15",
                        "C-16",
                        "C-28",
                        "C-31B",
                        "C-35",
                        "C-37",
                        "C-42",
                        "C-43",
                        "C-44",
                        "C-55",
                        "C-51",
                        "C-53",
                        "C-55",
                        "C-58",
                        "C-59",
                        "C-63",
                        "C-66",
                        "N-II",
                        "N-145",
                        "N-141",
                        "N-141c",
                        "N-152a",
                        "N-154",
                        "N-235",
                        "N-240",
                        "N-260",
                        "N-340",
                        "N-420",
                        "N-230"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_23",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-vermelles-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "in",
                        "name",
                        "C-12",
                        "C-12B",
                        "C-13",
                        "C-14",
                        "C-15",
                        "C-15B",
                        "C-16",
                        "C-28",
                        "C-31B",
                        "C-35",
                        "C-37",
                        "C-42",
                        "C-43",
                        "C-44",
                        "C-55",
                        "C-51",
                        "C-53",
                        "C-55",
                        "C-58",
                        "C-59",
                        "C-63",
                        "C-66",
                        "N-II",
                        "N-145",
                        "N-141",
                        "N-141c",
                        "N-152a",
                        "N-154",
                        "N-235",
                        "N-240",
                        "N-260",
                        "N-340",
                        "N-420",
                        "N-230"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_23",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-tertiary",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "tertiary"
                    ],
                    [
                        "!in",
                        "name",
                        "C-12",
                        "C-12B",
                        "C-13",
                        "C-14",
                        "C-15",
                        "C-15B",
                        "C-16",
                        "C-28",
                        "C-31",
                        "C-31B",
                        "C-320a",
                        " C-35",
                        "C-37",
                        "C-42",
                        "C-43",
                        "C-44",
                        "C-51",
                        "C-53",
                        "C-55",
                        "C-58",
                        "C-59",
                        "C-63",
                        "C-66",
                        "N-II",
                        "N-IIa",
                        "N-145",
                        "N-141",
                        "N-141c",
                        "N-152a",
                        "N-154",
                        "N-235",
                        "N-240",
                        "N-260",
                        "N-340",
                        "N-420",
                        "N-230"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_21",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(0, 0, 0, 1)"
                }
            },
            {
                "id": "highway-shield-secondary",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "secondary"
                    ],
                    [
                        "!in",
                        "name",
                        "C-12",
                        "C-12B",
                        "C-13",
                        "C-14",
                        "C-15",
                        "C-15B",
                        "C-16",
                        "C-28",
                        "C-31B",
                        "C-35",
                        "C-37",
                        "C-42",
                        "C-43",
                        "C-44",
                        "C-51",
                        "C-53",
                        "C-55",
                        "C-58",
                        "C-59",
                        "C-63",
                        "C-66",
                        "N-II",
                        "N-145",
                        "N-141",
                        "N-141c",
                        "N-152a",
                        "N-154",
                        "N-235",
                        "N-240",
                        "N-260",
                        "N-340",
                        "N-420",
                        "N-230"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_25",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "visible"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-primary",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "primary"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_22",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "visible"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-blau-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "!in",
                        "name",
                        "C-12",
                        "C-12B",
                        "C-13",
                        "C-14",
                        "C-15",
                        "C-16",
                        "C-28",
                        "C-31B",
                        "C-35",
                        "C-37",
                        "C-42",
                        "C-43",
                        "C-44",
                        "C-55",
                        "C-51",
                        "C-53",
                        "C-55",
                        "C-58",
                        "C-59",
                        "C-63",
                        "C-66",
                        "N-II",
                        "N-145",
                        "N-141",
                        "N-141c",
                        "N-152a",
                        "N-154",
                        "N-235",
                        "N-240",
                        "N-260",
                        "N-340",
                        "N-420",
                        "N-230"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_20",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "none"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-motorway-mtc25m-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "in",
                        "colorcaixa",
                        21
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_6_{colorcaixa}",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{name}"
                            ],
                            [
                                10,
                                "{name}"
                            ]
                        ]
                    },
                    "visibility": "visible"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(0, 0, 0, 1)"
                }
            },
            {
                "id": "highway-shield-motorway-mtc25m",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "in",
                        "colorcaixa",
                        20,
                        22,
                        23,
                        25
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_6_{colorcaixa}",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{name}"
                            ],
                            [
                                10,
                                "{name}"
                            ]
                        ]
                    },
                    "visibility": "visible"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            {
                "id": "highway-shield-motorway",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 9,
                "filter": [
                    "all",
                    [
                        "<=",
                        "ref_length",
                        6
                    ],
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "!in",
                        "network",
                        "us-interstate",
                        "us-highway",
                        "us-state"
                    ],
                    [
                        ">",
                        "ref_length",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ],
                "layout": {
                    "text-size": 9,
                    "icon-image": "road_4_20",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "symbol-placement": {
                        "base": 1,
                        "stops": [
                            [
                                10,
                                "point"
                            ],
                            [
                                11,
                                "line"
                            ]
                        ]
                    },
                    "text-rotation-alignment": "viewport",
                    "icon-size": 0.75,
                    "text-field": {
                        "stops": [
                            [
                                6,
                                "{ref}"
                            ],
                            [
                                10,
                                "{ref}"
                            ]
                        ]
                    },
                    "visibility": "visible"
                },
                "paint": {
                    "icon-color": "#000000",
                    "icon-halo-color": "rgba(0, 0, 0, 0)",
                    "text-color": "rgba(255, 255, 255, 1)"
                }
            },
            // {
            //   "id": "airport-label-major-copy",
            //   "type": "symbol",
            //   "source": "openmaptiles",
            //   "source-layer": "aerodrome_label",
            //   "minzoom": 10,
            //   "filter": [
            //     "all",
            //     [
            //       "has",
            //       "iata"
            //     ]
            //   ],
            //   "layout": {
            //     "text-padding": 2,
            //     "text-font": [
            //       "FiraSans-Italic"
            //     ],
            //     "text-anchor": "top",
            //     "icon-image": "airport_11",
            //     "text-field": "{name:latin}{name:nonlatin}",
            //     "text-offset": [
            //       0,
            //       0.6
            //     ],
            //     "text-size": 10,
            //     "text-max-width": 9,
            //     "visibility": "visible",
            //     "icon-size": 1,
            //     "text-optional": true
            //   },
            //   "paint": {
            //     "text-halo-blur": 0.5,
            //     "text-color": "#666",
            //     "text-halo-width": 1,
            //     "text-halo-color": "#ffffff"
            //   }
            // },
            {
                "id": "place-other-tot",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent"
                    ],
                    [
                        "==",
                        "codigeo",
                        1
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                16,
                                14
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-field": "{zoom}{codigeo}{name:latin}{name:nonlatin}",
                    "text-transform": "uppercase",
                    "text-max-width": 9,
                    "visibility": "none"
                },
                "paint": {
                    "text-color": "rgba(12, 19, 92, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-blau",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent"
                    ],
                    [
                        ">=",
                        "codigeo",
                        60000
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                10
                            ],
                            [
                                11,
                                10
                            ],
                            [
                                16,
                                14
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-transform": "uppercase",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(63, 92, 12, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-illa-cap",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent"
                    ],
                    [
                        ">",
                        "codigeo",
                        51000
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                10
                            ],
                            [
                                15,
                                14
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-transform": "uppercase",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(10, 10, 10, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-verd",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "maxzoom": 19,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent"
                    ],
                    [
                        "in",
                        "codigeo",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                10
                            ],
                            [
                                15,
                                14
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-transform": "uppercase",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(63, 92, 12, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-gris-italic-51",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713",
                    "maputnik:comment": "zoom 11 a 15 de color gris"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        ">",
                        "codigeo",
                        51000
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                10
                            ],
                            [
                                13,
                                12
                            ],
                            [
                                16,
                                11
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-transform": "none",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(67, 64, 64, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-gris-italic",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713",
                    "maputnik:comment": "zoom 11 a 15 de color gris"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        "!in",
                        "codigeo",
                        50201,
                        50202,
                        "",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        ">=",
                        "codigeo",
                        20000
                    ],
                    [
                        "<",
                        "codigeo",
                        51000
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                10
                            ],
                            [
                                15,
                                11
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-transform": "none",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(67, 64, 64, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-gris10m",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713",
                    "maputnik:comment": "zoom 11 a 15 de color gris"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 11,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        ">",
                        "zoom",
                        10
                    ],
                    [
                        "!in",
                        "codigeo",
                        1,
                        10000,
                        10100
                    ],
                    [
                        ">",
                        "codigeo",
                        10000
                    ],
                    [
                        "<",
                        "codigeo",
                        20000
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                10
                            ],
                            [
                                15,
                                11
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{codgieo}{name:latin}{name:nonlatin}",
                    "text-transform": "none",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(67, 64, 64, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-gris-italic-serveis",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713",
                    "maputnik:comment": "zoom 11 a 15 de color gris"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 11,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        ">",
                        "zoom",
                        10
                    ],
                    [
                        "!in",
                        "codigeo",
                        10201,
                        51001,
                        51002,
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        ">=",
                        "codigeo",
                        20000
                    ],
                    [
                        "<",
                        "codigeo",
                        30000
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                10
                            ],
                            [
                                15,
                                11
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{codgieo}{name:latin}{name:nonlatin}",
                    "text-transform": "none",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(67, 64, 64, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-other-burdeus",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713",
                    "maputnik:comment": "zoom 11 a 15 de color gris"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 11,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "!in",
                        "class",
                        "city",
                        "town",
                        "village",
                        "country",
                        "continent",
                        40810,
                        40824,
                        40825,
                        40826,
                        40827
                    ],
                    [
                        ">",
                        "zoom",
                        10
                    ],
                    [
                        "==",
                        "codigeo",
                        10201
                    ]
                ],
                "layout": {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                10
                            ],
                            [
                                15,
                                11
                            ]
                        ]
                    },
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-transform": "uppercase",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "#633",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-village-gris-1",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "maxzoom": 14,
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "village"
                    ],
                    [
                        ">=",
                        "zoom",
                        10
                    ],
                    [
                        "==",
                        "codigeo",
                        1
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                10
                            ],
                            [
                                11,
                                11
                            ],
                            [
                                13,
                                12
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible",
                    "text-allow-overlap": false,
                    "text-justify": "center"
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-village-gris",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "maxzoom": 14,
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "village"
                    ],
                    [
                        ">=",
                        "zoom",
                        10
                    ],
                    [
                        "!=",
                        "codigeo",
                        1
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                12
                            ],
                            [
                                11,
                                12
                            ],
                            [
                                13,
                                14
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible",
                    "text-allow-overlap": {
                        "stops": [
                            [
                                10,
                                false
                            ],
                            [
                                13,
                                true
                            ]
                        ]
                    }
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-town",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 10,
                "maxzoom": 24,
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "town"
                    ],
                    [
                        ">=",
                        "zoom",
                        10
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                12
                            ],
                            [
                                15,
                                24
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible",
                    "text-allow-overlap": {
                        "stops": [
                            [
                                10,
                                false
                            ],
                            [
                                11,
                                true
                            ]
                        ]
                    },
                    "text-line-height": {
                        "stops": [
                            [
                                10,
                                1.1
                            ],
                            [
                                12,
                                1.2
                            ]
                        ]
                    },
                    "text-optional": false
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-city-z9",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 9,
                "maxzoom": 24,
                "filter": [
                    "all",
                    [
                        "!=",
                        "capital",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ],
                    [
                        ">=",
                        "zoom",
                        9
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                9,
                                12
                            ],
                            [
                                10,
                                14
                            ],
                            [
                                12,
                                24
                            ]
                        ]
                    },
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible",
                    "text-transform": "uppercase",
                    "icon-allow-overlap": {
                        "stops": [
                            [
                                8,
                                false
                            ],
                            [
                                9,
                                true
                            ]
                        ]
                    },
                    "text-allow-overlap": true
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 0.9,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-city-z8",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 8,
                "filter": [
                    "all",
                    [
                        "!=",
                        "capital",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ],
                    [
                        "==",
                        "zoom",
                        8
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                7,
                                10
                            ],
                            [
                                10,
                                17
                            ],
                            [
                                11,
                                24
                            ]
                        ]
                    },
                    "text-field": "{name:latin}{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible",
                    "text-transform": "uppercase",
                    "icon-allow-overlap": false,
                    "text-allow-overlap": true
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 0.9,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-city-z7",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 7,
                "filter": [
                    "all",
                    [
                        "!=",
                        "capital",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ],
                    [
                        "==",
                        "zoom",
                        7
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                7,
                                12
                            ],
                            [
                                11,
                                24
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible",
                    "text-transform": "uppercase",
                    "text-keep-upright": true
                },
                "paint": {
                    "text-color": "rgba(51, 51, 51, 1)",
                    "text-halo-width": 0.9,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-city-capital",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "filter": [
                    "all",
                    [
                        "==",
                        "capital",
                        2
                    ],
                    [
                        "==",
                        "class",
                        "city"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Regular"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                7,
                                14
                            ],
                            [
                                11,
                                24
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "icon-image": "star_11",
                    "text-offset": [
                        0.4,
                        0
                    ],
                    "icon-size": 0.8,
                    "text-anchor": "left",
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "#333",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-country-other",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "country"
                    ],
                    [
                        ">=",
                        "rank",
                        3
                    ],
                    [
                        "!has",
                        "iso_a2"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Italic"
                    ],
                    "text-field": "{name:latin}",
                    "text-size": {
                        "stops": [
                            [
                                3,
                                11
                            ],
                            [
                                7,
                                17
                            ]
                        ]
                    },
                    "text-transform": "uppercase",
                    "text-max-width": 6.25,
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 1,
                    "text-color": "#334",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-country-3",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "country"
                    ],
                    [
                        ">=",
                        "rank",
                        3
                    ],
                    [
                        "has",
                        "iso_a2"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}",
                    "text-size": {
                        "stops": [
                            [
                                3,
                                11
                            ],
                            [
                                7,
                                17
                            ]
                        ]
                    },
                    "text-transform": "uppercase",
                    "text-max-width": 6.25,
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 1,
                    "text-color": "#334",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-country-2",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "country"
                    ],
                    [
                        "==",
                        "rank",
                        2
                    ],
                    [
                        "has",
                        "iso_a2"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}",
                    "text-size": {
                        "stops": [
                            [
                                2,
                                11
                            ],
                            [
                                5,
                                17
                            ]
                        ]
                    },
                    "text-transform": "uppercase",
                    "text-max-width": 6.25,
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 1,
                    "text-color": "#334",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-country-1",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "filter": [
                    "all",
                    [
                        "==",
                        "class",
                        "country"
                    ],
                    [
                        "==",
                        "rank",
                        1
                    ],
                    [
                        "has",
                        "iso_a2"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}",
                    "text-size": {
                        "stops": [
                            [
                                1,
                                11
                            ],
                            [
                                4,
                                17
                            ]
                        ]
                    },
                    "text-transform": "uppercase",
                    "text-max-width": 6.25,
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 1,
                    "text-color": "#334",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            },
            {
                "id": "place-continent",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "maxzoom": 1,
                "filter": [
                    "==",
                    "class",
                    "continent"
                ],
                "layout": {
                    "text-font": [
                        "FiraSans-Bold"
                    ],
                    "text-field": "{name:latin}",
                    "text-size": 14,
                    "text-max-width": 6.25,
                    "text-transform": "uppercase",
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 1,
                    "text-color": "#334",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255,255,255,0.8)"
                }
            }
        ],
        "id": "osm-bright"
    };
}
