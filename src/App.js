import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  state = {
    person: {
      fullName: 'Ons Ben Lazreg',
      bio: 'I am a web developer',
      imgSrc: '/profile.jpg',
      profession: 'Web Developer',
    },
    shows: false,
    timeInterval: 0, 
  };

  intervalId = null;
   // Lifecycle method: called after the component has been rendered to the screen
  componentDidMount() {
    this.startTimer();
  }
// Lifecycle method: called immediately before the component is removed from the screen
  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000); // Update the time interval every 1 second
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }
// Click event handler for the button
clickHandler = () => {
  this.setState({ shows: !this.state.shows }); // Toggle the 'shows' state between true and false
};

  render() {
    // Destructuring state variables
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    const buttonStyle = {
      backgroundColor: '#FF69B4',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };

    const imgStyle = {
      maxWidth: '300px', 
      maxHeight: '300px',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    };

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            {shows && (
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-img-top img-fluid"
                    src={imgSrc}
                    alt={fullName}
                    style={imgStyle}
                  />
                  <h5 className="card-title">{fullName}</h5>
                  <p className="card-text">{profession}</p>
                  <p className="card-text">{bio}</p>
                </div>
              </div>
            )}
            <div>
              <p>
                Time Interval Since Mount: {timeInterval} seconds
              </p>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-primary" style={buttonStyle} onClick={this.clickHandler}>
                {shows ? 'Hide info' : 'Show info'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;