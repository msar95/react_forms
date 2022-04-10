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
        this.handleTshirtSizeChange = this.handleTshirtSizeChange.bind(this);
        this.handleLunchTick = this.handleLunchTick.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleTshirtSizeChange(event) {
        this.setState({
            tShirtSize: event.target.value
        })
    }

    handleLunchTick(event) {
        this.setState({
            lunch: event.target.checked
        })

    }
    render() {
        return (
            <form>
                <label>Name:
                    <input type="text"
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
                    value={this.state.tShirtSize}
                    onChange={this.handleTshirtSizeChange}
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
                    checked={this.state.lunch}
                    onChange={this.handleLunchTick}
                />
                </label>
            </form>
        )
    }

}