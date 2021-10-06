import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EventResults from './EventResults'
import Form from './Form'
import Font from './index'
import gif from './giphy.gif';
// import MapResults from './MapResults'


function App() {
  const [event, setEvent] = useState([]);
  const [error, setError] = useState(false);

  const callApi = (city,startDate, endDate, search) => {
      axios({
          url: "https://app.ticketmaster.com/discovery/v2/events",
          method: "GET",
          dataResponse: "json",
          params: {
          apikey: "uresfuKyrYIVhF8lRGGj9EphAwlcgylk",
          city: city,
          startDateTime: `${startDate}T00:00:00Z`,
          endDateTime: `${endDate}T00:00:00Z`,
          size: 50,
          },
          }).then((res) =>{
              let results = res.data._embedded.events
              if (results.length > 0){
                  setEvent(res.data._embedded.events)
                  console.log(results)
              }
          }).catch(error => {
                  setError(true);
                  setEvent([]);
              }
          );
  }

  const handleSubmit = (e, city, startDate, endDate, search) => {
    e.preventDefault();
    callApi(city, startDate, endDate, search);
};
  
  return (
    <div className="wrapper">
      <header>
      <div className="gifHeader">
        <img src={gif} alt="City gif" />
        </div>
        <h1 className="headerLogo">City Lights</h1>
        <p>Never miss out on the hottest events in your city!</p>
        </header>
        <Form getEvents={handleSubmit} />

      {error ? 
        <p>This is an error</p> :
        event.map((eachEvent)=>{
            return (
            <EventResults key={eachEvent.id}
            name={eachEvent.name}
            imagePath={eachEvent.images[0].url}
            venue={eachEvent._embedded.venues[0].name}
            date={eachEvent.dates.start.localDate}
            link={eachEvent.url}
            />
            );
        })
        }

        <footer>
          <p className="footerParagraph">Made by Yousef Salih at Juno College using data from the <a className="footerLink" href="https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/">Ticketmaster Discovery API</a></p>
        </footer>

    </div>
  );
}

export default App;