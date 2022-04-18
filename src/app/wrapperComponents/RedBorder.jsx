import React from "react";

export class RedBorder extends React.Component {
    render () {
        const styles = {border : 'solid red'};

        return (
            <div style={ styles }>{ this.props.children }</div>
        )
    }
}