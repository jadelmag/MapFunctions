export function NightMap() {
    return {
        "version": 8,
        "name": "ICGC",
        "metadata": {
            "mapbox:type": "template",
            "mapbox:groups": {
                "1444849364238.8171": {
                    "collapsed": false,
                    "name": "Buildings"
                },
                "1444849354174.1904": {
                    "collapsed": true,
                    "name": "Tunnels"
                },
                "1444849388993.3071": {
                    "collapsed": false,
                    "name": "Land"
                },
                "1444849242106.713": {
                    "collapsed": false,
                    "name": "Places"
                },
                "1444849382550.77": {
                    "collapsed": false,
                    "name": "Water"
                },
                "1444849345966.4436": {
                    "collapsed": false,
                    "name": "Roads"
                },
                "1444849334699.1902": {
                    "collapsed": true,
                    "name": "Bridges"
                }
            },
            "mapbox:autocomposite": false,
            "openmaptiles:version": "3.x",
            "openmaptiles:mapbox:owner": "openmaptiles",
            "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
        },
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
                    "background-color": "hsl(215, 17%, 31%)"
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
                    "fill-color": "hsl(215, 17%, 31%)",
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
                                "hsla(170, 21%, 32%, 0.4)"
                            ],
                            [
                                16,
                                "hsla(170, 21%, 32%, 0.2)"
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
                    "fill-color": "hsla(170, 21%, 32%, 0.23)"
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
                    "fill-color": "hsla(170, 21%, 32%, 0.34)"
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
                    "fill-color": "hsl(170, 21%, 32%)",
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
                                "hsla(215, 17%, 35%, 0.36)"
                            ],
                            [
                                8,
                                "hsla(215, 17%, 35%, 0.66)"
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
                    "fill-color": "hsl(170, 21%, 32%)"
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
                    "fill-color": "hsl(170, 21%, 32%)"
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
                    "fill-color": "hsl(170, 21%, 32%)"
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
                    "fill-color": "hsla(170, 21%, 32%, 0.4)"
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
                    "fill-color": "hsl(170, 21%, 32%)",
                    "fill-opacity": 0.1,
                    "fill-outline-color": "hsla(197, 15%, 45%, 0.03)",
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
                    "fill-color": "hsl(170, 21%, 32%)",
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
                    "line-color": "hsl(197, 15%, 45%)",
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
                    "line-color": "hsl(197, 15%, 45%)",
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
                    "line-color": "hsl(197, 15%, 45%)",
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
                    "fill-color": "hsl(215, 17%, 31%)"
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
                    "fill-color": "hsl(197, 15%, 45%)",
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
                                "hsl(215, 11%, 23%)"
                            ],
                            [
                                16,
                                "hsl(215, 11%, 23%)"
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
                    "fill-color": "rgba(102, 108, 115, 1)",
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
                                "hsl(215, 11%, 23%)"
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
                    "fill-color": "hsl(215, 11%, 23%)",
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
                                12,
                                0
                            ],
                            [
                                12.5,
                                1
                            ]
                        ]
                    },
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                0.5
                            ],
                            [
                                13,
                                1
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
                                13.5,
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    ]
                ],
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
                    "fill-outline-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
                    "line-opacity": {
                        "stops": [
                            [
                                12,
                                0
                            ],
                            [
                                12.5,
                                1
                            ]
                        ]
                    },
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                12,
                                0.5
                            ],
                            [
                                13,
                                1
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": {
                        "stops": [
                            [
                                6,
                                "hsl(215, 36%, 59%)"
                            ],
                            [
                                8,
                                "hsl(215, 36%, 59%)"
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
                                2
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": "hsl(215, 9%, 20%)",
                    "line-opacity": 1,
                    "line-width": {
                        "base": 1.2,
                        "stops": [
                            [
                                13.5,
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
                    "line-color": "hsl(215, 20%, 42%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                                2
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                                4
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                                1
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
                        "all",
                        [
                            "==",
                            "class",
                            "rail"
                        ],
                        [
                            "has",
                            "service"
                        ]
                    ]
                ],
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
                        "all",
                        [
                            "==",
                            "class",
                            "rail"
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                                6
                            ]
                        ]
                    },
                    "line-pattern": "airfield_11"
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                    "line-color": "hsl(215, 36%, 59%)",
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
                                1
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
                    ]
                ],
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
                                4
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
                    "line-color": "rgba(99, 100, 103, 1)",
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
                "id": "waterway-name",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "waterway",
                "minzoom": 13,
                "filter": [
                    "all",
                    [
                        "==",
                        "$type",
                        "LineString"
                    ],
                    [
                        "has",
                        "name"
                    ]
                ],
                "layout": {
                    "text-font": [
                        "Noto Sans Italic"
                    ],
                    "text-size": 14,
                    "text-field": "{name:latin} {name:nonlatin}",
                    "text-max-width": 5,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "line",
                    "text-letter-spacing": 0.2,
                    "symbol-spacing": 350
                },
                "paint": {
                    "text-color": "#74aee9",
                    "text-halo-width": 1.5,
                    "text-halo-color": "rgba(255,255,255,0.7)"
                }
            },
            {
                "id": "water-name-lakeline-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "water_name",
                "filter": [
                    "==",
                    "$type",
                    "LineString"
                ],
                "layout": {
                    "text-font": [
                        "Noto Sans Italic"
                    ],
                    "text-size": 14,
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 5,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "line",
                    "symbol-spacing": 350,
                    "text-letter-spacing": 0.2,
                    "visibility": "visible",
                    "text-anchor": "bottom"
                },
                "paint": {
                    "text-color": "hsl(197, 15%, 45%)",
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
                        "Noto Sans Italic"
                    ],
                    "text-size": 14,
                    "text-field": "{name:latin}{name}",
                    "text-max-width": 5,
                    "text-rotation-alignment": "map",
                    "symbol-placement": "point",
                    "symbol-spacing": 350,
                    "text-letter-spacing": 0.2
                },
                "paint": {
                    "text-color": "hsl(197, 15%, 45%)",
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
                        "Noto Sans Italic"
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
                    "text-color": "hsl(197, 15%, 45%)",
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
                        "Noto Sans Regular"
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
                "id": "poi-level-2",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 15,
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
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "Noto Sans Regular"
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
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "rgba(18, 17, 17, 1)",
                    "text-halo-width": 1,
                    "text-halo-color": "#ffffff"
                }
            },
            {
                "id": "poi-level-1",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "poi",
                "minzoom": 14,
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
                    ]
                ],
                "layout": {
                    "text-padding": 2,
                    "text-font": [
                        "Noto Sans Regular"
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
                    "visibility": "visible"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "rgba(26, 26, 26, 1)",
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
                        "Noto Sans Regular"
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
                "minzoom": 15.5,
                "filter": [
                    "==",
                    "class",
                    "path"
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
                        "Noto Sans Regular"
                    ],
                    "text-field": "{name:latin} {name:nonlatin}",
                    "symbol-placement": "line",
                    "text-rotation-alignment": "map"
                },
                "paint": {
                    "text-halo-color": "#f8f4f0",
                    "text-color": "hsl(30, 23%, 62%)",
                    "text-halo-width": 0.5
                }
            },
            {
                "id": "highway-name-minor-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 13,
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
                                12
                            ],
                            [
                                14,
                                13
                            ]
                        ]
                    },
                    "text-font": [
                        "Noto Sans Regular"
                    ],
                    "text-field": "{name:latin}{name:nonlatin}",
                    "symbol-placement": "line",
                    "text-rotation-alignment": "map"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "rgba(228, 233, 241, 1)",
                    "text-halo-width": 1,
                    "text-halo-color": "rgba(63, 59, 59, 0)"
                }
            },
            {
                "id": "highway-name-major-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 12.2,
                "filter": [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "tertiary",
                    "trunk"
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
                        "Noto Sans Regular"
                    ],
                    "text-field": "{name:latin} {name:nonlatin}",
                    "symbol-placement": "line",
                    "text-rotation-alignment": "map"
                },
                "paint": {
                    "text-halo-blur": 0.5,
                    "text-color": "rgba(232, 217, 217, 1)",
                    "text-halo-width": 1,
                    "text-halo-color": "rgba(45, 42, 42, 0)"
                }
            },
            {
                "id": "highway-shield-copy",
                "type": "symbol",
                "source": "openmaptiles",
                "source-layer": "transportation_name",
                "minzoom": 8,
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
                    ]
                ],
                "layout": {
                    "text-size": 10,
                    "icon-image": "road_{ref_length}",
                    "icon-rotation-alignment": "viewport",
                    "symbol-spacing": 200,
                    "text-font": [
                        "Noto Sans Regular"
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
                    "icon-size": 1,
                    "text-field": "{ref}"
                },
                "paint": {}
            },
            {
                "id": "place-other",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "minzoom": 12,
                "maxzoom": 16,
                "filter": [
                    "!in",
                    "class",
                    "city",
                    "town",
                    "village",
                    "country",
                    "continent"
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
                                8
                            ]
                        ]
                    },
                    "text-font": [
                        "Noto Sans Bold"
                    ],
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-transform": "uppercase",
                    "text-max-width": 9,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(32, 31, 31, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(241, 234, 234, 0.8)"
                }
            },
            {
                "id": "place-village",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
                "filter": [
                    "==",
                    "class",
                    "village"
                ],
                "layout": {
                    "text-font": [
                        "Noto Sans Regular"
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
                                15
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(30, 28, 28, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(220, 201, 201, 0.8)"
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
                "filter": [
                    "==",
                    "class",
                    "town"
                ],
                "layout": {
                    "text-font": [
                        "Noto Sans Regular"
                    ],
                    "text-size": {
                        "base": 1.2,
                        "stops": [
                            [
                                10,
                                14
                            ],
                            [
                                15,
                                24
                            ]
                        ]
                    },
                    "text-field": "{name:latin}\n{name:nonlatin}",
                    "text-max-width": 8,
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(195, 236, 181, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(18, 17, 17, 0.8)"
                }
            },
            {
                "id": "place-city",
                "type": "symbol",
                "metadata": {
                    "mapbox:group": "1444849242106.713"
                },
                "source": "openmaptiles",
                "source-layer": "place",
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
                    ]
                ],
                "layout": {
                    "text-font": [
                        "Noto Sans Regular"
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
                    "visibility": "visible"
                },
                "paint": {
                    "text-color": "rgba(171, 199, 151, 1)",
                    "text-halo-width": 1.2,
                    "text-halo-color": "rgba(26, 25, 25, 0.8)"
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
                        "Noto Sans Regular"
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
                        "Noto Sans Italic"
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
                    "text-color": "rgba(71, 71, 90, 1)",
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
                        "Noto Sans Bold"
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
                        "Noto Sans Bold"
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
                        "Noto Sans Bold"
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
                        "Noto Sans Bold"
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
