import React from "react";
import { RegisterForm } from "./RegisterForm";
import { AttendeeList } from "./AttendeeList";

const mockAttendees = [
    {
        name: "Sven Mustermann",
        tShirtSize: "M-M",
        lunch: true,
    },
    {
        name: "Bruce Wayne",
        tShirtSize: "M-L",
        lunch: true,
    },
    {
        name: "Diana Priince",
        tShirtSize: "W-S",
        lunch : false
    }
]

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Anmeldeformular für ein React-Workshop</h1>
                <RegisterForm/> 
                <h2>Teilnehmendenliste</h2>
                <AttendeeList attendees={mockAttendees}/>
            </div>

        );
    }
}