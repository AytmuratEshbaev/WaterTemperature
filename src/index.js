import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Water extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      status: 'Ice',
      style: {
        backgroundColor: "#01abcd"
      }
    }
    this.showState = this.showState.bind(this);
    this.changeTemperature = this.changeTemperature.bind(this);
  }

  showState() {
    if (this.state.temperature < 1) return `Ice ${this.state.temperature}`;
    else if (this.state.temperature < 100) return `Water ${this.state.temperature}`;
    return `Steam ${this.state.temperature}`;
  }

  changeTemperature(event) {
    let temperature = this.state.temperature;
    temperature += +event.target.value;
    this.setState({
      temperature: temperature,
      status: temperature < 1 ? "Ice" : (temperature < 100 ? "Water" : "Steam"),
      style: {
        backgroundColor: temperature < 1 ? "#01abcd" : (temperature < 100 ? "Blue" : "#bcfcfe")
      }
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <p className='showState' style={this.state.style}>{`${this.state.status}: ${this.state.temperature}`}</p>
        <div className='temperatureControl'>
          <button onClick={this.changeTemperature} value="1">+</button>
          <button onClick={this.changeTemperature} value="10">+10</button>
          <button onClick={this.changeTemperature} value="-1">-</button>
          <button onClick={this.changeTemperature} value="-10">-10</button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Water />
  </React.StrictMode>
);

// ice
// steam