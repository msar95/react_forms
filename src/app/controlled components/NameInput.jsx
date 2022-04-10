import React from "react";

export class NameInput extends React.Component {
    render() {
        return (
                <label>Name:
                    <input type="text"
                        name="name"
                        placeholder="Max Mustermann..."
                        value={this.props.value} //Kontrolle von React App -> bedeutet auch das ohne onChange Listener kann default Text noch nicth verändert werden
                        onChange={this.props.onChange}
                    />
                </label>
        )
    }
}