import React from "react";

import { LunchInput } from "./controlled components/LunchInput";
import { NameInput } from "./controlled components/NameInput";
import { SizeInput } from "./controlled components/SizeInput";

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tShirtSize: "w-l",
            lunch: false,
            formSubmitted: false
        };
        this.handleChange = this.handleChange.bind(this); // set und this Stolperfalle -> andere Schreibweise property in constructor an Instanz binden sodass immer das "richtige" this ausgewählt wird
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value // Computed-Property Names
        })
    }

    handleSubmit() {
        console.log(this.state);
        this.setState({
            formSubmitted : true
        })
    }


    render() {
        if (! this.state.formSubmitted) {
            return (
                <div>
                    <NameInput
                        value={this.state.name}
                        onChange={this.handleChange} />
                    <SizeInput
                        value={this.state.tShirtSize}
                        onChange={this.handleChange} />
                    <LunchInput
                        value={this.state.lunch}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Anmelden</button>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>Du hast dich erfolgreich zum Seminar angemeldet!</h1>
                </div>
            )
        }


    }

}