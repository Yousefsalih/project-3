import { useState } from "react";

// Form conditions and values
const Form = (props) => {
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const setCityFunction = (e) => {
        setCity(e.target.value)
    };

    const setStartDateFunction = (e) => {
        setStartDate(e.target.value)
    };

    const setEndDateFunction = (e) => {
        setEndDate(e.target.value)
    };

    return (
        <div>
        <form onSubmit={(e) => props.getEvents(e, city,startDate,endDate)} >
        <legend>Search for an event:</legend>
        <div className="formFlex">
        <div className="labelFlex">
            <label for="city">City</label>
            <input type="text" name="city" placeholder="Please enter a City" required="true" value={city} onChange={setCityFunction}>
        </input>
        </div>
        <div className="labelFlex">
        <label for="startDate">Start Date</label>
        <input className="dateCursor" type="date" name="startDate" placeholder="Please enter a start date" required="true" value={startDate} onChange={setStartDateFunction}>
        </input>
        </div>
        <div className="labelFlex">
        <label for="endDate">End Date</label>
        <input className="dateCursor" type="date" name="endDate" placeholder="Please enter an end date" required="true" value={endDate} onChange={setEndDateFunction}> 
        </input>
        </div>
        </div>
        <button type="submit">Find Events</button>
        </form>
        </div>
        )}

export default Form;