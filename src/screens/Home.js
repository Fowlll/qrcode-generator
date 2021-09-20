import React, { Component } from 'react';
// Style
import '../style/main.css';

let QRCode = require('qrcode.react');


class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            url: 'https://dawsonprianon.com/'
        }
    }

    render() {
        return (
            <div id="home">

                <h1>QRCode Generator</h1>

                <input onChange={(e) => { this.setState({url: e.target.value})}} type="text" placeholder="URL de destination" minLength="10" maxLength="200" />

                <div id="code">
                    <QRCode renderAs="svg" value={this.state.url} />
                </div>

                <p>Développé avec coeur par <a href="https://dawsonprianon.com">Dawson Prianon</a></p>
                
            </div>
        );
    }
}

export default Home;