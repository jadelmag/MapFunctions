import { FullDarkMap, HibridMap, ICGCMap, NightMap, NoBaseMap, OSMMap, PositronMap, SatelliteMap } from '../maps/index.js';

export default class MapFunctions {
    constructor() {}
    
    createMap(base, target) {
        let lat = 39.4750;
        let lng = -0.3837;
        let zoom = 12;
        let myStyle = this.getBaseMap(base);
        let map = new mapboxgl.Map({
            container: String(target),
            style: myStyle,
            center: [lng, lat],
            zoom: zoom // starting zoom
        });
        this.addControls(map);
    }
    addControls(map) {
        this.navigationControl(map);
        this.addScaleControl(map);
        this.addLocationControl(map);
    }
    navigationControl(map) {
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');
    }
    addScaleControl(map) {
        var scale = new mapboxgl.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
        });
        map.addControl(scale);
    }
    addLocationControl(map) {
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
                timeout: 300
            },
            trackUserLocation: true
        }));
    }

    getBaseMap(name) {
        switch(name) {
            case 'nobase': return NoBaseMap();
            case 'openstreetmaps': return OSMMap();
            case 'fulldark': return FullDarkMap();
            case 'icgc': return ICGCMap();
            case 'positron': return PositronMap();
            case 'night': return NightMap();
            case 'hibrid': return HibridMap();
            case 'satellite': return SatelliteMap();
            default:
                return NoBaseMap();
        }
    }
}