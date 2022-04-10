import React from "react";

export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : ""
        };

        this.handleChange = this.handleChange.bind(this); // set und this Stolperfall -> andere Schreibweise property in constructor an Instanz binden sodass immer das "richtige" this ausgewählt wird
    }

    handleChange (event) {
        this.setState({
            name : event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text"
                    value={this.state.name} //Kontrolle von React App -> bedeutet auch das ohne onChange Listener kann default Text noch nicth verändert werden
                    onChange={this.handleChange}
                />
            </form>

        )
    }

}