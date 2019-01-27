import React, { PureComponent } from 'react';

import getDisplayName from '../helpers/getDisplayName';

export default trashold => Component => {
  class withInfiniteScrolling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reachedBottom: false
      };
    }

    componentDidMount() {
      if (this.scroller) {
        window.addEventListener('scroll', this.onScroll);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
      const availDocumentHeight = document.documentElement.clientHeight;
      const distanceToBottom = this.scroller.getBoundingClientRect().bottom - availDocumentHeight;
      const { reachedBottom } = this.state;

      if (distanceToBottom < trashold && !reachedBottom) {
        this.setState({ reachedBottom: true });
      } else if (distanceToBottom > trashold && reachedBottom) {
        this.setState({ reachedBottom: false });
      }
    };

    getScrollerRef = node => {
      this.scroller = node;
    };

    render() {
      const { reachedBottom } = this.state;

      return (
        <>
          <Component {...this.props} reachedBottom={reachedBottom} />
          <div style={{ height: 1 }} ref={this.getScrollerRef} />
        </>
      );
    }
  }

  withInfiniteScrolling.displayName = `withInfiniteScrolling(${getDisplayName(Component)})`;

  return withInfiniteScrolling;
};
