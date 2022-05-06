import { isBrowser } from '@bbl-nx/utils';
import { feednamiApi } from '@bbl-nx/apis';
import _ from 'lodash';
import React, { Component } from 'react';

export const WithTistory = (TargetComponent: any) => {
  return class WithTistory extends Component {
    public override state = {
      tistories: [],
    };

    public override async componentDidMount() {
      const rssUrl = 'http://cultist-tp.tistory.com/rss';

      if (isBrowser) {
        const response = await feednamiApi(rssUrl);
        this.setState({ tistories: response });
      }
    }

    public override render() {
      return (
        <TargetComponent tistories={this.state.tistories} {...this.props} />
      );
    }
  };
};

export default WithTistory;
