import React, { Component } from 'react'
class SendData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.mlab.com/api/1/databases/lab-contact-form/collections/contacts?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb',
            pname: '',
            email: '',
            favHero: '',
            favPower: ''
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
            case "favPower": this.setState({favPower: event.target.value}); break;
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
                "favPower": this.state.favPower
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="dataForm">
                    <div class="form-group">
                        <label for="pname">Name</label>
                        <input type="text" class="form-control" id="pname" name="pname" value={this.state.pname} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="inputFavHero">Favorite superhero</label>
                        <input type="text" class="form-control" id="inputFavHero" name="favHero" value={this.state.favHero} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="favPower">Favorite superpower</label>
                        <textarea class="form-control" rows="3" id="favPower" name="favPower" value={this.state.favPower} onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SendData;