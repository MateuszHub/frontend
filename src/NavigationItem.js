import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavigationItem.scss';

class NavigationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };

    }

    onClick() {
        this.setState((state, props) => ({
            expanded: !state.expanded
        }));
    }

    onLinkClick(e) {
        e.stopPropagation();
    }

    render() {
        let targets = JSON.parse(this.props.targets);
        if (!targets)
            return null;

        let links = targets.map((target) => {
            let routeName = Object.keys(target)[0];
            return <NavLink onClick={this.onLinkClick} className="link" to={target[routeName]}>{routeName}</NavLink>
        })

        return (
            <div className="mainItem" onClick={this.onClick.bind(this)}>
                <p >{this.props.name}</p>
                { this.state.expanded ? links : null}
            </div>)

    }
}


export default NavigationItem;