var React = require('react');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div>
        NOTES <br />
        Username: {this.props.username} <br />
        NOTES: {this.props.notes} <br />
      </div>
    );
  }
});

module.exports = Notes;