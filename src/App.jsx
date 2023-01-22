import React, { Component } from 'react';
import Section from './components/Section';
import FedbackOptions from './components/FedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const label = event.target.textContent;
    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  countTotalFeedbck = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const precent = Math.round(
      (this.state.good * 100) / this.countTotalFeedbck()
    );
    return precent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedbck}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
