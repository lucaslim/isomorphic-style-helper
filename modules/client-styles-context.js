var Children = require('react').Children;
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var ClientStylesContext = createReactClass({
  getChildContext: function () {
    return {
      insertCss: function (styles) {
        return styles._insertCss();
      }
    };
  },
  render() {
    return Children.only(this.props.children);
  }
});

ClientStylesContext.childContextTypes = {
  insertCss: PropTypes.func.isRequired
};

module.exports = ClientStylesContext;
