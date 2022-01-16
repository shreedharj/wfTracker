import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/cloud-alert'


const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="storm-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="stormlocation-icon" />
        </div>
        
    )
}

export default StormMarker
