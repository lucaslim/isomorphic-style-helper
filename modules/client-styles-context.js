import { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';

class ClientStylesContext extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired
  }

  getChildContext() {
    return {
      insertCss: function (styles) {
        return styles._insertCss();
      }
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
export default ClientStylesContext;
