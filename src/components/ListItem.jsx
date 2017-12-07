var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <li>
              <a href="#" onClick={() => {this.props.remove(text)}}>{this.props.text}</a>
                
            </li>
        );
    }
});

module.exports = ListItem;
