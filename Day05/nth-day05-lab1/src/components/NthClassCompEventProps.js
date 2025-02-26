import React, { Component } from 'react';

export default class NthClassCompEventProps extends Component {
    nthEventHandleClick1 = () => {
        alert('Hello... ' + this.props.nthRenderTitle);
    };

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.nthEventHandleClick1}>
                    Button1
                </button>
            </div>
        );
    }
}
