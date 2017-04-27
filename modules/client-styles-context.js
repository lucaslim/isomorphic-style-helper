import { Component, Children } from 'react';
import PropTypes from 'prop-types';

class ClientStylesContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired
  }

  getChildContext() {
    return { insertCss: styles => styles._insertCss() };
  }

  render() {
    return Children.only(this.props.children);
  }
}
export default ClientStylesContext;
