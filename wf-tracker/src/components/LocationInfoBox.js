const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Information</h2>
            <ul>
    <li><font size="2.5"><strong>ID:</strong></font> { info.id }</li>
    <li><font size="2.5"><strong>Title:</strong></font> { info.title }</li>
    <li><font size="2.5"><strong>Date:</strong></font> { info.date }</li>
    <li><font size="2.5"><strong>Message:</strong></font> { info.message}</li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
