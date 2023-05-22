import { Component } from 'react';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  goodIncrement = () => {
    this.setState({ good: this.state.good + 1 });
  };

  neutralIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  badIncrement = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  add = (a, b, c) => {
    return Number(a) + Number(b) + Number(c);
  };

  positive = (a, b) => {
    return Math.ceil((a / b) * 100);
  };

  render() {
    return (
      <div>
        <h5>Please leave feedback</h5>
        <button type="button" onClick={this.goodIncrement}>
          Good
        </button>
        <button type="button" onClick={this.neutralIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.badIncrement}>
          {' '}
          Bad
        </button>

        <h4>Statistics</h4>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>

          <li>
            Total:{' '}
            {this.add(this.state.good, this.state.neutral, this.state.bad)}{' '}
          </li>
          <li>
            Positive feedback:{' '}
            {this.positive(
              this.state.good,
              this.add(this.state.good, this.state.neutral, this.state.bad)
            )}
            %
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
