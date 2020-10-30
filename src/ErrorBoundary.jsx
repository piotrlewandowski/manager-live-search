import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Something bad happened!', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>App crashed</h1>
          <p>Something went wrong.</p>
          {this.state.error}
        </div>
      );
    }

    return this.props.children;
  }
}
