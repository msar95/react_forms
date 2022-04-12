import React from "react";

import { LunchInput } from "./controlled components/LunchInput";
import { NameInput } from "./controlled components/NameInput";
import { SizeInput } from "./controlled components/SizeInput";

const emptyForm = {
    name: "",
    tShirtSize: "w-l",
    lunch: false,
    formSubmitted: false,
    nameError: false
}

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = emptyForm;

        this.handleChange = this.handleChange.bind(this); // set und this Stolperfalle -> andere Schreibweise property in constructor an Instanz binden sodass immer das "richtige" this ausgewählt wird
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value // Computed-Property Names
        })
    }

    validateName() {
        const regex = /[a-zA-Z]{3,}/;
        const check = (regex.test(this.state.name)) ? true : false;
        return check;
    }

    handleBlur() {
        if (!this.validateName()) {
            this.setState({
                nameError:true,
                style: { backgroundColor: "red" }
            })
        } else {
            this.setState({
                nameError:false,
                style: { backgroundColor: "white" }
            })
        }
    }

    handleSubmit() {
        this.setState({
            formSubmitted: true
        })
    }
    handleReset() {
        this.setState(emptyForm);
    }

    render() {
        if (!this.state.formSubmitted) {
            return (
                <div>
                    <NameInput
                        value={this.state.name}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        style={this.state.style}
                    />
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
            return (
                <div>
                    <h1>Du hast dich erfolgreich zum Event angemeldet!</h1>
                    <button onClick={this.handleReset}>Zurücksetzen des Formulars</button>
                </div>
            )

        }

    }
}