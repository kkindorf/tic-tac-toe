var React = require('react');

var Modal = React.createClass({
  render: function(){
    return(
      <div id="modal" className="myModal">
        <div className="modal-content">
          <h1>Choose your mark</h1>
          <div id="X" onClick = {this.props.onClick} className="mark">X</div>
          <div id="O" onClick = {this.props.onClick} className="mark">O</div>
        </div>
      </div>
    )
  }
})
module.exports = Modal;
