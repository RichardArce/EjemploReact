import React, { Component } from 'react'

class SendData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.mlab.com/api/1/databases/lab-contact-form/collections/contacts?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb',
            pname: '',
            email: '',
            favHero: '',
            favComic: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        switch(name){
            case "pname": this.setState({pname: event.target.value}); break;
            case "email": this.setState({email: event.target.value}); break;
            case "favHero": this.setState({favHero: event.target.value}); break;
            case "favComic": this.setState({favComic: event.target.value}); break;
            default:  break;
        }
      }

    handleSubmit(event) {
        this.webService().then((resolved) => {
            alert('Data was sent');
        }, (error) => {
            alert('ERROR Data was NOT sent');
        });
        event.preventDefault();
    }

    webService() {
        return fetch(this.state.url, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            method: 'POST',
            body: JSON.stringify({
                "name": this.state.pname,
                "email": this.state.email,
                "favHero": this.state.favHero,
                "favComic": this.state.favComic
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="dataForm">
                    <div className="form-group">
                        <label htmlFor ="pname">Name</label>
                        <input type="text" className="form-control" id="pname" name="pname" value={this.state.pname} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor ="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor ="favHero">Favorite superhero</label>
                        <input type="text" className="form-control" id="favHero" name="favHero" value={this.state.favHero} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor ="favComic">Favorite comic</label>
                        <textarea className="form-control" rows="3" id="favComic" name="favComic" value={this.state.favComic} onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default SendData;