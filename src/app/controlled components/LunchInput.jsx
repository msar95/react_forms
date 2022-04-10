import React from "react";

export class LunchInput extends React.Component {
    render() {
        return (
            <div>
                <label>Willst du am Mittagessen teilnehmen?
                    <input type="checkbox"
                        name="lunch"
                        checked={this.props.checked}
                        onChange={this.props.onChange}
                    />
                </label>
            </div>
        )
    }
}