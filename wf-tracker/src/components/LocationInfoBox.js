const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Information</h2>
            <ul>
    <li><strong>ID:</strong> { info.id }</li>
    <li><strong>Title:</strong> { info.title }</li>
    <li><strong>Date:</strong> { info.date }</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
