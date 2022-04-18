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
    constructor(props) { // Implementieren des constructors damit state genutzt werden kann um neueAttendees an die AttendeeList übergeben werden können
        super(props);

        this.state = {
            attendeeList : mockAttendees
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(newAttendee){
        this.setState(prevState => {
            return {
                ...prevState,
                attendeeList : [
                    ...prevState.attendeeList,
                    newAttendee
                ]
            }
        })

    };
    render() {
        return (
            <div>
                <h1>Anmeldeformular für ein React-Workshop</h1>
                <RegisterForm onSubmit={this.handleSubmit}/> 
                <h2>Teilnehmendenliste</h2>
                <AttendeeList attendees={this.state.attendeeList}/>
            </div>

        );
    }
}