import { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';

class ServerStylesContext extends PureComponent {
  static propTypes = {
    css: PropTypes.array.isRequired,
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired
  }

  getChildContext() {
    let { css } = this.props;
    return { insertCss: (...styles) => styles.forEach(style => css.push(style._getCss())) };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default ServerStylesContext;
