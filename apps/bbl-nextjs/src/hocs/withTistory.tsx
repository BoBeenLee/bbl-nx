import _ from 'lodash';
import React, { Component } from 'react';

import { isBrowser } from '@bbl-nextjs/utils/navigator';
import feednami from '@bbl-nextjs/apis/feednami';
import { getFeednamiTistories } from '@bbl-nextjs/configs/tistory';

// tslint:disable:object-literal-sort-keys
const withTistory = (TargetComponent: any) => {
  return class WithTistory extends Component {
    public static propTypes = {};

    public static defaultProps = {};

    public state = {
      tistories: [],
    };

    public async componentDidMount() {
      const rssUrl = 'http://cultist-tp.tistory.com/rss';

      if (isBrowser) {
        const response = await getFeednamiTistories(rssUrl);
        this.setState({ tistories: response });
      }
    }

    public render() {
      return (
        <TargetComponent tistories={this.state.tistories} {...this.props} />
      );
    }
  };
};

export default withTistory;
