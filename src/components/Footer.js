import React, { Component } from 'react';
import '../styles/Footer/css_design/design_footer.css';
import '../styles/Footer/css_structure/structure_footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">React Project</h5>
                    <p className="card-text">Footer</p>
                    <a href="https://reactjs.org/" className="btn btn-primary">React</a>
                </div>
            </div>
        )
    }
}

export default Footer;