import React, { Component } from 'react';
import '../../styles/Pages/Home/home.css';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      api: 'https://gateway.marvel.com:443/v1/public/comics?offset=20&apikey=9eeb84160b6a67f701c4741064c0847a'
    };
  }

  componentDidMount() {
    fetch(this.state.api)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(this.state.items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container-fluid">
          <div className="card-deck">
            {items.data.results.map(item => (
              <div className="col-3" key={item.id}>
                <div className="card">
                  <img className="card-img" src={item.thumbnail.path+"/landscape_incredible."+item.thumbnail.extension} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.urls[0].url} className="btn btn-primary">Ver este comic.</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  //   handleSubmit() {
  //     this.webService().then((resolved) => {
  //       console.log(resolved.json())
  //     }, (error) => {
  //         alert('ERROR Data was NOT sent');
  //     });
  //     // event.preventDefault();
  // }

  //   webService() {
  //     return fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=9eeb84160b6a67f701c4741064c0847a', {
  //         headers: {
  //             "Content-Type": "application/json; charset=utf-8"
  //         },
  //         method: 'GET'
  //     })
  // }
}

export default Home;