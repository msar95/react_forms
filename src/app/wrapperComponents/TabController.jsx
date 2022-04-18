import React from "react";

export class TabController extends React.Component {
    render () {
        const tabSelection = this.props.children.map((tab, index) => {
            return ( <li><a href="#"><b>{ tab.props.headline }</b></a></li>) //# bedeutet das auf der Seite geblieben wird, verhindert das Brwoser nach "link sucht"
        })
        return (
            <div>
                <nav>
                    <ul>
                       {tabSelection} 
                    </ul>
                </nav>
                { this.props.children }
            </div>
        )
    }
}