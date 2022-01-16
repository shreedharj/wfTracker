import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'


const WildfireMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="wildfire-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="wildfirelocation-icon" />
        </div>
        
    )
}

export default WildfireMarker
