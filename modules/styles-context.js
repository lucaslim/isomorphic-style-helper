var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var Children = require('react').Children;

var StylesContext = createReactClass({
  getChildContext: function () {
    return { insertCss: this.props.onInsertCss };
  },
  render() {
    return Children.only(this.props.children);
  }
});

StylesContext.childContextTypes = {
  insertCss: PropTypes.func.isRequired
};

module.exports = StylesContext;
