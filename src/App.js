import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EventResults from './EventResults'
import Form from './Form'
import Font from './index'
import gif from './giphy.gif';
// import MapResults from './MapResults'


function App() {
  // const [event, setEvent] = useState([]);

  // useEffect(() => {
  //   axios({
  //     url: "https://app.ticketmaster.com/discovery/v2/events",
  //     method: "GET",
  //     dataResponse: "json",
  //     params: {
  //       apikey: "uresfuKyrYIVhF8lRGGj9EphAwlcgylk",
  //       city: "Vancouver"
  //       // endDateTime: "2021-11-21",
  //       // keyword: "canucks"
  //     },
  //   }).then((res) =>{
  //     setEvent(res.data._embedded.events)
  //     console.log(res.data._embedded.events)
  //   })
  // }, [])
  
  return (
    <div className="App">
      <header className="wrapper">
      <div className="gifHeader">
        <img src={gif} alt="City gif" />
        </div>
        <h1 className="headerLogo">City Lights</h1>

        <p>Never miss out on the hottest events in your city!</p>
        <Form />


    {/* {
      const userInput = () =>{
        
      }
    } */}


{/* Show Results on Page */}
        {/* {
          event.map((eachEvent)=>{
            return (
              <EventResults key={eachEvent.id}
              name={eachEvent.name}
              imagePath={eachEvent.images[0].url}
              venue={eachEvent._embedded.venues[0].name}
              link={eachEvent.url}
              // currency={eachEvent.currency} Not populating
              // minPrice={eachEvent.priceRanges[0].min}
              // maxPrice={eachEvent.priceRanges[0].max} 
              />
            );
          })
        } */}
          <footer>
          <p>Made by Yousef Salih</p>
          <p className="footerParagraph">Created at Juno College</p>
        </footer>
      </header>
    </div>
  );
}

export default App;