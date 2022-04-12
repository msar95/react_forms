import React from "react";

export class AttendeeList extends React.Component {


    render() {
        const attendeeList = this.props.attendees.map((v, index) => {
            const key = `attende-${index}`;
            return (
                <li key={key}>{v.name}</li>
            );
        })
        return (
            <div>
                <p>Attendeelist</p>
                <ul>{attendeeList}</ul>
            </div>

        )
    }
}