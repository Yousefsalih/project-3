import './App.css';
import { useState } from 'react';
import axios from 'axios';
import EventResults from './EventResults'
import Form from './Form'
import Font from './index'
import gif from './giphy.gif';


function App() {

// API call
  const [event, setEvent] = useState([]);
  const [error, setError] = useState(false);

  const callApi = (city,startDate, endDate) => {
      axios({
          url: "https://app.ticketmaster.com/discovery/v2/events",
          method: "GET",
          dataResponse: "json",
          params: {
          apikey: "uresfuKyrYIVhF8lRGGj9EphAwlcgylk",
          city: city,
          startDateTime: `${startDate}T00:00:00Z`,
          endDateTime: `${endDate}T00:00:00Z`,
          size: 25,
          },
          }).then((res) =>{
              let results = res.data._embedded.events
              if (results.length > 0){
                  setEvent(res.data._embedded.events)
                  setError(false);
              }
          }).catch(error => {
                  setError(true);
                  setEvent([]);
              }
          );
  }

  const handleSubmit = (e, city, startDate, endDate) => {
    e.preventDefault();
    callApi(city, startDate, endDate);
};

// Header elements and the form
  return (
    <div className="wrapper">
      <header>
      <div className="gifHeader">
        <img src={gif} alt="City gif in the header" />
        </div>
        <h1 className="headerLogo">City Lights</h1>
        <p>Never miss out on the hottest events in your city!</p>
        </header>
        <Form getEvents={handleSubmit} />

{/* Condition for error message and results */}
      {error ? 
        <p>No events found in the selections above. Please search for a city within North America, Europe, or Australia. The greater the range of dates, the higher the chance of finding an event.</p> :
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