var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function() {

        var createItem = function(text) {
            return <ListItem text={text} remove={remove}/>;
        };

        return (<ul>{this.props.items.map(createItem)} </ul>);
    }
});

module.exports = List;
