var React = require("react");
var Table = React.createClass({
  render: function(){
    return (
      <div>
        <div className="flex-width">
          <table>
            <tbody id="table">
              <tr>
                <td id="0" className="box" onClick={this.props.onClick}></td>
                <td id="1" className="box" onClick={this.props.onClick}></td>
                <td id="2" className="box" onClick={this.props.onClick}></td>
              </tr>
              <tr>
                <td id="3" className="box" onClick={this.props.onClick}></td>
                <td id="4" className="box" onClick={this.props.onClick}></td>
                <td id="5" className="box" onClick={this.props.onClick}></td>
              </tr>
              <tr>
                <td id="6" className="box" onClick={this.props.onClick}></td>
                <td id="7" className="box" onClick={this.props.onClick}></td>
                <td id="8" className="box" onClick={this.props.onClick}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})
module.exports = Table;
