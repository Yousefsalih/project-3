import qrCode from './qrCode.png';

//Event results after search
function EventResults(props) {
    return (
        <div className="resultStyle">
            <div className="leftSide">
                <h2>{props.name}</h2>
                <h3> Venue: {props.venue}</h3>
                <p className="resultParagraph">Date: {props.date} </p>
                <a href={props.link}>Link to purchase a ticket</a>
            </div> 
            <div className="qrCode">
                <img src={qrCode} alt="QR Code"/>
                </div>
            <div className="imageWrapper">
                <img src={props.imagePath} alt={props.name} /> 
            </div>
        </div>
    )
}

export default EventResults;
