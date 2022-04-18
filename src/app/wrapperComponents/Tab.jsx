import React from "react";

export class Tab extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headline}</h1>
                <article>
                    { this.props.children }
                </article>
            </div>
        );
    }
}