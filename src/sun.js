import React from 'react';

export default class extends React.Component {

    constructor(...args) {
        super(...args)
        this.state = {};
        this.textChange = this.textChange.bind(this);
    }

    textChange(e) {
        console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Sunrise/Sunset Application</h1>
                <input onChange={this.textChange.bind(this)}/>
                <span>{this.state.text}</span>
            </div>
        );
    }
}
