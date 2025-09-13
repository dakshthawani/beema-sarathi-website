import React from 'react';

  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      // Log here if you have logging/telemetry
      // console.error('[ErrorBoundary]', this.props.name, error, errorInfo);
    }

    handleRetry = () => {
      this.setState({ hasError: false, error: null });
    };

    render() {
      if (this.state.hasError) {
        return (
          <div className="p-6 my-4 border border-red-200 bg-red-50 rounded">
            <h3 className="text-red-700 font-bold mb-2">
              Something went wrong{this.props.name ? ` in ${this.props.name}` : ''}.
            </h3>
            <p className="text-red-600 text-sm mb-3">
              {this.state.error?.message || 'Unknown error'}
            </p>
            <button
              onClick={this.handleRetry}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        );
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;