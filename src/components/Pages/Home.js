import React, { Component } from 'react';

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
        <div>
          {console.log("Items ",items)}
          {items.data.results.map(item => (
            <div key={item.id}>
              <p>{item.title}</p> 
              <p>{item.description}</p>
            </div>
          ))}
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