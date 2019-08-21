import * as React from 'react';

export interface ITestInputState {
  name: string;
}

export class TestInput extends React.Component<{}, ITestInputState> {
  state = {
    name: '',
  };

  handleInput = () => {
    this.setState({ name: 'drew' });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleChange} aria-label="test-input" />
        <button onClick={this.handleInput}>Get New Name</button>
      </div>
    );
  }
}
