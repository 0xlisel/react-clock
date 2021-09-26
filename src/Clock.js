import React from 'react';
import './style.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      show: true,
    };
  }
  tick() {
    this.setState({
      time: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
