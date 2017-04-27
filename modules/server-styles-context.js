import { Component, Children } from 'react';
import PropTypes from 'prop-types';

class ServerStylesContext extends Component {
  static propTypes = {
    css: PropTypes.array.isRequired,
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired
  }

  getChildContext() {
    let { css } = this.props;
    return { insertCss: styles => css.push(styles._getCss()) };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default ServerStylesContext;
