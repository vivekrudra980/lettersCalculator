import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeSearchInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="input">Enter the phrase</label>
          <br />
          <input
            type="text"
            id="input"
            onChange={this.onChangeSearchInput}
            placeholder="Enter the Phrase"
          />
          <p>No.of Letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
