import React, { Component, ErrorInfo } from 'react';
import * as Sentry from '@sentry/browser';

interface IProps {
  isRoot?: boolean;
  error?: Error;
}

interface IState {
  hasError: boolean;
  errorInfo: ErrorInfo;
  eventId?: string;
}

class ExampleBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: { componentStack: '' },
      eventId: undefined,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(info);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.isRoot) {
        //render fallback UI
        const onClickReport = () => {
          Sentry.showReportDialog({ eventId: this.state.eventId });
        };
        return <button onClick={onClickReport}>Report feedback</button>;
      }
      return <h3>Something went wrong.</h3>;
    }

    //when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ExampleBoundary;
