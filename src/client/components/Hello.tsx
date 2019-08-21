import * as React from 'react';
import { TestInput } from './TestInput';
export interface IHelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<IHelloProps, {}> {
  render() {
    return (
      <div>
        <h1 data-testid="string-data">
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <TestInput />
      </div>
    );
  }
}
