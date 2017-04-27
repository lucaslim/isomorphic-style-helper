var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var Children = require('react').Children;

var ServerStylesContext = createReactClass({
  getChildContext: function () {
    var self = this;
    return {
      insertCss: function (styles) {
        return self.props.context.push(styles._getCss())
      }
    };
  },
  render() {
    return Children.only(this.props.children);
  }
});

ServerStylesContext.propTypes = {
  context: PropTypes.array.isRequired
}

ServerStylesContext.childContextTypes = {
  insertCss: PropTypes.func.isRequired
};

module.exports = ServerStylesContext;
