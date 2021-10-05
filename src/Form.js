import { useState, useEffect } from "react";
import axios from 'axios';
import EventResults from './EventResults'

const Form = () => {
    const [event, setEvent] = useState([]);

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
            keyword: search
              // endDateTime: "2021-11-21",
              // keyword: "canucks"
            },
            }).then((res) =>{
                let results = res.data._embedded.events
                if (results.length > 0){
                    console.log(results)
                    setEvent(res.data._embedded.events)
                }
            }).catch(error => {
                if (error.response) {
                    console.log("No")
                } else if (error.request) {
                    console.log("maybe")
                } else {
                    console.log("Hi")
                    
                };
            });
    }


    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        callApi(city, startDate, endDate, search);
    };

    const setCityFunction = (e) => {
        setCity(e.target.value)
    };

    const setStartDateFunction = (e) => {
        setStartDate(e.target.value)
    };

    const setEndDateFunction = (e) => {
        setEndDate(e.target.value)
    };

    const setSearchFunction = (e) => {
        setSearch(e.target.value)
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <legend>Search for an event in your City:</legend>
        <label for="search">Search</label>
        <input type="text" name="search" placeholder="Search for Artist, Venue, Genre" value={search} onChange={setSearchFunction}>
        </input>
        <label for="city">City</label>
        <input type="text" name="city" placeholder="Please enter a City" required="true" value={city} onChange={setCityFunction}>
        </input>
        <label for="startDate">Start Date</label>
        <input type="date" name="startDate" placeholder="Please enter a start date" required="true" value={startDate} onChange={setStartDateFunction}>
        </input>
        <label for="endDate">End Date</label>
        <input type="date" name="endDate" placeholder="Please enter an end date" required="true" value={endDate} onChange={setEndDateFunction}> 
        </input>
        <button type="submit">Search</button>
        </form>

        {
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
        }
        </div>
        )}

export default Form;