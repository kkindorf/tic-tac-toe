var React = require("react");
var Table = React.createClass({
  render: function(){
    return (
      <div>
        <div id="flex-width">
          <table id="table">
            <tbody>
              <tr>
                <td id="0" className="top left" onClick={this.props.onClick}></td>
                <td id="1" className="top" onClick={this.props.onClick}></td>
                <td id="2" className="top right" onClick={this.props.onClick}></td>
              </tr>
              <tr>
                <td id="3" className="left" onClick={this.props.onClick}></td>
                <td id="4" className="box" onClick={this.props.onClick}></td>
                <td id="5" className="right" onClick={this.props.onClick}></td>
              </tr>
              <tr>
                <td id="6" className="bottom left" onClick={this.props.onClick}></td>
                <td id="7" className="bottom" onClick={this.props.onClick}></td>
                <td id="8" className="bottom right" onClick={this.props.onClick}></td>
              </tr>
            </tbody>
          </table>
          <h1 id="wins"></h1>
        </div>
      </div>
    )
  }
})
module.exports = Table;
