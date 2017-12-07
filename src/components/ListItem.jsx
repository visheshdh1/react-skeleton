var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
              <a href="#" onClick={() => {this.props.remove(this.props.text)}}>{this.props.text}</a>

            </li>
        );
    }
});

module.exports = ListItem;
