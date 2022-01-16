import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/snowflake-melt'


const IcebergMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="iceberg-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="iceberglocation-icon" />
        </div>
        
    )
}

export default IcebergMarker
