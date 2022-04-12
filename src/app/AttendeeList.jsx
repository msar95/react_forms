import React from "react";

export class AttendeeList extends React.Component {


    render() {
        const attendeeList = this.props.attendees.map((v, index) => {
            const key = `attende-${index}`;
            return (
                <tr key={key}>
                    <td>{v.name}</td>
                    <td>{v.tShirtSize}</td>
                    <td><input type="checkbox" checked={v.lunch}></input></td>
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