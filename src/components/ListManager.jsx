var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText:''};
    },
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({items: currentItems, newItemText:''});
    },
    handleRemove : function(ritem){
    console.log(ritem);
    const remainder = this.state.items.filter((critem) => {
      if(critem !== ritem) return critem;
    });

    this.setState({items: remainder});
  },
    render: function() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.newItemText} />
                    <button>Add</button>
                </form>
                <List items={this.state.items} remove={this.handleRemove.bind(this)}/>
            </div>
        );
    }
});

module.exports = ListManager;
