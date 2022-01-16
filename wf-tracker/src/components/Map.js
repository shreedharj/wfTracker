import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import WildfireMarker from './WildfireMarker'
import VolcanoMarker from './VolcanoMarker'
import StormMarker from './StormMarker'
import IcebergMarker from './IcebergMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENTS_VOLCANOES = 12;
const NATURAL_EVENTS_STORM = 10;
const NATURAL_EVENTS_ICEBERG = 15;



const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <WildfireMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date })} />
        }

        if(ev.categories[0].id === NATURAL_EVENTS_VOLCANOES) {
            return <VolcanoMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date })} />
        }

        if(ev.categories[0].id === NATURAL_EVENTS_STORM) {
            return <StormMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date})} />
        }

        if(ev.categories[0].id === NATURAL_EVENTS_ICEBERG) {
            return <IcebergMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCJI6vVJIC67UGk2zO_l9tKDLzh-_552RY' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 4
}

export default Map
