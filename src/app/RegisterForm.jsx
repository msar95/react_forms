import React from "react";

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tShirtSize: "w-l",
            lunch: false
        };

        this.handleChange = this.handleChange.bind(this); // set und this Stolperfall -> andere Schreibweise property in constructor an Instanz binden sodass immer das "richtige" this ausgewählt wird
    }

    handleChange(event) {
        const value = (event.target.name==='lunch') ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    render() {
        return (
            <form>
                <label>Name:
                    <input type="text"
                        name="name"
                        placeholder="Max Mustermann..."
                        value={this.state.name} //Kontrolle von React App -> bedeutet auch das ohne onChange Listener kann default Text noch nicth verändert werden
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="tShirtSelect">Wähle deine T-Shirt Größe</label>
                <select
                    id="tShirtSelect"
                    name="tShirtSize"
                    value={this.state.tShirtSize}
                    onChange={this.handleChange}
                >
                    <option value="w-s">W-S</option>
                    <option value="w-m">W-M</option>
                    <option value="w-l">W-L</option>
                    <option value="m-s">M-S</option>
                    <option value="m-m">M-M</option>
                    <option value="m-l">M-L</option>
                </select>
                <br />
                <label>Willst du am Mittagessen teilnehmen?
                    <input type="checkbox"
                        name="lunch"
                        checked={this.state.lunch}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        )
    }

}