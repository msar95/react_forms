import React from "react";
import { RegisterForm } from "./RegisterForm";
import { AttendeeList } from "./AttendeeList";
import { RedBorder } from "./wrapperComponents/RedBorder";
import { Tab } from "./wrapperComponents/Tab";
import { TabController } from "./wrapperComponents/TabController";

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
        lunch: false
    }
]

export class App extends React.Component {
    constructor(props) { // Implementieren des constructors damit state genutzt werden kann um neueAttendees an die AttendeeList übergeben werden können
        super(props);

        this.state = {
            attendeeList: mockAttendees
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(newAttendee) {
        this.setState(prevState => {
            return {
                ...prevState,
                attendeeList: [
                    ...prevState.attendeeList,
                    newAttendee
                ]
            }
        })

    };
    render() {
        return (
            <div>
                <TabController>
                    <Tab headline={'Registrierung'}>
                        <RegisterForm onSubmit={this.handleSubmit} />
                    </Tab>
                    <Tab headline={'Teilnehmendenliste'}>
                        <AttendeeList attendees={this.state.attendeeList} />
                    </Tab>
                </TabController>
            </div>
        );
    }
}