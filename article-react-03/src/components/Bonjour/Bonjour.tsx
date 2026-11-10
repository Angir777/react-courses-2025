import { Component } from 'react';

interface HelloProps {
  name: string;
}

class Bonjour extends Component<HelloProps> {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h1>Hello, {name}!</h1>
      </div>
    );
  }
}

export default Bonjour