import axios from 'axios';
import { useEffect, useState } from 'react';

function API() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axios({
        url: "https://app.ticketmaster.com/discovery/v2/events",
        method: "GET",
        dataResponse: "json",
        params: {
            apikey: "uresfuKyrYIVhF8lRGGj9EphAwlcgylk",
            city: "Vancouver"
          // endDateTime: "2021-11-21",
          // keyword: "canucks"
        },
    }).then((res) =>{
        setEvent(res.data._embedded.events)
        console.log(res.data._embedded.events)
        })
    }, [])
};

    export default API