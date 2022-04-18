import React from "react";

export class AttendeeList extends React.Component {


    render() {
        const attendeeList = this.props.attendees.map((attendee, index) => {
            const key = `attende-${index}`;
            return (
                <tr key={key}>
                    <td>{attendee.name}</td>
                    <td>{attendee.tShirtSize}</td>
                    <td><input type="checkbox" checked={attendee.lunch}></input></td>
                </tr>
            );
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>T-Shirt-Größe</th>
                            <th>Bleibt zum Mittagessen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendeeList}
                    </tbody>
                </table>
            </div>
        )
    }
}