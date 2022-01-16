import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/mountain'


const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="volcanolocation-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="volcanolocation-icon" />
        </div>
        
    )
}

export default VolcanoMarker
