import React from "react";

import { LunchInput } from "./formElements/LunchInput";
import { NameInput } from "./formElements/NameInput";
import { SizeInput } from "./formElements/SizeInput";

const emptyForm = {
    name: "",
    tShirtSize: "W-S",
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
                style: { backgroundColor: "red" },
                placeholder: "Error"
            })
        } else {
            this.setState({
                nameError:false,
                style: { backgroundColor: "white" }
            })

        }
    }

    handleSubmit() { //Wird beim Abschicken des Formulars ausgeführt
        const {name, tShirtSize, lunch} = this.state; //object destructuring um nur an die 3 relevanten properties zu kommen und nicht noch die booleans formSubmitted etc
        this.props.onSubmit({ // schnell Zuweisung Objekt -> property name : value name 
            name,
            tShirtSize,
            lunch
        });
        this.setState({
            formSubmitted: true
        });
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
                        placeholder={this.state.placeholder}
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