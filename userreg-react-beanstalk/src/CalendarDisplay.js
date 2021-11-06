import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "YOUR_API_KEY";
let calendars = [
  {
    calendarId: "visma.com_t0qu80qpt6ci60e4268nsrquag@group.calendar.google.com",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

class CalendarDisplay extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    )
  }
}

export default CalendarDisplay;