import React from "react";

export class RedBorder extends React.Component {
    render () {
        const styles = {
            border : 'solid grey',
            margin: '15px',
            display: 'flex',
            flexWrap : 'wrap',
            width: '600px',
            flexDirection: 'column',
            alignItems : 'center',
        };

        return (
            <div style={ styles }>{ this.props.children }</div>
        )
    }
}