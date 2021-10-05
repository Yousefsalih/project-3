import EventResults from './EventResults'
import API from './API'

function mapResults(event) {
        <API/>
        event.map((eachEvent)=>{
            return (
            <EventResults key={eachEvent.id}
            name={eachEvent.name}
            imagePath={eachEvent.images[0].url}
            venue={eachEvent._embedded.venues[0].name}
            link={eachEvent.url}
            // currency={eachEvent.currency}
            // minPrice={eachEvent.priceRanges[0].min}
            // maxPrice={eachEvent.priceRanges[0].max} 
            />
            );
        })
    }

export default MapResults